# Sinhala Cyber News Hub

A responsive Sinhala-language cybersecurity news website starter.

## Important
This version is a **front-end demo**. The included news items are illustrative educational content, not verified live news. The source links point to the publications' websites. No RSS/API fetch or automatic translation is connected yet.

## Files
- `index.html` — page structure
- `style.css` — responsive dark theme
- `script.js` — demo news data, search, filters, sort and daily briefing dialog

## Publish on GitHub Pages
1. Create a GitHub repository (for example `sinhala-cyber-news`).
2. Upload all three files (`index.html`, `style.css`, `script.js`) to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the provided `https://USERNAME.github.io/REPOSITORY/` address.

## Next steps for live news
Add a scheduled GitHub Actions workflow that reads permitted RSS feeds, normalizes dates and URLs, removes duplicates, and writes a JSON data file. Then add a translation step through a provider whose terms and free limits meet your needs. Do not put API keys in client-side JavaScript. Review each publisher's terms and link back to the original article.
