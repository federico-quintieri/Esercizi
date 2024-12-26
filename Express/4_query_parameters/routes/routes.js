const express = require("express");
const router = express.Router();

// Rotta con query parameters
router.get("/search", (req, res) => {
  // query string è un oggetto
  const queryObject = req.query;

  // Verifica se l'oggetto ha almeno una chiave
  if (Object.keys(queryObject).length > 0) {
    // Accedi al primo valore senza conoscere la chiave
    const firstKey = Object.keys(queryObject)[0];
    const firstValue = queryObject[firstKey];

    res.json(`Prima chiave: ${firstKey}, valore: ${firstValue}`);
  } else {
    res.json("Nessun parametro di query fornito.");
  }
});

module.exports = router;
