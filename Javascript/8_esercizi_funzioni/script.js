// Stampa un messaggio \\
const saluta = () => console.log("Ciao, come stai?");
console.log(saluta());

// Somma di due numeri \\
const somma = (a, b) => a + b;
console.log(somma(2, 5));

// Calcolo del quadrato \\
const calcolaQuadrato = (numero) => numero * numero;
console.log(calcolaQuadrato(5));

// Verifica numero pari \\
const isEven = (numero) => numero % 2 === 0;
console.log(isEven(3));

// Trova il maggiore tra due numeri \\
const trovaMaggiore = (a, b) => (a >= b ? a : b);
console.log(trovaMaggiore(8, 4));

// Calcolo dell'area del rettangolo \\
const calcolaAreaRettangolo = (base, altezza) => base * altezza;
console.log(calcolaAreaRettangolo(20, 50));

// Conta le vocali in una stringa \\
const contaVocali = (stringa) => {
  const vocali = ["a", "e", "i", "o", "u"];
  let contatore = 0;
  for (let i = 0; i < stringa.length; i++) {
    const currLettera = stringa[i].toLowerCase();
    if (vocali.includes(currLettera)) contatore++;
  }
  return contatore;
};
console.log(contaVocali("BOB"));

// Verifica età per guidare \\
const canDrive = (age) => age >= 18;
console.log(canDrive(18));

// Fattoriale di un numero \\
const calcolaFattoriale = (numero) => {
  if (numero === 0 || numero === 1) {
    return 1; // Il fattoriale di 0 o 1 è sempre 1
  }

  let risultato = 1;
  for (let i = 2; i <= numero; i++) {
    risultato *= i; // Moltiplica risultato per i
  }

  return risultato;
};
console.log(calcolaFattoriale(5));

// Concatena due stringhe \\
const concatenaStringhe = (str1, str2) => `${str1} ${str2}`;
console.log(concatenaStringhe("Ciao", "Zio"));

// Calcola media di un array \\
const calcolaMedia = (arrayNumeri) => {
  let somma = 0;
  for (let i = 0; i < arrayNumeri.length; i++) {
    somma += arrayNumeri[i];
  }
  return somma / arrayNumeri.length;
};
const arrayEsempio = [1, 2, 3, 4, 5];
console.log(calcolaMedia(arrayEsempio));

// Trasforma un array in maiuscolo \\
const trasformaInMaiuscolo = (arrayStringhe) => {
  const nuovoArray = [];
  for (let i = 0; i < arrayStringhe.length; i++) {
    const currElement = arrayStringhe[i];
    nuovoArray.push(currElement.toUpperCase());
  }
  return nuovoArray;
};

const arrayEsempioStringhe = ["mela", "banana", "zucchina"];
console.log(trasformaInMaiuscolo(arrayEsempioStringhe));
