from pathlib import Path

import altair as alt
import pandas as pd
import streamlit as st

DATA_PATH = Path(__file__).parent / "data" / "supplier_metrics.csv"

DEFAULT_WEIGHTS = {"otif": 40, "defect": 25, "lead_time": 20, "price": 15}
FLAG_COLOR = {"Preferred": "#10b981", "Watch": "#f59e0b", "Critical": "#be123c"}
SHIPPING_MODE_OTIF = {
    "First Class": 0.0,
    "Second Class": 20.3,
    "Same Day": 52.2,
    "Standard Class": 60.2,
}

st.set_page_config(page_title="Supplier Performance Scorecard", page_icon="📦", layout="wide")


@st.cache_data
def load_metrics() -> pd.DataFrame:
    df = pd.read_csv(DATA_PATH)
    df["Department Name"] = df["Department Name"].str.strip()
    return df


def min_max_invert(series: pd.Series) -> pd.Series:
    lo, hi = series.min(), series.max()
    if hi == lo:
        return pd.Series(100.0, index=series.index)
    return 100.0 * (1.0 - (series - lo) / (hi - lo))


def score(agg: pd.DataFrame, weights: dict[str, float]) -> pd.DataFrame:
    df = agg.copy()
    df["otif_score"] = df["otif_rate_pct"]
    df["defect_score"] = (100.0 - df["defect_rate_pct"]).clip(lower=0)
    lead_time_penalty = df["lead_time_mean_deviation_days"].abs() + df["lead_time_std_days"]
    df["lead_time_score"] = min_max_invert(lead_time_penalty)
    df["price_score"] = min_max_invert(df["price_variance_pct"])

    total = sum(weights.values()) or 1.0
    w = {k: v / total for k, v in weights.items()}
    df["composite_score"] = (
        w["otif"] * df["otif_score"]
        + w["defect"] * df["defect_score"]
        + w["lead_time"] * df["lead_time_score"]
        + w["price"] * df["price_score"]
    ).round(1)

    critical_cutoff = df["composite_score"].quantile(0.25)
    preferred_cutoff = df["composite_score"].quantile(0.75)
    median_defect = df["defect_rate_pct"].median()
    defect_outlier = df["defect_rate_pct"] > median_defect * 2.0

    df["risk_flag"] = "Watch"
    df.loc[(df["composite_score"] >= preferred_cutoff) & ~defect_outlier, "risk_flag"] = "Preferred"
    df.loc[(df["composite_score"] <= critical_cutoff) | defect_outlier, "risk_flag"] = "Critical"
    return df.sort_values("composite_score", ascending=False).reset_index(drop=True)


metrics = load_metrics()

st.markdown("##### SUPPLY CHAIN ANALYTICS")
st.title("📦 Supplier Performance Scorecard")
st.markdown(
    "OTIF, lead-time consistency, defect rate and price variance rolled into a weighted "
    "composite score with risk flags, run against the real "
    "[DataCo Smart Supply Chain dataset](https://www.kaggle.com/datasets/shashwatwork/dataco-smart-supply-chain-for-big-data-analysis) "
    "on Kaggle (180,519 order lines). **Adjust the weights below and watch the ranking and "
    "risk flags recompute live.**"
)

st.sidebar.header("Composite score weights")
st.sidebar.caption("Weights auto-normalize to 100%, so any ratio works.")
if st.sidebar.button("Reset to defaults", use_container_width=True):
    for key, value in DEFAULT_WEIGHTS.items():
        st.session_state[f"weight_{key}"] = value

weights = {
    "otif": st.sidebar.slider("OTIF", 0, 100, DEFAULT_WEIGHTS["otif"], key="weight_otif"),
    "defect": st.sidebar.slider("Defect rate", 0, 100, DEFAULT_WEIGHTS["defect"], key="weight_defect"),
    "lead_time": st.sidebar.slider("Lead-time consistency", 0, 100, DEFAULT_WEIGHTS["lead_time"], key="weight_lead_time"),
    "price": st.sidebar.slider("Price variance", 0, 100, DEFAULT_WEIGHTS["price"], key="weight_price"),
}
total_weight = sum(weights.values()) or 1
st.sidebar.caption(
    "Normalized: OTIF {:.0f}% · Defect {:.0f}% · Lead time {:.0f}% · Price {:.0f}%".format(
        *(100 * v / total_weight for v in weights.values())
    )
)

scored = score(metrics, weights)
weights_are_default = weights == DEFAULT_WEIGHTS
if not weights_are_default:
    default_flags = score(metrics, DEFAULT_WEIGHTS).set_index("Department Name")["risk_flag"]
    scored["default_risk_flag"] = scored["Department Name"].map(default_flags)
    flipped = scored[scored["risk_flag"] != scored["default_risk_flag"]]

k1, k2, k3, k4 = st.columns(4)
total_lines = scored["order_lines"].sum()
w_otif = (scored["otif_rate_pct"] * scored["order_lines"]).sum() / total_lines
w_defect = (scored["defect_rate_pct"] * scored["order_lines"]).sum() / total_lines
k1.metric("OTIF (weighted)", f"{w_otif:.1f}%", help="Company-wide baseline across all order lines")
k2.metric("Defect rate (proxy)", f"{w_defect:.1f}%", help="Cancelled + suspected-fraud order share")
k3.metric("Critical suppliers", f"{(scored['risk_flag'] == 'Critical').sum()} of {len(scored)}")
k4.metric("Preferred suppliers", f"{(scored['risk_flag'] == 'Preferred').sum()} of {len(scored)}")

if not weights_are_default:
    if len(flipped) > 0:
        moves = ", ".join(
            f"**{row['Department Name']}** ({row['default_risk_flag']} → {row['risk_flag']})"
            for _, row in flipped.iterrows()
        )
        st.info(f"**{len(flipped)} supplier(s) changed risk flag** from the default weighting: {moves}.")
    else:
        st.caption("No suppliers changed risk flag at these weights, only their ranking shifted.")

col1, col2 = st.columns(2)

with col1:
    st.subheader("Composite score by supplier")
    chart = (
        alt.Chart(scored)
        .mark_bar()
        .encode(
            x=alt.X("composite_score:Q", title="Composite score", scale=alt.Scale(domain=[0, 100])),
            y=alt.Y("Department Name:N", sort="-x", title=None),
            color=alt.Color(
                "risk_flag:N",
                scale=alt.Scale(domain=list(FLAG_COLOR.keys()), range=list(FLAG_COLOR.values())),
                legend=alt.Legend(title="Risk flag"),
            ),
            tooltip=["Department Name", "composite_score", "risk_flag"],
        )
        .properties(height=380)
    )
    st.altair_chart(chart, use_container_width=True)

with col2:
    st.subheader("On-time rate by shipping mode (not by supplier)")
    mode_df = pd.DataFrame(
        {"Shipping Mode": SHIPPING_MODE_OTIF.keys(), "On-time %": SHIPPING_MODE_OTIF.values()}
    )
    mode_chart = (
        alt.Chart(mode_df)
        .mark_bar(color="#581c87")
        .encode(
            x=alt.X("Shipping Mode:N", sort="-y", title=None),
            y=alt.Y("On-time %:Q", scale=alt.Scale(domain=[0, 100])),
            tooltip=["Shipping Mode", "On-time %"],
        )
        .properties(height=380)
    )
    st.altair_chart(mode_chart, use_container_width=True)

st.subheader("Risk in two dimensions: OTIF vs. lead-time consistency")
st.caption("Bubble size is order volume, so it's easy to see whether a supplier's risk is a genuine performance issue or just a small-volume outlier.")
scatter = (
    alt.Chart(scored)
    .mark_circle(opacity=0.85)
    .encode(
        x=alt.X("otif_rate_pct:Q", title="OTIF %", scale=alt.Scale(zero=False)),
        y=alt.Y("lead_time_mean_deviation_days:Q", title="Lead-time mean deviation (days)"),
        size=alt.Size("order_lines:Q", title="Order lines", legend=alt.Legend(format="~s")),
        color=alt.Color(
            "risk_flag:N",
            scale=alt.Scale(domain=list(FLAG_COLOR.keys()), range=list(FLAG_COLOR.values())),
            legend=alt.Legend(title="Risk flag"),
        ),
        tooltip=["Department Name", "otif_rate_pct", "lead_time_mean_deviation_days", "order_lines", "risk_flag"],
    )
    .properties(height=340)
)
st.altair_chart(scatter, use_container_width=True)

st.subheader("Findings worth reviewing")
st.warning(
    "**Shipping mode predicts lateness far better than supplier does.** On-time rate barely "
    "moves by department (37.0-41.5%), but it swings from 0% to 60.2% by shipping mode. "
    "First Class is the single biggest lever in this dataset, not any one supplier."
)
st.warning(
    "**Price variance reads 0.0% for every supplier.** That's not because pricing is "
    "perfectly controlled; it's because this dataset's product catalog has exactly one "
    "fixed price per item, so there's no transactional drift to detect."
)
st.info(
    "**Risk flags are calibrated to this run's own score distribution** (top/bottom quartile, "
    "plus a defect-rate-outlier override) rather than a fixed external SLA, since the dataset's "
    "real on-time ceiling (around 41%) would fail a generic 80% target for every supplier at "
    "once. Try pushing Defect rate to 100 and the other three weights to 0 in the sidebar: Pet "
    "Shop moves from Critical to Preferred, its defect rate is actually the second-lowest in the "
    "dataset, it was only Critical because its low order volume made its lead-time variance look "
    "worse than it is."
)

header_col, download_col = st.columns([4, 1])
header_col.subheader("Full scorecard")
display_cols = {
    "Department Name": "Supplier",
    "order_lines": "Order Lines",
    "otif_rate_pct": "OTIF %",
    "lead_time_mean_deviation_days": "Lead Time Mean Dev (days)",
    "defect_rate_pct": "Defect Rate %",
    "price_variance_pct": "Price Variance %",
    "composite_score": "Composite Score",
    "risk_flag": "Risk Flag",
}
table = scored[list(display_cols.keys())].rename(columns=display_cols)
download_col.download_button(
    "⬇ CSV",
    data=table.to_csv(index=False).encode("utf-8"),
    file_name="supplier_scorecard.csv",
    mime="text/csv",
    use_container_width=True,
)


def flag_style(val: str) -> str:
    color = FLAG_COLOR.get(val, "#000")
    return f"background-color: {color}22; color: {color}; font-weight: 700;"


st.dataframe(
    table.style.map(flag_style, subset=["Risk Flag"]).format(
        {"OTIF %": "{:.1f}", "Lead Time Mean Dev (days)": "{:+.1f}", "Defect Rate %": "{:.1f}", "Price Variance %": "{:.1f}", "Composite Score": "{:.1f}"}
    ),
    use_container_width=True,
    hide_index=True,
)

st.caption(
    "Built end to end with Python (pandas) as a reproducible pipeline, not a one-off notebook. "
    "Because DataCo is a retail order export rather than a real procurement system, it has no "
    "supplier ID, QC/defect field or contract price table; the pipeline documents and uses "
    "explicit proxies for each (Department Name for supplier, cancelled/suspected-fraud rate "
    "for defects, each product's earliest observed price as a contract baseline) rather than "
    "treating a stand-in as if it were the real thing."
)
