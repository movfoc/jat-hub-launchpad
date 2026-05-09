## Export workshop banner for social media

Take the uploaded Roblox × JatHub workshop banner and produce two social-ready versions saved to `/mnt/documents/` for download.

### Outputs

1. **LinkedIn Feed** — `roblox-jathub-linkedin-1200x627.jpg` (1200×627, landscape)
2. **Instagram Square** — `roblox-jathub-instagram-1080x1080.jpg` (1080×1080, square)

### Approach

The source image is landscape ~2:1, so:

- **LinkedIn (1200×627)**: very close to source ratio. Upscale/recompose the existing artwork to exactly 1200×627 keeping the full layout (Roblox × JatHub lockup, tagline, character on right, three feature pills along the bottom).
- **Instagram square (1080×1080)**: needs a recomposition since the source is wide. Re-lay out the same elements onto a 1:1 canvas — keep the same dark background, neon accents, Roblox × JatHub headline, "Bridging the Gap Between Play and Big Brand Marketing" tagline, the Build character on the right, and the three pills (Engage Players / Build Connections / Grow Brands) — stacked/arranged to fit the square.

Use `imagegen--edit_image` on the uploaded source for each size with the matching aspect ratio, instructing it to preserve every text string, the JAT HUB rainbow logo, the EXCLUSIVE WORKSHOP chip, and the character exactly.

### Delivery

Both files served as `<lov-artifact>` downloads (image/jpeg).
