const arrayTasks = require("../tasks");
// Il file dei controller contiene solo le callback function delle rotte in pratica

// Rotta GET che risponde con array di task
function index(req, res) {
  // Devo mostrare tutto il mio array di oggetti
  res.json(arrayTasks);
}
// Rotta GET che risponde con un oggetto specifico in base ad id
function show(req, res) {
  const ID = parseInt(req.params.id);

  const oggettoArray = arrayTasks.find((currObject) => currObject.id === ID);
  res.json(oggettoArray);
}
// Rotta POST che aggiunge un nuovo task all'array
function store(req, res) {
  let maxID = 0;
  // Devo creare un nuovo oggetto con id piu grande di quello piu grande dell'array
  arrayTasks.forEach((currObject) => {
    currObject.id > maxID;
    maxID = currObject.id;
  });
  const nuovoId = maxID + 1;

  const nuovoOggetto = { ...req.body, id: nuovoId };

  arrayTasks.push(nuovoOggetto);
  res.json(arrayTasks);
}
// Rotta delete che rimuove un task dall'array
function destroy(req, res) {
  const idToDestroy = parseInt(req.params.id);

  const nuovoArray = arrayTasks.filter(
    (currObject) => currObject.id !== idToDestroy
  );
  res.json(nuovoArray);
}

module.exports = { index, show, store, destroy };
