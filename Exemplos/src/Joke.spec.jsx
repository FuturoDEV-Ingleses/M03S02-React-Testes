import { render, screen } from "@testing-library/react";
import Joke from "./Joke";
import { MOCKED_JOKE } from "../.jest/mocks";

// como o componente Joke está separado do componente Count, podemos fazer a chamada fetch apenas aqui
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKED_JOKE),
  })
);

describe("Joke", () => {

  // Esse teste funciona sem ser async, pois não temos nenhuma chamada assíncrona
  // Mas sem async gera um warning no console, por conta do useEffect que roda toda vez que o componente é montado
  test("deveria ter um título com o texto Chuck Norris Jokes na tela", async () => {
    render(<Joke />);

    const title = await screen.findByRole("heading", { name: "Chuck Norris Jokes" });
    expect(title).toBeInTheDocument();
  });

  test("deveria ter um parágrafo com o texto da piada na tela", async () => {
    render(<Joke />);

    const loading = await screen.findByText("Loading...");
    expect(loading).toBeInTheDocument();

    const joke = await screen.findByText(MOCKED_JOKE.value);
    expect(joke).toBeInTheDocument();

    const loadingAfter = screen.queryByText("Loading...");
    expect(loadingAfter).not.toBeInTheDocument();
  });
});
