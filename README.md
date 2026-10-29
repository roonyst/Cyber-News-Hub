# Sinhala Cyber News Hub

Responsive Sinhala-language cybersecurity news website starter.

## Current state
- Search, category filtering, sorting, daily briefing dialog and source list are implemented.
- All 21 selected sources are listed.
- `sources.json` records candidate feed endpoints and verification notes.
- `sources.js` displays the source links and feed links/statuses.

**Important:** This is not yet connected to live automatic news ingestion or automatic Sinhala translation. Some RSS URLs are candidate endpoints, not confirmed working feeds. A scheduled fetcher must test feeds, log failures, deduplicate items, translate headlines/summaries and write a JSON file consumed by the page.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Open the GitHub Pages URL shown by GitHub.

## Live-news implementation
Use a scheduled GitHub Actions workflow or another server-side job to fetch feeds. Avoid fetching feeds directly in browser JavaScript because cross-origin restrictions often block it. Keep API keys in server-side secrets, never in public JavaScript. Respect each publisher's RSS terms and link to the original article. Reuters does not currently have a dependable official public RSS feed; the listed Google News query is a third-party alternative.
