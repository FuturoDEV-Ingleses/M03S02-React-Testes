/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Joke from "./Joke";
import { MOCKED_JOKE } from "../.jest/mocks";

describe("Joke", () => {
  test("deveria ter um título com o texto Chuck Norris Jokes na tela", () => {
    render(<Joke />);

    const title = screen.getByRole("heading", { name: "Chuck Norris Jokes" });
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
