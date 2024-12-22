import { useState } from "react";

export function TodoList() {
  const [arrayState, setArrayState] = useState([
    "Comprare il latte",
    "Andare in palestra",
    "Studiare React",
  ]);

  return (
    <ol>
      {arrayState.map((currElement) => (
        <li>{currElement}</li>
      ))}
    </ol>
  );
}
