import { useState } from "react";

export function Calculator() {
  // Faccio un oggetto state per contenere ogni event.target.value di ogni input
  const [oggettoInput, setOggettoInput] = useState({
    firstInput: 0,
    secondInput: 0,
    operazione: "Addizione",
    result: 0,
  });

  // Funzione principale di callback chiamata a tutti gli onChange degli input
  const callbackInputSync = (event) => {
    const { name, value } = event.target;

    setOggettoInput((prevOggetto) => {
      // Devo fare una copia modificata dell'oggetto state precedente
      const updatedOggetto = { ...prevOggetto, [name]: value };

      // Calcola il risultato aggiornato
      // Devo convertire in float i numeri input che sono stringhe aggiungendo un valore di fallback se qualcosa va male nella conversione
      const firstNumber = parseFloat(updatedOggetto.firstInput) || 0;
      const secondNumber = parseFloat(updatedOggetto.secondInput) || 0;

      // Variabile che sarà il nuovo valore dentro alla proprietà result
      let newResult = 0;
      // Faccio uno switch per evitare una serie di if
      switch (updatedOggetto.operazione) {
        case "Addizione":
          newResult = firstNumber + secondNumber;
          break;
        case "Sottrazione":
          newResult = firstNumber - secondNumber;
          break;
        case "Moltiplicazione":
          newResult = firstNumber * secondNumber;
          break;
        case "Divisione":
          newResult =
            secondNumber !== 0 // Check per non dividere per 0
              ? firstNumber / secondNumber
              : "Errore: Divisione per 0";
          break;
        default:
          newResult = 0;
      }

      return { ...updatedOggetto, result: newResult };
    });
  };

  return (
    <>
      <label htmlFor="firstNumber">
        Inserisci primo numero
        <input
          id="firstNumber"
          type="number"
          name="firstInput"
          value={oggettoInput.firstInput}
          onChange={callbackInputSync}
        />
      </label>

      <label htmlFor="secondNumber">
        Inserisci secondo numero
        <input
          id="secondNumber"
          type="number"
          name="secondInput"
          value={oggettoInput.secondInput}
          onChange={callbackInputSync}
        />
      </label>

      <select name="operazione" id="operazione" onChange={callbackInputSync}>
        <option value="Addizione">Addizione</option>
        <option value="Sottrazione">Sottrazione</option>
        <option value="Moltiplicazione">Moltiplicazione</option>
        <option value="Divisione">Divisione</option>
      </select>
      <p>
        {oggettoInput.firstInput} {oggettoInput.operazione}{" "}
        {oggettoInput.secondInput}
      </p>
      <h3>{oggettoInput.result}</h3>
    </>
  );
}
