const express = require("express");
const router = express.Router();

// Rotta Post che accetta un oggetto JSON con name ed age rispondi con messaggi di conferma ricezione dal client
router.post("/add-user", (req, res) => {
  const oggettoDaClient = req.body;
  res.json(oggettoDaClient);
});

module.exports = router;
