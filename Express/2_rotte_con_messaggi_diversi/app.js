const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", () => console.log("Benvenuto su Express!"));

app.listen(port, () => console.log("Sono in ascolto"));
