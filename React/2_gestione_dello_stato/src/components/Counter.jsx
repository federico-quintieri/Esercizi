// Component that uses the state of react
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  // Callback che aumenta
  const callbackAumenta = (event) => {
    console.log(event.target.name);
    setCounter(counter + 1);
  };

  // Callback che diminuisce
  const callbackDiminuisce = (event) => {
    console.log(event.target.name);
    setCounter(counter - 1);
  };

  // Cosa vogliamo restituire
  return (
    <div>
      <p>{counter}</p>
      <button name="button_Aumenta" onClick={callbackAumenta}>
        +
      </button>
      <button name="button_Diminuisce" onClick={callbackDiminuisce}>
        -
      </button>
    </div>
  );
}

// Come esercizio bonus prova a scrivere una sola funzione di callback invece che due perchè come vedi la maggior parte delle istruzioni si ripete
// In basso te la spoileri
























//   // Callback gestione aumento e decremento
//   const callbackContatore = (event) => {
//     if (event.target.name === "button_Aumenta") setCounter(counter + 1);
//     else if (event.target.name === "button_Diminuisce") setCounter(counter - 1);
//   };
