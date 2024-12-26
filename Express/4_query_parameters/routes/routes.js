const express = require("express");
const router = express.Router();

// rotta con query parameters
router.get("/search", (req, res) => {
  // query string era un oggetto
  const queryObject = req.query;
  res.json(`Risultati per: ${queryObject.term}`);
});

module.exports = router;
