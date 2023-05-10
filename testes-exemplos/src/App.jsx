import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./Joke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h1>Vite + React</h1>
      <p>Vite + React</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Joke />
    </>
  );
}

export default App;
