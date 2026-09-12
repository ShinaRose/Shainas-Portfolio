"""Visit each Streamlit Community Cloud app in a real headless browser so it
counts as traffic. If an app is asleep, click the wake button and wait for it
to load. Exits with an error if any app fails, so GitHub emails you."""

import sys
import time
from playwright.sync_api import sync_playwright

APPS = [
    "https://ai-career-path-recommender-ymk2wre3xhybtxigottkqw.streamlit.app/",
    "https://finops-spend-intelligence.streamlit.app/",
    "https://it-service-reliability-analytics-npsqhdpz2sqycuy8wubcqy.streamlit.app/",
    "https://shinarose-shainas-portfoli-streamlit-student-servicesapp-6uw2cm.streamlit.app/",
    "https://shinarose-shainas-portfo-streamlit-business-dashboardapp-efsepv.streamlit.app/",
    "https://shainas-portfolio-thssg4vnnbcaygv5kt9fhb.streamlit.app/",
    "https://shainas-portfolio-gr2fdup2rmfdsppgtkllah.streamlit.app/",
]

WAKE_BUTTON = "button:has-text('get this app back up')"
APP_LOADED = "[data-testid='stAppViewContainer']"


def find(page, selector):
    """The app runs inside an iframe, so check every frame on the page."""
    for frame in page.frames:
        loc = frame.locator(selector)
        if loc.count() > 0:
            return loc.first
    return None


def visit(page, url):
    page.goto(url, wait_until="domcontentloaded", timeout=90_000)
    page.wait_for_timeout(8_000)

    status = "AWAKE"
    button = find(page, WAKE_BUTTON)
    if button:
        button.click()
        status = "WOKEN UP"

    # Cold starts can take a few minutes
    deadline = time.time() + 300
    while time.time() < deadline:
        if find(page, APP_LOADED):
            page.wait_for_timeout(5_000)  # stay a moment so the visit registers
            return status
        page.wait_for_timeout(5_000)
    return "FAILED"


def main():
    failed = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for url in APPS:
            page = browser.new_page()
            try:
                result = visit(page, url)
            except Exception as e:
                result = f"FAILED ({e.__class__.__name__})"
            print(f"{result:<10} {url}", flush=True)
            if result.startswith("FAILED"):
                failed.append(url)
            page.close()
        browser.close()

    if failed:
        print(f"\n{len(failed)} app(s) did not load.")
        sys.exit(1)


if __name__ == "__main__":
    main()
