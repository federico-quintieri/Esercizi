// Estrai valori da un array \\
const numeri = [10, 20, 30, 40, 50];
const [primo, secondo, terzo] = numeri;
console.log(primo, secondo, terzo);

// Salta elementi dell'array \\
const frutti = ["mela", "banana", "ciliegia", "arancia"];
const [primoFrutto, , terzoFrutto] = frutti;
console.log(primoFrutto, terzoFrutto);

// Estrai proprietà di un oggetto \\
const persona = {
  età: 90,
  città: "Roma",
};

const { età, città } = persona;
console.log(età, città);

// Rinomina proprietà \\
const prodotto = {
  nome: "Laptop",
  prezzo: 1000,
  disponibile: true,
};

const { prezzo: costo, disponibile: inMagazzino } = prodotto;

console.log(costo, inMagazzino);

// Default per proprietà mancanti \\
const config = {
  modalità: "scuro",
  lingua: "it",
};

const { modalità, lingua, tema = "Standard" } = config;

console.log(modalità, lingua, tema);

// Annida destrutturazione \\
const utente = {
  id: 1,
  nome: "Fabio",
  indirizzo: {
    via: "boh",
    città_natale: "Roma",
  },
};

const {id,nome,indirizzo:{via,città_natale}} = utente;

console.log(id,nome,via,città_natale);