export function findEmptyTranslations(translations) {
  const translationKeys = Object.keys(translations);
  //keys for the translations

  const filtered = translationKeys.filter((key) => {
    //going through each key and checking its translation
    const emptyTranslations = translations[key];
    return (
      typeof emptyTranslations === "string" && emptyTranslations.trim() === ""
    );
  });
  return filtered;
}

const fr = {
  greeting: "Bienvenue",
  description: "",
  changeLanguage: "Passer en anglais",
  save: "   ",
  count: 42,
  placeholder: null,
};

console.log(findEmptyTranslations(fr));
