const fs = require("fs");

function save(movieID, response) {
  const newFavorite = { id: movieID[0], movie: movieID[1] };

  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      return response.send(err);
    }

    try {
      let jsonData = JSON.parse(data);

      const movieExist = jsonData.favorites.some((favorite) => {
        return favorite.id === newFavorite.id;
      });

      if (movieExist) {
        response.send("Le film est déjà dans les favoris.");
      } else {
        jsonData.favorites.push(newFavorite);

        fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            return response.send(err);
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
