import { test, expect } from "vitest";
import { findEmptyTranslations } from "./findEmptyTranslations";

test("returns empty strings and whitespace-only strings", () => {
  const fr = {
    greeting: "Bienvenue",
    description: "",
    changeLanguage: "Passer en anglais",
    save: "   ",
  };

  const emptyTranslations = findEmptyTranslations(fr);

  expect(emptyTranslations).toEqual(["description", "save"]);
});

test("ignores non-string values when checking for empty translations", () => {
  const fr = {
    greeting: "Bienvenue",
    description: "",
    count: 42,
    placeholder: null,
    enabled: false,
  };

  const emptyTranslations = findEmptyTranslations(fr);

  expect(emptyTranslations).toEqual(["description"]);
});

test("returns an empty array when there are no empty translations", () => {
  const fr = {
    greeting: "Bienvenue",
    description: "Gérer vos appareils",
    changeLanguage: "Passer en anglais",
  };

  const emptyTranslations = findEmptyTranslations(fr);
  expect(emptyTranslations).toEqual([]);
});

test("returns an empty array when the translation object is empty", () => {
  const fr = {};

  const emptyTranslations = findEmptyTranslations(fr);
  expect(emptyTranslations).toEqual([]);
});
