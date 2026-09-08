# Business Decision Support Dashboard: Streamlit app

Interactive version of the business dashboard concept. Filter by category
and the KPIs, revenue trend and category breakdown all recompute live.

## Run locally

```bash
cd streamlit-business-dashboard
python -m venv .venv
.venv/Scripts/activate        # .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
streamlit run app.py
```

## Deploy to Streamlit Community Cloud

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [share.streamlit.io](https://share.streamlit.io) and sign in with GitHub.
3. **New app** → pick this repo → branch `main` → main file path
   `streamlit-business-dashboard/app.py`.
4. Deploy. Once it's live, update `liveUrl` for the "Business Decision
   Support Dashboard" entry in `src/data/portfolioData.js` (top-level repo)
   from `demos/business-dashboard.html` to the new `*.streamlit.app` URL.
