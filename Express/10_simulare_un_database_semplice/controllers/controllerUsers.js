let arrayUsers = require("../users");

// Da definire callback function per le rotte

function index(req, res) {
  res.json(arrayUsers);
}

function show(req, res) {
  const paramID = parseInt(req.params.id);
  const oggettoTrovato = arrayUsers.find(
    (currObject) => currObject.id === paramID
  );
  res.json(oggettoTrovato);
}
function update(req, res) {
  const paramID = parseInt(req.params.id);
  // Devo trovare l'index dell'oggetto in base all'id
  let indexToModify = -1;
  const oggettoTrovato = arrayUsers.find((currObject, currIndex) => {
    if (currObject.id === paramID) {
      indexToModify = currIndex;
      return true;
    }
  });

  const nuovoOggetto = {
    ...req.body,
    id: paramID,
  };

  arrayUsers[indexToModify] = nuovoOggetto;
  res.json(arrayUsers);
}
function destroy(req, res) {
  const paramID = parseInt(req.params.id);
  let nuovoArray = arrayUsers.filter(
    (currObject) => currObject.id !== paramID
  );
  arrayUsers = nuovoArray;
  res.json(arrayUsers);
}
module.exports = { index, show, update, destroy };
