# Process Improvement Case Study: Streamlit app

Interactive version of the process improvement case study. Drag the target
cycle-time slider and the improvement metrics recompute live; current-state
and future-state process flows are laid out side by side.

## Run locally

```bash
cd streamlit-process-improvement
python -m venv .venv
.venv/Scripts/activate        # .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
streamlit run app.py
```

## Deploy to Streamlit Community Cloud

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [share.streamlit.io](https://share.streamlit.io) and sign in with GitHub.
3. **New app** → pick this repo → branch `main` → main file path
   `streamlit-process-improvement/app.py`.
4. Deploy. Once it's live, update `liveUrl` for the "Information Systems
   Process Improvement Case Study" entry in `src/data/portfolioData.js`
   (top-level repo) from `demos/process-improvement.html` to the new
   `*.streamlit.app` URL.
