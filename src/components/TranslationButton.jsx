import React, { useEffect, useState } from "react";
import frFlag from "./assets/flag-fr.webp";
import ukFlag from "./assets/flag-uk.webp";
import "./translation.css";

export default function TranslationButton() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");

  useEffect(() => {
    // Detect Google Translate language change
    const observer = new MutationObserver(() => {
      const frame = document.querySelector(".goog-te-banner-frame");
      if (frame && frame.style.display === "none") {
        const lang = document.documentElement.lang || "fr";
        setCurrentLang(lang.startsWith("en") ? "en" : "fr");
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const changeLang = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      setCurrentLang(lang);
    }
    setOpen(false);
  };

  return (
    <div className="translate-container">
      <div className="translate-button" onClick={() => setOpen(!open)}>
        <img
          src={currentLang === "fr" ? frFlag : ukFlag}
          alt="flag"
          className="flag-icon"
        />
      </div>

      {open && (
        <div className="translate-popup">
          <button onClick={() => changeLang("fr")}>
            <img src={frFlag} alt="Français" className="flag-icon" />
          </button>
          <button onClick={() => changeLang("en")}>
            <img src={ukFlag} alt="English" className="flag-icon" />
          </button>
        </div>
      )}
    </div>
  );
}
