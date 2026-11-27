import { test, expect } from "vitest";
import { findExtraKeys } from "./findExtraKeys";

test("finds extra target translation keys", () => {
  const en = {
    greeting: "Welcome",
    description: "Manage your devices",
    changeLanguage: "Switch to French",
  };

  const fr = {
    greeting: "Bienvenue",
    description: "Gérer vos appareils",
    changeLanguage: "Passer en anglais",
    farewell: "Au revoir",
    save: "Enregistrer",
  };

  const extraKeys = findExtraKeys(en, fr);
  expect(extraKeys).toEqual(["farewell", "save"]);
});

test("returns an empty array when no extra keys exist", () => {
  const en = {
    greeting: "Welcome",
    description: "Manage your devices",
    changeLanguage: "Switch to French",
  };

  const fr = {
    greeting: "Bienvenue",
    description: "Gérer vos appareils",
    changeLanguage: "Passer en anglais",
  };

  const extraKeys = findExtraKeys(en, fr);
  expect(extraKeys).toEqual([]);
});

test("returns an empty array when the target is empty", () => {
  const en = {
    greeting: "Welcome",
    description: "Manage your devices",
    changeLanguage: "Switch to French",
  };

  const fr = {};

  const extraKeys = findExtraKeys(en, fr);

  expect(extraKeys).toEqual([]);
});

test("returns all target keys when the source is empty", () => {
  const en = {};

  const fr = {
    greeting: "Bienvenue",
    description: "Gérer vos appareils",
    changeLanguage: "Passer en anglais",
  };

  const extraKeys = findExtraKeys(en, fr);

  expect(extraKeys).toEqual(["greeting", "description", "changeLanguage"]);
});
