import streamlit as st

SCATTERED_SOURCES = [
    "Fees FAQ (old page)",
    "Student Portal → Finance tab",
    "Emailed PDF from registrar",
    "Housing Office contact form",
    "Wellbeing service (separate site)",
    "IT Helpdesk ticket system",
    "Course handbook (PDF, v3)",
]

SERVICES = {
    "Fees & Payments": {
        "owner": "Finance Office",
        "channel": "Student Portal → Finance",
        "turnaround_days": (1, 2),
        "note": "Includes payment plans, refunds and fee status queries.",
    },
    "Housing": {
        "owner": "Accommodation Office",
        "channel": "Online form + drop-in hours",
        "turnaround_days": (2, 3),
        "note": "On-campus housing, off-campus listings, and contract issues.",
    },
    "Wellbeing & Support": {
        "owner": "Student Wellbeing Team",
        "channel": "Booking link (same-day slots available)",
        "turnaround_days": (0, 0),
        "note": "Counselling, disability support and general wellbeing check-ins.",
    },
    "Course & Registration": {
        "owner": "Academic Registry",
        "channel": "Registry email queue",
        "turnaround_days": (3, 5),
        "note": "Module changes, transcripts, and registration holds.",
    },
    "IT Help": {
        "owner": "IT Service Desk",
        "channel": "Helpdesk ticket or live chat",
        "turnaround_days": (0, 0),
        "note": "Login problems, Wi-Fi access, and software licences.",
    },
}


def format_turnaround(days_range: tuple[int, int]) -> str:
    lo, hi = days_range
    if hi == 0:
        return "Same day"
    if lo == hi:
        return f"{lo} business day" + ("s" if lo != 1 else "")
    return f"{lo}-{hi} business days"

st.set_page_config(page_title="Student Services Concept", page_icon="🎓", layout="wide")

st.markdown("##### INFORMATION SYSTEMS CASE STUDY")
st.title("🎓 Student Services, Organised by Need")
st.markdown(
    "Students need quick access to important support, course and service information, but "
    "digital journeys get difficult when information is scattered, duplicated, or not clearly "
    "connected to the right process. Here's the before-vs-after and a working version of the "
    "proposed structure."
)

st.subheader("Before: information scattered across pages")
st.markdown(
    " ".join(
        f'<span style="display:inline-block;margin:4px;padding:8px 12px;border-radius:10px;'
        f'background:#f1f5f9;color:#475569;font-size:13px;font-weight:600;">{item}</span>'
        for item in SCATTERED_SOURCES
    ),
    unsafe_allow_html=True,
)
st.caption("Same information, seven different places, no clear map of which one is current or who actually owns the answer.")

st.divider()

avg_days = sum((lo + hi) / 2 for lo, hi in (s["turnaround_days"] for s in SERVICES.values())) / len(SERVICES)
fastest = min(SERVICES.values(), key=lambda s: sum(s["turnaround_days"]))
slowest = max(SERVICES.values(), key=lambda s: sum(s["turnaround_days"]))

m1, m2, m3 = st.columns(3)
m1.metric(
    "Places to check before",
    len(SCATTERED_SOURCES),
    f"-{len(SCATTERED_SOURCES) - len(SERVICES)}, down to {len(SERVICES)} categories",
    delta_color="inverse",
)
m2.metric("Fastest turnaround", format_turnaround(fastest["turnaround_days"]))
m3.metric(
    "Average turnaround",
    f"{avg_days:.1f} business days",
    f"slowest: {format_turnaround(slowest['turnaround_days'])}",
    delta_color="off",
)

st.subheader("After: pick what you need, get the right service")

col1, col2 = st.columns([1, 2])
with col1:
    choice = st.radio("Category", list(SERVICES.keys()), label_visibility="collapsed")

with col2:
    service = SERVICES[choice]
    with st.container(border=True):
        st.markdown(f"**{choice}**")
        r1, r2 = st.columns(2)
        r1.markdown("Owned by")
        r2.markdown(f"**{service['owner']}**")
        r1, r2 = st.columns(2)
        r1.markdown("How to reach them")
        r2.markdown(f"**{service['channel']}**")
        r1, r2 = st.columns(2)
        r1.markdown("Typical turnaround")
        r2.markdown(f"**{format_turnaround(service['turnaround_days'])}**")
        st.caption(service["note"])

st.divider()
st.subheader("Advanced: turning the fix into a business case")
st.caption(
    "A UX improvement is easier to justify with a number attached. Set your own assumptions "
    "below, these are planning inputs, not measured results, and see the estimated staff and "
    "student time saved per month."
)

calc_col1, calc_col2 = st.columns(2)
requests_per_month = calc_col1.slider("Support requests per month", min_value=50, max_value=3000, value=600, step=50)
minutes_saved_per_request = calc_col2.slider(
    "Minutes saved per request",
    min_value=1,
    max_value=30,
    value=8,
    help="Time no longer spent searching scattered pages or being bounced between offices before reaching the right one.",
)
hours_saved_per_month = requests_per_month * minutes_saved_per_request / 60
staff_hours_per_fte_month = 150  # a rough full-time-equivalent capacity baseline for the FTE comparison below

c1, c2 = st.columns(2)
c1.metric(
    "Estimated hours saved per month",
    f"{hours_saved_per_month:,.0f}",
    f"at {requests_per_month:,} requests/month, {minutes_saved_per_request} min saved each",
    delta_color="off",
)
c2.metric(
    "Equivalent to",
    f"{hours_saved_per_month / staff_hours_per_fte_month:.1f} FTE/month",
    f"assuming a {staff_hours_per_fte_month}-hour service month",
    delta_color="off",
)

st.caption(
    "Built to demonstrate the information architecture behind the concept, service names and "
    "contact details are illustrative, not a real university's actual services."
)
