import { useState } from "react";
import style from "./ThemeSwitcher.module.css";

export function ThemeSwitcher() {
  // Variabile state che contiene tema pagina web (light o dark)
  const [tema, setTema] = useState(style.temaDark);

  // Callback onClick del button cambio tema
  // Ovviamente si può scrivere diversamente questa condizione ma non mi interessa
  const callbackButtonTema = (event) => {
    let newTema = "";
    if (style.temaDark !== tema) newTema = style.temaDark;
    else if (style.temaLight !== tema) newTema = style.temaLight;
    setTema(newTema);
  };
  return (
    // Sto passando lo state che contiene la classe CSS tema
    <div className={`${style.cardTema} ${tema}`}>
      <h3>Sono un componente aaaa</h3>
      <p>Questa è la mia descrizione wow</p>
      <button onClick={callbackButtonTema}>Cambia tema</button>
    </div>
  );
}
