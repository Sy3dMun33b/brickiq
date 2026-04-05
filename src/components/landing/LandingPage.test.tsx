import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders the main heading", () => {
    render(<LandingPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /standard first-pass on UK deals/i,
    );
  });

  it("renders the hero subline", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/fast enough to run on every lead/i),
    ).toBeInTheDocument();
  });

  it("has main content landmark", () => {
    render(<LandingPage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
