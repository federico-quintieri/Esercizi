const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllerUsers");

// Definisco rotte users
router.get("/", controllers.index);
router.get("/:id", controllers.show);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.destroy);

module.exports = router;
