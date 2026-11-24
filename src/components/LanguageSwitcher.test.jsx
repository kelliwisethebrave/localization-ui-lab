import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
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

test("switches to French when the button is clicked", async () => {
    const user = userEvent.setup();

    //Step 1: Render the component
    render(<LanguageSwitcher />)

    //Step 2: Find the button by its accessible name
    const button = screen.getByRole("button", {
        name: "Switch to French", 
    });

    //Step 3: Simulate a user clicking the button
    await user.click(button);

    //Step 4: Verify the French heading appears
    const heading = screen.getByRole("heading", {
        name: "Bienvenue",
    })

    //Step 5: Check the heading's text
    expect(heading.textContent).toBe("Bienvenue")
});