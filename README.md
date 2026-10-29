# Sinhala Cyber News Hub — live RSS edition

## What is connected
- A GitHub Actions workflow fetches RSS/Atom feeds approximately every 3 hours and when manually triggered.
- Articles are deduplicated by URL, categorized, and saved to `news.json`.
- The website reads `news.json`; demo headlines are no longer presented as live news.
- If a `GEMINI_API_KEY` repository secret is configured, the workflow also requests Sinhala translations. Without it, live English headlines are shown and a clear Sinhala note says translation is not ready.
- Failed feeds are recorded in `news.json` under `failedSources`. Some sites may block automated fetching or change their feeds.

## Publish / update
1. Upload every file and folder in this project to the root of your GitHub repository, replacing old files. Include `.github/workflows/update-news.yml` and `scripts/fetch_news.py`.
2. In GitHub, open **Settings → Actions → General** and allow workflows to run.
3. Open **Actions → Update live cyber news → Run workflow** to start the first fetch. Wait for it to finish; check its logs for feeds that failed.
4. GitHub Pages serves `news.json` after the workflow commits it. Scheduled runs happen every 3 hours, but GitHub schedules can be delayed.
5. Optional Sinhala translation: create a Gemini API key and add it as repository secret `GEMINI_API_KEY` under **Settings → Secrets and variables → Actions**. The workflow then translates headlines and excerpts. Review translated content; AI translations may be imperfect and free API limits/terms may change. Never put API keys in public JS files.

## Notes
- This is an RSS aggregator, not a license to republish full articles. It displays titles, short excerpts, source names and links to original articles. Respect publisher terms.
- Reuters is searched via a Google News site-restricted RSS query, not a direct Reuters feed.
- RSS URLs can change. The Actions logs and `news.json` failure list identify inaccessible sources.
- Some sources (including MEMRI CJLAB and Hendry Adrian) do not have a feed configured in this first live version.
