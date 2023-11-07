const fs = require("fs");

function save(movieID, response) {
  try {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        response.send(
          "Une erreur est survenue lors de l'ajout du film à vos favoris."
        );
      } else {
        let jsonData = JSON.parse(data);

        if (jsonData.favorites.includes(movieID)) {
          response.send("Le film est déjà dans les favoris.");
        } else {
          jsonData.favorites.push(movieID);

          fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
            if (err) {
              response.send(
                "Une erreur est survenue lors de l'ajout du film à vos favoris."
              );
            } else {
              res.send("Le film a bien été ajouté à vos favoris !");
            }
          });
        }
      }
    });
  } catch (error) {
    response.send(
      "Une erreur est survenue lors de l'ajout du film à vos favoris."
    );
  }
}

module.exports = save;
