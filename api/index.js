const express = require("express");
const cors = require("cors");

const saveMovie = require("./modules/saveMovie");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5000", credentials: true }));

app.post("/api/save", (req, res) => {
  const imdbID = req.body.imdbID;
  saveMovie(imdbID, res);
});

app.get("/api/favorites", (req, res) => {
  res.sendFile(__dirname + "/tmp/data.json");
});

app.listen(PORT, () => console.log("Le serveur est lancé sur le port " + PORT));
