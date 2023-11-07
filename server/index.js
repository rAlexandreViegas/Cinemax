const express = require("express");

const save = require("./modules/save");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/api/save", (req, res) => {
  const imdbID = req.body.imdbID;
  save(imdbID, res);
});

app.listen(PORT, () => console.log("Le serveur est lancé sur le port " + PORT));
