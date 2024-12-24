// Sconto sul totale \\
const totaleConto = 120;
let sconto;

if (totaleConto < 50) {
  sconto = 0;
} else if (totaleConto >= 50 && totaleConto <= 100) {
  sconto = 10;
} else sconto = 20;

const prezzoDaScontare = (totaleConto * sconto) / 100;
const prezzoFinale = totaleConto - prezzoDaScontare;

console.log(prezzoFinale);

// Controllo di età \\
const age = 67;
if (age < 18) {
  console.log("Non puoi accedere al sito.");
} else if (age >= 18 && age <= 65) {
  console.log("Accesso consentito.");
} else console.log("Accesso consentito con limitazioni.");

// Valutazione scolastica \\
const voto = 90;
let livelloVotazione = "";
if (voto >= 0 && voto <= 59) livelloVotazione = "Insufficiente";
else if (voto >= 60 && voto <= 69) livelloVotazione = "Sufficiente";
else if (voto >= 70 && voto <= 89) livelloVotazione = "Buono";
else if (voto >= 90 && voto <= 100) livelloVotazione = "Ottimo";
console.log(livelloVotazione);

// Verifica multiplo \\
const numero = 17;

if (numero % 3 === 0 && numero % 5 === 0)
  console.log("Numero divisibile per entrambi");
else if (numero % 3 === 0) console.log("Numero divisibile solo per 3");
else if (numero % 5 === 0) console.log("Numero divisibile solo per 5");
else console.log("Il numero non è divisibile né per 3 né per 5.");

// Parità \\
const numeroParo = 5;
if (numeroParo % 2 === 0) console.log("Il numero è paro");
else console.log("Il numero è disparo");

// Offerta speciale \\
const numeroProdotti = 3;
if (numeroProdotti < 3) console.log("Non hai diritto a un'offerta speciale");
else if (numeroProdotti >= 3 && numeroProdotti <= 4)
  console.log("Hai diritto a uno sconto del 5%.");
else if (numeroProdotti >= 5) console.log("Hai diritto a uno sconto del 10%.");

