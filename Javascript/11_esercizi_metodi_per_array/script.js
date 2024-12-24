// Itera su un array e stampa ogni elemento \\
const arrayNumeri = [1, 2, 3, 4, 5];
arrayNumeri.forEach((currElem) => console.log(currElem));

// Somma tutti gli elementi di un array \\
const arrayNumeriV2 = [10, 20, 30, 40, 50];
let somma = 0;
arrayNumeriV2.forEach((currElem) => {
  somma += currElem;
});
console.log(somma);

// Raddoppia ogni valore in un array \\
const alcuniNumeri = [1, 2, 3, 4, 5];
const nuovoArray = alcuniNumeri.map((currElem) => currElem * 2);
console.log(nuovoArray);

// Crea un array di stringhe con prefisso \\
const arrayNomi = ["Mario", "Luigi", "Peach"];
const nuovoArrayNomi = arrayNomi.map((currElem) => "Giocatore " + currElem);
console.log(nuovoArrayNomi);

// Trova il primo numero maggiore di 10 \\
const numeriSpicy = [5, 7, 123, 4, 1, 2, 52];
const numeroTrovato = numeriSpicy.find((currElem) => currElem > 10);
console.log(numeroTrovato);

// Trova un oggetto con una proprietà specifica \\
const arrayOggetti = [
  { id: 1, nome: "Mario" },
  { id: 2, nome: "Luigi" },
  { id: 3, nome: "Peach" },
];

const oggettoTrovato = arrayOggetti.find((currElem) => currElem.id === 2);
console.log(oggettoTrovato);

// Filtra numeri pari \\
const arrayNumeriCasuali = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeriPari = arrayNumeriCasuali.filter(
  (currElem) => currElem % 2 === 0
);
console.log(arrayNumeriPari);

// Filtra oggetti con una condizione \\
const arrayOggettiBelli = [
  { nome: "Mario", età: 20 },
  { nome: "Luigi", età: 30 },
  { nome: "Peach", età: 25 },
];

const arrayOggettiBelliFiltrati = arrayOggettiBelli.filter(
  (currElem) => currElem.età > 25
);
console.log(arrayOggettiBelliFiltrati);
