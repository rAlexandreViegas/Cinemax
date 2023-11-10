const fs = require("fs");

function saveMovie(movieID, response) {
  const newFavorite = { id: movieID[0], movie: movieID[1] };
  let jsonData;

  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      response.send(err);
      return;
    }

    try {
      jsonData = JSON.parse(data);

      const movieExist = jsonData.favorites.some(
        (favorite) => favorite.id === newFavorite.id
      );

      if (movieExist) {
        response.status(409);
      } else {
        jsonData.favorites.push(newFavorite);

        fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            response.send(err);
            return;
          }

          response.redirect("/favorites");
        });
      }
    } catch (error) {
      response.send(error);
    }
  });
}

module.exports = saveMovie;
