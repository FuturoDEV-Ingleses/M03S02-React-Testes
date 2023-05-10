import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const renderComponent = () => {
  // const user = userEvent.setup();
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  // return { user };
};

describe("Nabar", () => {
  beforeEach(() => {
    renderComponent();
  });

  // se o componente é renderizado corretamente: com logo e 3 botões/links
  it("should render the logo", () => {
    // renderComponent();
    const logo = screen.getByRole("img", { name: /solar energy logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("should render 3 buttons", () => {
    // renderComponent();
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  // se o botão da rota default inicia selecionado e os demais não selecionados
  it("should render the default route button selected", () => {
    // renderComponent();
    const dahboardButton = screen.getByRole("button", { name: /dashboard/i });
    const unitsButton = screen.queryByRole("button", { name: /unidades/i });
    const registrationButton = screen.queryByRole("button", {
      name: /cadastro de energia gerada/i,
    });

    expect(dahboardButton).toHaveClass("selected");
    expect(unitsButton).not.toHaveClass("selected");
    expect(registrationButton).not.toHaveClass("selected");
  });

  // se a rota é alterada corretamente quando clica em algum botão
  it("should change the route when a button is clicked", async () => {
    // const { user } = renderComponent();
    const user = userEvent.setup();
    const unitsButton = screen.getByRole("button", { name: /unidades/i });
    await user.click(unitsButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/unidades");

    const registrationButton = screen.getByRole("button", {
      name: /cadastro de energia gerada/i,
    });
    await user.click(registrationButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/cadastro");

    const dashboardButton = screen.getByRole("button", { name: /dashboard/i });
    await user.click(dashboardButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  // se a rota é alterada para a default quando clica no logo
  it("should change the route to the default when the logo is clicked", async () => {
    // const { user } = renderComponent();
    const user = userEvent.setup();
    const logo = screen.getByRole("img", { name: /solar energy logo/i });
    await user.click(logo);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
