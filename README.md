
# Text to Speech (Vite + React)

A small personal Text-to-Speech web app built with Vite and React that uses the browser's native Web Speech API — no third-party TTS services or signup required.

Why I built this
-- The main reason I created this application is for personal use: searching online for simple TTS tools often led to paywalls, required signups, or displayed intrusive ads. This app is private, fast, and works entirely in your browser.

Features
- Type or paste text and press **Speak** to hear it spoken using the browser's SpeechSynthesis API.
- Select from all voices exposed by your browser (voice list depends on the platform and browser).
- Light / Dark theme toggle.
- Responsive, compact UI inspired by modern site design.

Files of interest
- `src/App.jsx` — main React component (UI, voice loading, speak logic).
- `src/App.css` — app styles and responsive layout.
- `public/` — static assets (put `copilot-party.gif` here if you want it displayed in the footer).

How to run
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Notes
- Voices are provided by the browser (Chrome, Edge, Safari). If the voice list is empty, open devtools and check `speechSynthesis.getVoices()` — some browsers load voices asynchronously and expose them once available.
- If you put `copilot-party.gif` in `public/`, the footer will display it via `/copilot-party.gif`.
- This project intentionally avoids third-party TTS services to keep things simple and private.

If you'd like, I can add options for rate, pitch, and persisting theme preference in localStorage.

Enjoy — hope you like this small, ad-free TTS tool!
