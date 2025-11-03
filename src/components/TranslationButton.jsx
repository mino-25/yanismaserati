import React, { useState } from "react";

export default function TranslationButton() {
  const [open, setOpen] = useState(false);

  const changeLang = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main button */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-white shadow-lg rounded-full p-2 cursor-pointer"
      >
        <img
          src={require("./assets/flag-fr.webp")}
          alt="language"
          className="w-8 h-8"
        />
      </div>

      {/* Popup with flags */}
      {open && (
        <div className="absolute bottom-12 right-0 bg-white shadow-md rounded-lg p-2 flex flex-col gap-2">
          <button onClick={() => changeLang("fr")} className="flex items-center gap-2">
            <img src={require("./assets/flag-fr.webp")} alt="FR" className="w-6 h-6" />
            <span>Français</span>
          </button>
          <button onClick={() => changeLang("en")} className="flex items-center gap-2">
            <img src={require("./assets/flag-uk.webp")} alt="EN" className="w-6 h-6" />
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
}
