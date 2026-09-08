# Student Services Concept: Streamlit app

Interactive version of the student services information-architecture case
study. Pick a service category and its owner, contact channel and typical
turnaround update live.

## Run locally

```bash
cd streamlit-student-services
python -m venv .venv
.venv/Scripts/activate        # .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
streamlit run app.py
```

## Deploy to Streamlit Community Cloud

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [share.streamlit.io](https://share.streamlit.io) and sign in with GitHub.
3. **New app** → pick this repo → branch `main` → main file path
   `streamlit-student-services/app.py`.
4. Deploy. Once it's live, update `liveUrl` for the "Student Services Data &
   Systems Improvement Concept" entry in `src/data/portfolioData.js`
   (top-level repo) from `demos/student-services.html` to the new
   `*.streamlit.app` URL.
