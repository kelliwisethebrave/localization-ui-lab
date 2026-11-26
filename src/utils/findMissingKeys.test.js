import { test, expect } from "vitest";
import { findMissingKeys } from "./findMissingKeys";

//Test cases
//One missing translation
//Expected: ["save"]
//All translation keys present
//Expected: []
//Empty target resource
//Expected: ["welcome", "changeLanguage", "save", "cancel"]
//Extra keys in the target source
//Expected: [] (assuming no missing keys)

test("finds missing French translation keys", () => {
  const en = {
    greeting: "Welcome",
    description: "Manage your devices",
    changeLanguage: "Switch to French",
  };

  const fr = {
    greeting: "Bienvenue",
    changeLanguage: "Passer en anglais",
  };
  const missingKeys = findMissingKeys(en, fr);

  expect(missingKeys).toEqual(["description"]);
});

test("returns an empty array when all translation keys exist", () => {
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

  const missingKeys = findMissingKeys(en, fr);
  expect(missingKeys).toEqual([]);
});

test("returns all source keys when the target is empty", () => {
  const en = {
    greeting: "Welcome",
    description: "Manage your devices",
    changeLanguage: "Switch to French",
  };

  const fr = {};

  const missingKeys = findMissingKeys(en, fr);

  expect(missingKeys).toEqual(Object.keys(en));
});

test("returns an empty array when there is an extra key not in source", () => {
  const en = {
    greeting: "Welcome",
    changeLanguage: "Switch to French",
  };

  const fr = {
    greeting: "Bienvenue",
    changeLanguage: "Passer en anglais",
    farewell: "Au revoir",
  };

  const missingKeys = findMissingKeys(en, fr);

  expect(missingKeys).toEqual([]);

});
