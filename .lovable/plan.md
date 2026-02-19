

## Add "X-plore" Button and Ideathon Page

### Overview
Add a new chartreuse/neon-green "X-plore" button (matching the uploaded colour reference -- bright yellow-green like `#D4FF00`) to the homepage. Clicking it opens a new browser tab with a dedicated X-PLORE Marketing Ideathon page, built as a React subpage that replicates the content from the provided `ideathon.html`.

### What will change

**1. New page: `src/pages/XPlore.tsx`**
- Convert the full `ideathon.html` content into a React component
- Reuse the existing project design system (Tailwind, Lucide icons imported as React components)
- Sections included:
  - Fixed navigation bar with JatHub X-PLORE branding
  - Hero section with floating icons, title "X-PLORE Marketing Ideathon", and CTAs
  - Philosophy section (Experience, Exploration, Execution cards)
  - Mission section ("Tearing Down The Wall" -- Students vs Brands connector)
  - For Partners section with benefits grid
  - For Students section with roles grid
  - The Process / Commercial Impact Framework section
  - Footer/contact CTA section
- Scroll-reveal animations recreated using Intersection Observer (via a `useEffect` hook)
- Custom styles (glass panels, text glow, floating shapes) defined inline or via Tailwind utilities
- Chartreuse colour (`#D4FF00`) used as the accent throughout, matching the uploaded HTML

**2. Update `src/App.tsx`**
- Add route: `<Route path="/xplore" element={<XPlore />} />`

**3. Update `src/components/Header.tsx`**
- Add a new "X-plore" button next to "Become a Member" in both desktop and mobile nav
- Styled with the chartreuse background (`bg-[#D4FF00] text-black`) and rounded-full shape matching the uploaded image
- Rendered as an `<a>` tag with `href="/xplore"`, `target="_blank"`, and `rel="noopener noreferrer"` so it opens in a new tab
- Includes a briefcase icon (matching the uploaded reference image)

### Technical details

- The chartreuse colour `#D4FF00` will be used directly via Tailwind arbitrary values (`bg-[#D4FF00]`) rather than adding it to the global theme, keeping the change minimal
- Unsplash images from the HTML will be kept as external URLs (same as the source HTML)
- Lucide React icons will replace the `<i data-lucide="...">` tags from the HTML
- The scroll-reveal animation will use a custom `useEffect` with `IntersectionObserver`
- Additional custom CSS (glass-panel, text-glow, shape-blob) will be defined in a `<style>` tag or as Tailwind classes within the component

