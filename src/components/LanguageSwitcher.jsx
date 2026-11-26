import { useState } from "react";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      greeting: "Welcome",
      description: "Manage your devices",
      save: "Save",
      cancel: "Cancel",
      changeLanguage: "Switch to French",
    },
    fr: {
      greeting: "Bienvenue",
      //greeting: "Bienvenue dans votre espace de gestion des appareils",
      // description is intentionally missing
      cancel: "Annuler",
      changeLanguage: "Passer en anglais",
      //button: "Revenir à la version anglaise de l’application",
    },
  };

  function switchLanguage() {
    setLanguage(language === "en" ? "fr" : "en");
  }

  return (
    <div>
      <h1>{translations[language].greeting}</h1>

      <p>
        {translations[language]?.description ?? translations.en.description}
      </p>

      <button onClick={switchLanguage}>{translations[language].changeLanguage}</button>
    </div>
  );
}

export default LanguageSwitcher;
