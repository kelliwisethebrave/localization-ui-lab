import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import LanguageSwitcher from "./LanguageSwitcher";

test("displays English text by default", () => {
  // Step 1: Render the component
  render(<LanguageSwitcher />);

  // Step 2: Find the heading
  const heading = screen.getByRole("heading", {
    name: "Welcome",
  });

  // Step 3: Check the heading's text
  expect(heading.textContent).toBe("Welcome");
});
