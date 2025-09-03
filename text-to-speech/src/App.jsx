import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState("");

  useEffect(() => {
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      setVoices(available);
      if (available.length && !selectedVoiceName)
        setSelectedVoiceName(available[0].name);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoiceName]);

  const speak = () => {
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoiceName);
    if (voice) utterance.voice = voice;
    // friendly defaults
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const toggleTheme = () => setIsDarkMode((s) => !s);

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <div className="background-gradient"></div>
      <div className="background-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>

      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">🎤</span>
          <span className="brand-text">Text to Speech</span>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="toggle-icon">
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Your Own Private Text To Speech</h1>
          <p className="hero-subtitle">
            Convert text to natural speech using modern Web APIs. Fast, private,
            and works entirely in your browser.
          </p>
          <div className="feature-badges">
            <span className="badge">🔒 Private</span>
            <span className="badge">⚡ Fast</span>
            <span className="badge">🌐 No Server</span>
          </div>
        </div>

        <div className="control-panel">
          <div className="input-group">
            <label className="input-label">
              <span className="label-text">Enter your text</span>
              <span className="label-hint">
                Type anything you want to hear spoken
              </span>
            </label>
            <div className="textarea-wrapper">
              <textarea
                className="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing here..."
                rows={5}
              />
              <div className="char-count">{text.length} characters</div>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              <span className="label-text">Choose voice</span>
              <span className="label-hint">
                {voices.length} voices available
              </span>
            </label>
            <div className="select-wrapper">
              <select
                className="voice-select"
                value={selectedVoiceName}
                onChange={(e) => setSelectedVoiceName(e.target.value)}
              >
                {voices.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="action-group">
            <button
              className="primary-btn"
              onClick={speak}
              disabled={!text.trim()}
            >
              <span className="btn-icon">▶️</span>
              <span className="btn-text">Speak Text</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <span>Powered by</span>
        <span className="highlight"> Github Copilot</span>
        <span> • Built with ❤️ in agent mode</span>
      </footer>
    </div>
  );
}

export default App;
