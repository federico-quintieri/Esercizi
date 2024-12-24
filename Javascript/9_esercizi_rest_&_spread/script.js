// Unione di array \\
const frutti = ["banana", "mela", "pera"];
const verdure = ["zucchina", "cetriolo", "pomodoro"];
const cibi = [...frutti, ...verdure];
console.log(cibi);

// Copia di un array \\
const numeri = [1, 2, 3, 4, 5];
const numeriCopia = [...numeri, 6];
console.log(numeri);
console.log(numeriCopia);

// Espansione di oggetti \\
const persona = {
  nome: "Fede",
  età: 18,
};

const personaAggiornata = { ...persona, professione: "studente" };
console.log(persona, personaAggiornata);

// Funzioni con array \\
const sommaNumeri = (a, b, c) => a + b + c;
const valori = [1, 2, 3];
console.log(sommaNumeri(...valori));

// Funzione con numero variabile di argomenti \\
const sommaTutti = (...argomenti) => {
  let somma = 0;
  for (let i = 0; i < argomenti.length; i++) {
    somma += argomenti[i];
  }
  return somma;
};
console.log(sommaTutti(1, 2, 5, 6, 7, 8));

// Decomposizione di array \\
const arr_numeri = [1, 2, 3, 4, 5];
const [primoNumero, ...altriNumeri] = arr_numeri;
console.log(primoNumero, altriNumeri);

// Decomposizione di oggetti \\
const prodotto = {
  nome: "Marco",
  prezzo: 100,
  categoria: "Umano",
  disponibile: true,
};

const { nome, ...dettagliProdotto } = prodotto;
console.log(nome, dettagliProdotto);

// Funzione con parametri fissi e rest \\
const dettagliUtente = (nome, cognome, ...hobby) => {
  return `Mi chiamo ${nome} ${cognome} e i miei hobby sono ${hobby.slice(",")}`;
};
console.log(dettagliUtente("Federico", "Rossi", "calcio", "basket", "tennis"));

// Mischiare rest e spread \\
const aggiungiNumeri = (arrayNumeri, ...altroArray) => {
  const nuovoArray = [...arrayNumeri, ...altroArray];
  return nuovoArray;
};
const arrayN = [1,5,6];
console.log(aggiungiNumeri(arrayN,3,5,7,8,2));