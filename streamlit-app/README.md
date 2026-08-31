# Supplier Performance Scorecard: Streamlit app

Interactive version of the Supplier Performance Scorecard. Drag the OTIF,
defect, lead-time and price weight sliders and the ranking, composite scores
and risk flags recompute live. Runs against `data/supplier_metrics.csv`, a
small (11-row) pre-aggregated snapshot of real metrics computed from the
[DataCo Smart Supply Chain dataset](https://www.kaggle.com/datasets/shashwatwork/dataco-smart-supply-chain-for-big-data-analysis)
(Kaggle, 180,519 order lines). The full 90MB source CSV isn't needed here;
see the separate `supplier-scorecard` project for the pipeline that produced
this snapshot.

## Run locally

```bash
cd streamlit-app
python -m venv .venv
.venv/Scripts/activate        # .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
streamlit run app.py
```

## Deploy to Streamlit Community Cloud

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [share.streamlit.io](https://share.streamlit.io) and sign in with GitHub.
3. **New app** → pick this repo → branch `main` → main file path `streamlit-app/app.py`.
4. Deploy. Once it's live, update `liveUrl` for the "Supplier Performance
   Scorecard" entry in `src/data/portfolioData.js` (top-level repo) from
   `demos/supplier-scorecard.html` to the new `*.streamlit.app` URL, so the
   portfolio links straight to the interactive version.
