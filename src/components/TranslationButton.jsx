import React, { useEffect, useState } from "react";
import frFlag from "./assets/flag-fr.webp";
import ukFlag from "./assets/flag-uk.webp";
import "./translation.css";

export default function TranslationButton({ onLangChange }) {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");

  const changeLang = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      setCurrentLang(lang);
      onLangChange && onLangChange(lang); // 🔹 envoie la langue à App
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
