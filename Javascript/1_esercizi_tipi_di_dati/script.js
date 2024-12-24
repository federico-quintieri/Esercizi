// Utilizzo let e const \\
let ore = 5;
const ore_fisse = 12;

ore = 6;
// ore_fisse = 15; // Spoiler, non puoi cambiare il valore ad una variabile const

// Manipolazione di array \\
const shoppingList = ["mela", "zucchero", "pane", "latte", "thè"];
console.log(shoppingList);

shoppingList.push("merendina");
console.log(shoppingList);

shoppingList.shift();
console.log(shoppingList);

shoppingList[shoppingList.length - 1] = "acqua";
console.log(shoppingList);

// Oggetti base
const persona = {
  nome: "Marco",
  cognome: "Rossi",
  età: 50,
};
console.log(persona);

// Modifico prop età
persona.età = 42;
console.log(persona);

let nomeChiave = "età";
persona[nomeChiave] = 20;
console.log(persona);

// Aggiungo proprietà
persona.hobby = ["calcio", "tennis", "nuoto"];
console.log(persona.hobby);

nomeChiave = "hobby";
persona[nomeChiave] = ["basket", "rugby", "mma"];
console.log(persona[nomeChiave]);

// Elimino proprietà
delete persona.hobby;
console.log(persona);

nomeChiave = "età";
delete persona[nomeChiave];
console.log(persona);

// Combinazione di array e oggetti \\
const classe = [
  {
    nome: "Fede",
    età: 1000,
    materie: ["matematica", "storia"],
  },
  {
    nome: "Marco",
    età: 10,
    materie: ["matematica", "storia"],
  },
  {
    nome: "Luca",
    età: 100,
    materie: ["matematica", "storia"],
  },
];
console.log(classe);

classe.push({
  nome: "Billy",
  età: 89,
  materie: ["bocciato"],
});
console.log(classe);

classe[0].materie[0] = "informatica";
console.log(classe);

