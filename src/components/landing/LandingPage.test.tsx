import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders the main heading", () => {
    render(<LandingPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /investor-style read/i,
    );
  });

  it("renders the hero subline", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/Paste a link and you get one screen/i),
    ).toBeInTheDocument();
  });

  it("has main content landmark", () => {
    render(<LandingPage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
