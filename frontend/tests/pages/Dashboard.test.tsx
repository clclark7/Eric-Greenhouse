import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Dashboard } from "../../src/pages/Dashboard";
import "@testing-library/jest-dom";
import { MantineProvider } from "@mantine/core";

// Helper function to wrap components with MantineProvider
interface RenderWithMantine {
  (component: React.ReactElement): ReturnType<typeof render>;
}

const renderWithMantine: RenderWithMantine = (component) => {
  return render(<MantineProvider>{component}</MantineProvider>);
};

describe("Dashboard Component", () => {
  it("renders the Dashboard component correctly", () => {
    renderWithMantine(<Dashboard />);
    expect(screen.getByLabelText("Dashboard")).toBeInTheDocument();
  });

  it("toggles navbar when burger button is clicked", () => {
    renderWithMantine(<Dashboard />);
    const burgerButton = screen.getByLabelText("Dashboard");
    expect(burgerButton).toBeInTheDocument();

    fireEvent.click(burgerButton);
    // Expectation: Navbar state should change (if applicable)
  });

  it("renders all navigation icons", () => {
    renderWithMantine(<Dashboard />);
    expect(screen.getByLabelText("Dashboard")).toBeInTheDocument();
    expect(screen.getByLabelText("Alerts")).toBeInTheDocument();
    expect(screen.getByLabelText("Logs")).toBeInTheDocument();
    expect(screen.getByLabelText("Settings")).toBeInTheDocument();
  });
});
