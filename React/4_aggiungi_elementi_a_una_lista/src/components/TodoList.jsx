import { useState } from "react";

export function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [arrayLista, setArrayLista] = useState([
    "Comprare il latte",
    "Andare in palestra",
    "Studiare React",
  ]);

  // Faccio callback che mi aggiorna valore di inputValue in base al valore scritto nell'input
  const callBackSyncInput = (event) => {
    setInputValue(event.target.value);
  };

  // Faccio callback che mi aggiorna array liste in base quando faccio submit di un form
  const callBackOnSubmit = (event) => {
    event.preventDefault();
    // Devo creare una copia dell'arrayLista, aggiungere la nuova stringa e aggiornare tramite setArrayLista
    const newArray = [...arrayLista, inputValue];
    setArrayLista(newArray);
  };

  return (
    <>
      <form onSubmit={callBackOnSubmit}>
        <label htmlFor="inputList">Inserici nuova attività</label>
        <input
          id="inputList"
          type="text"
          name="inputList"
          value={inputValue}
          onChange={callBackSyncInput}
          required
        />
        <button type="submit">Aggiungi</button>
      </form>

      <ol>
        {arrayLista.map((currElement) => (
          <li>{currElement}</li>
        ))}
      </ol>
    </>
  );
}
