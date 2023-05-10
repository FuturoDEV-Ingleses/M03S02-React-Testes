/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("deveria ter uma imagem com alt Vite logo na tela", () => {
    render(<App />);

    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
  });

  test("deveria ter um título com o texto Vite + React na tela", () => {
    render(<App />);

    const title = screen.getByRole("heading", { name: "Vite + React" });
    expect(title).toBeInTheDocument();
  });

  test("deveria ter um botão com o texto count is 0 na tela", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "count is 0" });
    expect(button).toBeInTheDocument();
  });

  test("deveria ter um botão com o texto count is 1 na tela quando o botão for clicado", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: "count is 0" });
    await user.click(button);

    const newButton = screen.getByRole("button", { name: "count is 1" });
    expect(newButton).toBeInTheDocument();
  });
});
