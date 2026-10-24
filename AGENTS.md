# Architecture rules

- Keep the festival theme scoped to its page and dialog using semantic tokens so rebranding does not recolour other JAT Hub pages.
- Reference uploaded event logos through Lovable Assets pointers; keep a real square favicon in public for browser compatibility.
- The Future of Youth series page lives at /future-of-youth (component src/pages/FutureOfYouth.tsx); /future-of-us only exists as a redirect so older links keep working.
- Use AI Elements and AI SDK UI-message streaming for the embedded attendee assistant; keep model calls and organiser JSON in its Cloud function, never accept client-supplied knowledge as authoritative.
- Replace the assistant's server-side event-knowledge.json with organiser-supplied facts when available; an empty facts array must return the explicit unavailable-information response without calling AI.