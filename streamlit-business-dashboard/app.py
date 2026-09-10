import altair as alt
import numpy as np
import pandas as pd
import streamlit as st

MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"]
MONTHLY_REVENUE = [198000, 210000, 221000, 236000, 254000, 284600]
NEXT_MONTH_LABEL = "Oct (projected)"
MONTHS_WITH_PROJECTION = MONTHS + [NEXT_MONTH_LABEL]

# Illustrative category mix that drifts toward Services over the period,
# consistent with the "led by the Services category" narrative below.
CATEGORY_SHARE_START = {"Services": 0.30, "Hardware": 0.33, "Subscriptions": 0.23, "Support Plans": 0.14}
CATEGORY_SHARE_END = {"Services": 0.38, "Hardware": 0.27, "Subscriptions": 0.22, "Support Plans": 0.13}
CATEGORY_COLOR = {"Services": "#be123c", "Hardware": "#f43f5e", "Subscriptions": "#a855f7", "Support Plans": "#581c87"}
# Illustrative per-category fulfilment rates. Hardware is deliberately the
# laggard, consistent with the "Hardware category's backlog" note below.
CATEGORY_FULFILMENT_PCT = {"Services": 98.5, "Hardware": 91.0, "Subscriptions": 99.2, "Support Plans": 97.8}
TOTAL_ORDERS_LATEST_MONTH = 3412
AVG_ORDER_VALUE = 83.40

st.set_page_config(page_title="Business Decision Support Dashboard", page_icon="📊", layout="wide")


@st.cache_data
def build_monthly_by_category() -> pd.DataFrame:
    rows = []
    n = len(MONTHS)
    for i, (month, total) in enumerate(zip(MONTHS, MONTHLY_REVENUE)):
        t = i / (n - 1)
        for category in CATEGORY_SHARE_START:
            share = CATEGORY_SHARE_START[category] * (1 - t) + CATEGORY_SHARE_END[category] * t
            rows.append({"Month": month, "Category": category, "Revenue": round(total * share)})
    return pd.DataFrame(rows)


by_category = build_monthly_by_category()

st.markdown("##### DATA ANALYTICS PROJECT")
st.title("📊 Business Decision Support Dashboard")
st.markdown(
    "Business users need data presented in a way that supports quick understanding rather "
    "than overwhelming them with raw information. This is a working version of that dashboard "
    "concept, built with sample data to show the structure and the kind of decision it's meant "
    "to support. **Filter by category below and the KPIs and charts recompute live.**"
)

selected = st.multiselect(
    "Category",
    options=list(CATEGORY_SHARE_START.keys()),
    default=list(CATEGORY_SHARE_START.keys()),
)
filtered = by_category[by_category["Category"].isin(selected)] if selected else by_category.iloc[0:0]

monthly_filtered = filtered.groupby("Month", sort=False)["Revenue"].sum().reindex(MONTHS).fillna(0)
q3_revenue = monthly_filtered.tail(3).sum()
q2_revenue = monthly_filtered.iloc[-6:-3].sum() if len(monthly_filtered) >= 6 else float("nan")
revenue_delta = f"{(q3_revenue / q2_revenue - 1) * 100:+.0f}% vs Q2" if q2_revenue else "n/a"

latest_month_all_revenue = by_category[by_category["Month"] == MONTHS[-1]]["Revenue"].sum()
latest_month_selected_revenue = monthly_filtered.iloc[-1]
revenue_share = latest_month_selected_revenue / latest_month_all_revenue if latest_month_all_revenue else 0.0
orders_estimate = TOTAL_ORDERS_LATEST_MONTH * revenue_share

if selected:
    latest_by_category = filtered[filtered["Month"] == MONTHS[-1]].set_index("Category")["Revenue"]
    category_total = latest_by_category.sum()
    fulfilment_pct = sum((latest_by_category[c] / category_total) * CATEGORY_FULFILMENT_PCT[c] for c in latest_by_category.index) if category_total else float("nan")
else:
    fulfilment_pct = float("nan")

k1, k2, k3, k4 = st.columns(4)
k1.metric("Revenue (Q3)", f"€{q3_revenue:,.0f}", revenue_delta)
k2.metric("Orders (latest month)", f"{orders_estimate:,.0f}", f"{revenue_share * 100:.0f}% of company-wide orders", delta_color="off")
k3.metric("Avg. order value", f"€{AVG_ORDER_VALUE:,.2f}", "+5% vs Q2", help="Stays close to constant across category mixes in this model, since orders scale with revenue.")
k4.metric(
    "Fulfilment rate",
    f"{fulfilment_pct:.1f}%" if selected else "n/a",
    "blended by revenue share of the categories selected" if selected else "select a category",
    delta_color="off",
)

if not selected:
    st.info("Select at least one category above to see the charts.")
else:
    col1, col2 = st.columns(2)

    with col1:
        st.subheader("Revenue trend, with next month projected")
        trend_df = monthly_filtered.reset_index()
        trend_df.columns = ["Month", "Revenue"]
        trend_df["Month"] = pd.Categorical(trend_df["Month"], categories=MONTHS_WITH_PROJECTION, ordered=True)

        slope, intercept = np.polyfit(np.arange(len(MONTHS)), monthly_filtered.values, 1)
        next_month_revenue = slope * len(MONTHS) + intercept
        projection_df = pd.DataFrame(
            {
                "Month": pd.Categorical([MONTHS[-1], NEXT_MONTH_LABEL], categories=MONTHS_WITH_PROJECTION, ordered=True),
                "Revenue": [monthly_filtered.iloc[-1], next_month_revenue],
            }
        )

        actual_line = (
            alt.Chart(trend_df)
            .mark_line(point=alt.OverlayMarkDef(color="#be123c"), color="#be123c")
            .encode(x=alt.X("Month:N", sort=MONTHS_WITH_PROJECTION), y=alt.Y("Revenue:Q", axis=alt.Axis(format="~s")), tooltip=["Month", "Revenue"])
        )
        projection_line = (
            alt.Chart(projection_df)
            .mark_line(strokeDash=[5, 4], point=alt.OverlayMarkDef(color="#94a3b8", filled=False), color="#94a3b8")
            .encode(x=alt.X("Month:N", sort=MONTHS_WITH_PROJECTION), y="Revenue:Q", tooltip=["Month", alt.Tooltip("Revenue:Q", format=",.0f")])
        )
        st.altair_chart((actual_line + projection_line).properties(height=320), width="stretch")
        st.caption(f"Projected via a simple linear trend on the {len(MONTHS)} months shown: **€{next_month_revenue:,.0f}**, a quick extrapolation, not a rigorous forecast.")

    with col2:
        st.subheader("Revenue by category")
        totals = filtered.groupby("Category")["Revenue"].sum().reset_index()
        donut = (
            alt.Chart(totals)
            .mark_arc(innerRadius=80)
            .encode(
                theta="Revenue:Q",
                color=alt.Color("Category:N", scale=alt.Scale(domain=selected, range=[CATEGORY_COLOR[c] for c in selected])),
                tooltip=["Category", "Revenue"],
            )
            .properties(height=320)
        )
        st.altair_chart(donut, width="stretch")

st.subheader("What this is telling us")
n1, n2, n3 = st.columns(3)

first_vs_last = filtered.pivot(index="Category", columns="Month", values="Revenue").reindex(columns=MONTHS)
if not first_vs_last.empty and first_vs_last[MONTHS[0]].sum() > 0:
    growth = ((first_vs_last[MONTHS[-1]] / first_vs_last[MONTHS[0]]) - 1) * 100
    fastest_growing = growth.idxmax()
    n1.success(f"**{fastest_growing}** grew fastest of the selected categories, up {growth[fastest_growing]:.0f}% from {MONTHS[0]} to {MONTHS[-1]}.")
else:
    n1.success("Select at least one category to see which one is growing fastest.")

n2.warning("Fulfilment rate slipped slightly, worth a closer look at the Hardware category's backlog.")
n3.info("Average order value is climbing faster than order volume, a pricing or bundling change worth investigating.")

header_col, download_col = st.columns([4, 1])
header_col.caption(
    "Built to demonstrate dashboard structure, KPI selection and how findings turn into a "
    "plain-language summary. The underlying numbers are illustrative sample data, not a real "
    "company's figures."
)
download_col.download_button(
    "⬇ CSV",
    data=filtered.to_csv(index=False).encode("utf-8"),
    file_name="revenue_by_category.csv",
    mime="text/csv",
    width="stretch",
)
