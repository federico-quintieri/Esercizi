// Stampa proprietà e valori \\
const persona = {
  nome: "bob",
  età: 89,
  città: "Roma",
};

for (let chiave in persona) {
  const nomeChiave = chiave;
  const valoreChiave = persona[chiave];
  console.log(`${nomeChiave} : ${valoreChiave}`);
}

// Conta le proprietà \\
const studente = {
  nome: "Marco",
  cognome: "Rossi",
  corso: "Informatica",
  anno: 3,
};
let numeroChiavi = 0;
for (let chiave in studente) {
  numeroChiavi++;
}
console.log(numeroChiavi);

// Verifica di una proprietà \\
const auto = {
  marca: "BMW",
  modello: "Serie 1",
  anno: 2000,
  colore: "grigio",
};

for (chiave in auto) {
  if (chiave === "modello") {
    console.log("La proprietà modello esiste");
    break;
  } else console.log("La proprietà modello non esiste");
}

// Modifica dei valori \\
const prodotti = {
  pane: 2,
  latte: 1.5,
  uova: 3,
};
console.log(prodotti);
for (let chiave in prodotti) {
  prodotti[chiave] *= 2;
}
console.log(prodotti);

// Somma di valori numerici \\
const spese = {
  affitto: 500,
  bollette: 150,
  spesa: 200,
};
let sommaChiavi = 0;
for (let chiave in spese) {
  sommaChiavi += spese[chiave];
}
console.log(sommaChiavi);

// Creazione di una lista di proprietà \\
const libro = {
  titolo: "Il signore degli anelli",
  autore: "Tolkien",
  anno: 1945,
};

const arrProprieta = [];
for (chiave in libro) {
  arrProprieta.push(chiave);
}
console.log(arrProprieta);

// Filtra proprietà con una condizione \\
const voti = {
  Marco: 3,
  Luca: 9,
  Giovanni: 6,
  Anna: 0,
};

for (let chiave in voti) {
  if (voti[chiave] >= 6) console.log(chiave);
}

// Confronto tra oggetti \\
const oggetto1 = {
  nome: "Giuseppe",
  valore: 8,
};
const oggetto2 = {
  nome: "Marco",
  valore: 5,
};

let numChiavi1 = 0;
let numeChiav2 = 0;
let cont = 0;

for (chiave1 in oggetto1) {
  for (chiave2 in oggetto2) {
    numeChiav2++;
    if (chiave1 === chiave2) cont++;
  }
  numChiavi1++;
}
const messaggio =
  cont === numChiavi1
    ? "Gli oggetti hanno le stesse chiavi"
    : "Gli oggetti hanno chiavi differenti";
console.log(messaggio);

// Ci sono metodi per rendere semplice e piu efficiente questo esercizio (Object.keys)

// Oggetto nidificato \\
const personaNuova = {
  nome: "Giovanni",
  età: 30,
  indirizzo: {
    via: "Roma",
    numero: 12,
  },
};

// Ciclo for...in per stampare tutte le proprietà
for (const proprietà in personaNuova) {
  if (typeof personaNuova[proprietà] === "object") {
    // Se la proprietà è un oggetto, usa un secondo ciclo for...in
    console.log(`${proprietà}:`);
    for (const sottoProprietà in personaNuova[proprietà]) {
      console.log(
        `  ${sottoProprietà}: ${personaNuova[proprietà][sottoProprietà]}`
      );
    }
  } else {
    // Stampa le proprietà non oggetto
    console.log(`${proprietà}: ${personaNuova[proprietà]}`);
  }
}

// Rendi i valori maiuscoli \\
const cibi = {
  frutta: "mela",
  verdura: "carota",
  dolce: "torta",
};
console.log(cibi);
for (let chiave in cibi) {
  const valore = cibi[chiave].toUpperCase();
  cibi[chiave] = valore;
}
console.log(cibi);
