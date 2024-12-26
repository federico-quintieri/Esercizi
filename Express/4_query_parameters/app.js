const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/routes");

app.use(express.json());

app.use("/Products", router);

app.get("/", () => console.log("Benvenuto su Express!"));

app.listen(port, () => console.log("Sono in ascolto"));
