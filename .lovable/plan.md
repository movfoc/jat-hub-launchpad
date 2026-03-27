

# Plan: New Challenge Tracks Subpage

## Overview
Create a **new** page at `/xplore/challenge` with the glassmorphism "RealityX" design. The existing `/xplore/tracks` page remains untouched.

## Changes

### 1. New file: `src/pages/XPloreChallenge.tsx`
- **Data**: `REGISTRATION_FORM_URL` constant + `TRACKS_DATA` array (5 challenges A-E) with `id`, `icon`, `title`, `description`, `deliverables`, `currentTeams`, `maxTeams`
- **Background**: `#050505` with blue/purple radial gradients
- **Header**: "Back to Jabhub" link (top-left, `ChevronLeft`), centered H1 "Challenge Tracks", subtitle
- **Card grid**: Responsive (1/2/3 cols), glassmorphism cards (`bg-white/5 backdrop-blur-md border-white/10 rounded-2xl`), hover scale + glow
- **Join logic**: `handleJoin` opens Google Form; if `currentTeams >= maxTeams` → "Waiting List" (amber), else "Join Track" (gradient)
- **View Details**: Shadcn Dialog modal with full description, deliverables list, Progress bar, join button
- **Cursor trail**: Same desktop-only effect used on other X-plore pages

### 2. Update: `src/App.tsx`
- Add route: `<Route path="/xplore/challenge" element={<XPloreChallenge />} />`

### 3. Challenges (placeholder data)
- A: Visual Design Contents Using AI Tools (`Palette`)
- B: Future of Healthcare & Wellbeing (`HeartPulse`)
- C: Immersive E-commerce Experiences (`ShoppingBag`)
- D: Next-Gen Entertainment & Gaming (`Gamepad2`)
- E: Social Impact in Roblox (`Globe`)

## What stays the same
- `/xplore/tracks` page is completely unchanged
- No other files modified

