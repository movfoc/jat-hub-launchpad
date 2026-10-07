# Architecture rules

- Keep the festival theme scoped to its page and dialog using semantic tokens so rebranding does not recolour other JAT Hub pages.
- Reference uploaded event logos through Lovable Assets pointers; keep a real square favicon in public for browser compatibility.
- The Future of Youth series page lives at /future-of-youth (component src/pages/FutureOfYouth.tsx); /future-of-us only exists as a redirect so older links keep working.
- Static social-sharing metadata uses the Future of Youth campaign as the sitewide fallback because social crawlers do not execute this SPA; omit a fixed og:url so other routes are not attributed to the festival URL.