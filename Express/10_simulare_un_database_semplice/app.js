const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/routes");
const routerUsers = require("./routes/routesUsers");

app.use(express.json());
app.use(express.static("public"));

// Prima delle rotte metto un middleware globale
app.use((req, res, next) => {
  const metodoReq = req.method;
  const reqUrl = req.url;
  console.log(
    `L'url chiamato è ${reqUrl} mentre il metodo utilizzato è ${metodoReq}`
  );
  next();
});

app.use("/Products", router);
app.use("/user", routerUsers);

app.get("/", () => console.log("Benvenuto su Express!"));

// Middleware per gestire route inesistenti
app.use((req, res) => {
  res.status(404).json({ error: "404 - Route non trovata" });
});

app.listen(port, () => console.log("Sono in ascolto"));
