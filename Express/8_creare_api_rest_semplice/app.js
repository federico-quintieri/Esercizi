const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/routes");

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

app.get("/", () => console.log("Benvenuto su Express!"));

app.listen(port, () => console.log("Sono in ascolto"));
