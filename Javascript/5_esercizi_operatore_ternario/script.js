// Maggiorenne o minorenne \\
const age = 18;
const messaggio = age >= 18 ? "Sei maggiorenne" : "Sei minorenne";

console.log(messaggio);

// Numero pari o dispari \\
const numero = 78;
const risultato = numero % 2 === 0 ? "Pari" : "Disparo";
console.log(risultato);

// Prezzo scontato \\
const prezzo = 105;
const sconto = prezzo > 100 ? 20 : 0;
const prezzoFinale = prezzo - (prezzo * sconto) / 100;
console.log(prezzoFinale);

// Accesso al sito \\
const isLoggedIn = true;
const accesso = isLoggedIn ? "Benvenuto" : "Effettua il login";
console.log(accesso);

// Temperatura ideale \\
const temperatura = 25;
const stato = (temperatura > 30 ) ? "Troppo caldo" : (temperatura < 10 ) ? "Troppo freddo" : "Temperatura ideale";
console.log(stato);