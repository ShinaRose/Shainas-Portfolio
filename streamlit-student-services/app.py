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
        "turnaround": "1-2 business days",
        "note": "Includes payment plans, refunds and fee status queries.",
    },
    "Housing": {
        "owner": "Accommodation Office",
        "channel": "Online form + drop-in hours",
        "turnaround": "2-3 business days",
        "note": "On-campus housing, off-campus listings, and contract issues.",
    },
    "Wellbeing & Support": {
        "owner": "Student Wellbeing Team",
        "channel": "Booking link (same-day slots available)",
        "turnaround": "Same day for urgent requests",
        "note": "Counselling, disability support and general wellbeing check-ins.",
    },
    "Course & Registration": {
        "owner": "Academic Registry",
        "channel": "Registry email queue",
        "turnaround": "3-5 business days",
        "note": "Module changes, transcripts, and registration holds.",
    },
    "IT Help": {
        "owner": "IT Service Desk",
        "channel": "Helpdesk ticket or live chat",
        "turnaround": "Same day for account issues",
        "note": "Login problems, Wi-Fi access, and software licences.",
    },
}

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
        r2.markdown(f"**{service['turnaround']}**")
        st.caption(service["note"])

st.caption(
    "Built to demonstrate the information architecture behind the concept, service names and "
    "contact details are illustrative, not a real university's actual services."
)
