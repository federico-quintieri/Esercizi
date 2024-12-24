// Stampa numeri da 1 a 10 \\
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Stampa numeri pari \\
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Somma degli elementi di un array \\
const numeri = [1, 2, 3, 4, 5, 6];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
  somma += numeri[i];
}
console.log("La somma è: " + somma);

// Iterazione su un array dall'inizio \\
const animali = ["gatto", "cane", "tartaruga", "delfino", "scimmia"];
for (let i = 0; i < animali.length; i++) {
  const currElement = animali[i];
  console.log(currElement);
}

// Iterazione su un array dalla fine \\
const frutti = ["mela", "pera", "papaia", "melone", "cocomero"];
for (let i = frutti.length - 1; i >= 0; i--) {
  console.log(frutti[i]);
}

// Cerca un elemento in un array \\
const colori = ["giallo", "verde", "viola"];
for (let i = 0; i < colori.length; i++) {
  const currElement = colori[i];
  if (currElement === "verde") {
    console.log(`Colore verde trovato`);
    break;
  } else console.log("Colore verde non trovato");
}

// Iterazione con un ciclo while \\
let numero = 0;
while (numero >= 0 && numero <= 5) {
  console.log(numero);
  numero++;
}

// Iterazione inversa con un ciclo while \\
let numeroInverso = 10;
while (numeroInverso >= 0 && numeroInverso <= 10) {
  console.log(numeroInverso);
  numeroInverso--;
}

// Conta le parole in una frase \\
const frase = "Sono una frase, contami.";
let cont = 1;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === " ") cont++;
}
console.log(`Ci sono ${cont} parole in ${frase}`);
// Con i metodi si puo fare in modo piu accurato...

// Trova i numeri maggiori di 10 \\
const numeriRandom = [];
for (let i = 1; i <= 20; i++) {
  const numeroRandom = Math.floor(Math.random() * 20) + 1;
  numeriRandom.push(numeroRandom);
}

console.log("Lavoriamo con questo array ", numeriRandom);
for (let i = 0; i < numeriRandom.length; i++) {
  if (numeriRandom[i] > 10)
    console.log(
      `Ho trovato un numero maggiore a 10 nell'array: ${numeriRandom[i]}'`
    );
}

// Copia di un array in ordine inverso \\
const originale = ["Bob", "Marco", "Luca", "Giovanni", "Jenson"];
const invertito = [];
console.log(originale);
for (let i = originale.length - 1; i >= 0; i--) {
  const currElement = originale[i];
  invertito.push(currElement);
}
console.log(invertito);

