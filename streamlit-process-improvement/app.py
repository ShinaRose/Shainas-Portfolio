import altair as alt
import numpy as np
import pandas as pd
import streamlit as st

CURRENT_STEPS = [
    ("Paper or email request", "No standard template, details often missing"),
    ("Manager approval by email", "No visibility into where it's stuck"),
    ("Finance re-enters into system", "Manual entry, duplicate records"),
    ("Procurement checks budget separately", "No shared view of spend vs. budget"),
    ("PO issued", "Often delayed, ~9 days average"),
]

FUTURE_STEPS = [
    ("Structured online form", "Required fields enforced upfront"),
    ("Auto-routed to the right approver", "Status visible to requester throughout"),
    ("Data flows into finance system", "No manual re-entry"),
    ("Budget checked in the same flow", "Real-time budget visibility"),
    ("PO auto-generated on approval", "Fewer errors, much faster turnaround"),
]

# (best case, most likely, worst case) days per step, for the Monte Carlo
# simulation further down. "Most likely" values sum to the same 9 / 3 day
# headline figures used above.
CURRENT_STEP_ESTIMATES = [(0.5, 1.5, 4.0), (0.5, 2.0, 5.0), (0.25, 1.0, 2.0), (0.5, 1.5, 3.0), (1.0, 3.0, 5.0)]
FUTURE_STEP_ESTIMATES = [(0.1, 0.25, 0.5), (0.25, 0.5, 1.0), (0.05, 0.1, 0.25), (0.1, 0.25, 0.5), (0.5, 1.9, 3.0)]

CURRENT_CYCLE_DAYS = 9

st.set_page_config(page_title="Process Improvement Case Study", page_icon="🔁", layout="wide")

st.markdown("##### SYSTEMS ANALYSIS CASE STUDY")
st.title("🔁 Mapping a Process, Then Fixing It")
st.markdown(
    "A business process can become inefficient when operational steps, system requirements "
    "and data ownership aren't clearly connected. Below is a worked example, a purchase "
    "requisition process, showing the current-state pain points and the future-state fix. "
    "**The process, roles and timings shown are an illustrative worked example, not a real "
    "company's data.**"
)

input_col, volume_col = st.columns(2)
target_days = input_col.slider(
    "Target cycle time after the fix (days)",
    min_value=1,
    max_value=CURRENT_CYCLE_DAYS,
    value=3,
    help="Drag to see how the improvement headline changes for a different target.",
)
annual_volume = volume_col.number_input(
    "Requisitions processed per year",
    min_value=1,
    value=200,
    step=10,
    help="Used only to translate the per-cycle time saved into an annual figure below.",
)
days_saved_per_cycle = CURRENT_CYCLE_DAYS - target_days
faster_pct = round(days_saved_per_cycle / CURRENT_CYCLE_DAYS * 100)
annual_days_saved = days_saved_per_cycle * annual_volume

k1, k2, k3, k4 = st.columns(4)
k1.metric("Avg. cycle time", f"{target_days} days", f"-{days_saved_per_cycle} days vs. {CURRENT_CYCLE_DAYS} today", delta_color="inverse")
k2.metric("Data re-entry points", "0", "-3, fully eliminated", delta_color="inverse")
k3.metric("Approval visibility", "Real-time", "from none today", delta_color="off")
k4.metric("Cycle-days saved per year", f"{annual_days_saved:,.0f}", f"at {annual_volume:,.0f} requisitions/year", delta_color="off")
st.caption(f"That target would make the process **{faster_pct}% faster** than today's {CURRENT_CYCLE_DAYS}-day average.")

st.divider()


def render_flow(label: str, steps: list[tuple[str, str]], accent: str, note_kind: str) -> None:
    st.markdown(f"**{label}**")
    cols = st.columns(len(steps))
    for i, (col, (title, note)) in enumerate(zip(cols, steps), start=1):
        with col:
            st.markdown(
                f"""<div style="background:{accent}22;border:1px solid {accent}55;
                border-radius:14px;padding:12px;min-height:150px;">
                <p style="font-size:12px;font-weight:800;color:#64748b;margin:0 0 6px;">{i}</p>
                <p style="font-size:14px;font-weight:800;color:#0f172a;margin:0 0 8px;">{title}</p>
                <p style="font-size:12px;font-weight:600;color:{accent};margin:0;">
                {"⚠ " if note_kind == "pain" else "✓ "}{note}</p>
                </div>""",
                unsafe_allow_html=True,
            )


render_flow("Current state", CURRENT_STEPS, "#be123c", "pain")
st.write("")
render_flow("Future state", FUTURE_STEPS, "#059669", "good")

st.divider()
st.subheader("Advanced: schedule-risk simulation")
st.caption(
    "A single '9 days' or '3 days' estimate hides how much each step can vary. Each step here is "
    "instead modeled as a triangular distribution (best case, most likely, worst case) and "
    "simulated 5,000 times, a lightweight Monte Carlo approach to schedule risk rather than one "
    "point estimate."
)


@st.cache_data
def simulate_cycle_time(estimates: tuple[tuple[float, float, float], ...], n: int = 5000, seed: int = 42) -> np.ndarray:
    rng = np.random.default_rng(seed)
    total = np.zeros(n)
    for lo, mode, hi in estimates:
        total += rng.triangular(lo, mode, hi, n)
    return total


current_sim = simulate_cycle_time(tuple(CURRENT_STEP_ESTIMATES))
future_sim = simulate_cycle_time(tuple(FUTURE_STEP_ESTIMATES))

p1, p2, p3, p4 = st.columns(4)
p1.metric("Current: 50% chance of finishing within", f"{np.percentile(current_sim, 50):.1f} days")
p2.metric("Current: 90% chance of finishing within", f"{np.percentile(current_sim, 90):.1f} days")
p3.metric("Future: 50% chance of finishing within", f"{np.percentile(future_sim, 50):.1f} days", delta_color="off")
p4.metric("Future: 90% chance of finishing within", f"{np.percentile(future_sim, 90):.1f} days", delta_color="off")

sim_df = pd.DataFrame(
    {
        "Cycle time (days)": np.concatenate([current_sim, future_sim]),
        "Scenario": ["Current"] * len(current_sim) + ["Future"] * len(future_sim),
    }
)
hist = (
    alt.Chart(sim_df)
    .mark_bar(opacity=0.7)
    .encode(
        x=alt.X("Cycle time (days):Q", bin=alt.Bin(maxbins=40)),
        y=alt.Y("count():Q", stack=None, title="Simulated runs"),
        color=alt.Color("Scenario:N", scale=alt.Scale(domain=["Current", "Future"], range=["#be123c", "#059669"])),
    )
    .properties(height=280)
)
st.altair_chart(hist, width="stretch")
st.caption(
    "Even in the future state, there's a real tail: the 90th-percentile case still runs longer "
    "than the '3 days' headline, worth planning for rather than promising a number that only "
    "holds on a good day."
)

st.caption(
    "Built to demonstrate the mapping method and the kind of before/after case this analysis "
    "produces, the process, roles and timings shown are an illustrative worked example, not a "
    "real company's data."
)
