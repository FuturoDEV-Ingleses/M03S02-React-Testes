import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

function renderComponent() {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const logo = screen.getByRole("img", { name: /solar energy logo/i });
  const dahboardButton = screen.getByRole("button", { name: /dashboard/i });
  const unitsButton = screen.queryByRole("button", { name: /unidades/i });
  const registrationButton = screen.queryByRole("button", {
    name: /cadastro de energia gerada/i,
  });

  return { logo, dahboardButton, unitsButton, registrationButton };
}

describe("Nabar", () => {
  test("se o componente é renderizado corretamente: com logo e 3 botões/links", () => {
    const { logo, dahboardButton, unitsButton, registrationButton } =
      renderComponent();

    expect(logo).toBeInTheDocument();
    expect(dahboardButton).toBeInTheDocument();
    expect(unitsButton).toBeInTheDocument();
    expect(registrationButton).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("se o botão da rota default inicia selecionado e os demais não selecionados", () => {
    const { dahboardButton, unitsButton, registrationButton } =
      renderComponent();

    expect(dahboardButton).toHaveClass("selected");
    expect(unitsButton).not.toHaveClass("selected");
    expect(registrationButton).not.toHaveClass("selected");
  });

  test("se a rota é alterada corretamente quando clica em algum botão", async () => {
    const user = userEvent.setup();
    const { dahboardButton, unitsButton, registrationButton } =
      renderComponent();

    await user.click(unitsButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/unidades");

    await user.click(registrationButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/cadastro");

    await user.click(dahboardButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
