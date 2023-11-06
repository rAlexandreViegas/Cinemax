const express = require("express");

const app = express();

app.post("/api/save", (req, res) => {
  res.send("Votre film a bien été ajouté à vos favoris !");
  console.log("Il est arrivé !");
});

app.listen(3000, () => console.log("Le serveur est lancé sur le port 3000"));
