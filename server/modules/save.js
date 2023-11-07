const fs = require("fs");

function save(movieID, response) {
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
        response.send("Le film est déjà dans les favoris.");
      } else {
        jsonData.favorites.push(newFavorite);

        fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            response.send(err);
            return;
          }

          response.send("Le film a bien été ajouté à vos favoris !");
        });
      }
    } catch (error) {
      response.send(error);
    }
  });
}

module.exports = save;
