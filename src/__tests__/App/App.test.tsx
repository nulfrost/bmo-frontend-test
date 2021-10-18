import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, fireEvent, screen } from "../../../test-utils";
import App from "../../App";
import { waitFor } from "@testing-library/dom";

expect.extend(toHaveNoViolations);

describe("Testing general app functionality", () => {
  test("Check the page for any accessibility violations", async () => {
    // not meant to replace using tools like VoiceOver, just for easy to catch things
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("Should render a list of books", async () => {
    const { findAllByTestId } = render(<App />);
    await waitFor(() => findAllByTestId("book"));
    expect((await findAllByTestId("book")).length).toBeGreaterThan(1);
  });

  test("Should be able to search for books", async () => {
    const { getByLabelText, getByText, findAllByTestId } = render(<App />);
    const searchInput = getByLabelText("Search") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Captain Underpants" } });
    fireEvent.click(getByText("Find"));
    await waitFor(() => findAllByTestId("book"));
    expect(getByText("Adventures of Captain Underpants")).toBeInTheDocument();
  });

  test("Should be able to sort the books by title", async () => {
    const { getByLabelText, findAllByTestId } = render(<App />);
    fireEvent.change(getByLabelText("Sort By"), { target: { value: 0 } });
    const booksSortedByDate = await waitFor(() => findAllByTestId("book"));
    expect(booksSortedByDate[0]).toHaveTextContent(
      "Harry Potter and the Philosopher's Stone"
    );
  });
});
