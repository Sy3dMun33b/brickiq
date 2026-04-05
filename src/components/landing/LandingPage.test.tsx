import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders the main heading", () => {
    render(<LandingPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /calm first read/i,
    );
  });

  it("renders the hero subline", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/One screen: verdict, numbers, local context/i),
    ).toBeInTheDocument();
  });

  it("has main content landmark", () => {
    render(<LandingPage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
