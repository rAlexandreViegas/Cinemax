const fs = require("fs").promises;
const path = require("path");

async function saveMovie(movieID, response) {
  const newFavorite = { id: movieID[0], movie: movieID[1] };

  try {
    const filePath = path.join(__dirname, "../tmp/data.json");
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);

    const movieExist = jsonData.favorites.some(
      (favorite) => favorite.id === newFavorite.id
    );

    if (movieExist) {
      response.status(409).send("Movie already in favorites.");
    } else {
      jsonData.favorites.push(newFavorite);

      await fs.writeFile(filePath, JSON.stringify(jsonData));
      response.status(201).send("Film added to favorites!");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

module.exports = saveMovie;
