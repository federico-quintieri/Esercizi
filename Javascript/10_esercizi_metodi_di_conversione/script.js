// Converti un numero in stringa \\
const numero = 1234;
const numeroConvertito = numero.toString();
console.log(typeof numeroConvertito, numeroConvertito);

// Converti una stringa in numero \\
const frase = "23";
const fraseConvertita = Number(frase);
console.log(typeof fraseConvertita, fraseConvertita);

// Converti un numero in booleano \\
const numeroB = 5;
const numeroBConvertito = Boolean(numeroB);
console.log(typeof numeroBConvertito, numeroBConvertito);

// Converti una stringa in intero \\
const varStringa = "22.42";
const varStringaConvertita = parseInt(varStringa);
console.log(typeof varStringaConvertita, varStringaConvertita);

// Converti una stringa in numero decimale \\
const varStringa2 = "54.21";
const varStringa2Convertita = parseFloat(varStringa2);
console.log(typeof varStringa2Convertita, varStringa2Convertita);

// Converti un array in stringa \\
const arrayRandom = [1, 23, 5, 6, 1];
const arrayRandominStringa = arrayRandom.toString();
console.log(typeof arrayRandominStringa, arrayRandominStringa);

// Converti un booleano in stringa \\
const varBooleana = false;
const varBooleanaStringa = String(varBooleana);
console.log(typeof varBooleanaStringa, varBooleanaStringa);

// Converti un numero in esadecimale \\
const numeroBoh = 255;
const numeroBohConvertito = numeroBoh.toString(16);
console.log(typeof numeroBohConvertito, numeroBohConvertito);

// Verifica la conversione con isNan \\
const variabileBella = "avasd";
console.log("La variabile è un valore non numerico: " + isNaN(variabileBella));

// Converti un valore numerico in un oggetto \\
const numeroBello = 123;
const numeroBelloObject = Object(numeroBello);
console.log(typeof numeroBelloObject, numeroBelloObject);
