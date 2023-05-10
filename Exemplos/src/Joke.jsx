import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }, []);

  return (
    <>
      <h1>Chuck Norris Jokes</h1>
      {joke ? <p>{joke}</p> : <p>Loading...</p>}
    </>
  );
}
