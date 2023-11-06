const express = require("express");

const app = express();

app.get("/api/movie", (req, res) => {
  const jsonMovie = {
    name: "Star Wars",
    year: "1977",
  };
  res.send(jsonMovie);
});

app.listen(3000, () => console.log("Le serveur est lancé sur le port 3000"));
