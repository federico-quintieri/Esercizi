const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllerBasic");

// Rotta GET che risponde con array di task
router.get("/", controller.index);

// Rotta GET che risponde con un oggetto specifico in base ad id
router.get("/:id", controller.show);
// Rotta POST che aggiunge un nuovo task all'array
router.post("/", controller.store);
// Rotta delete che rimuove un task dall'array
router.delete("/:id", controller.destroy);

module.exports = router;
