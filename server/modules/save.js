const fs = require("fs");

function save(movieID) {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log("Une erreur s'est produite avec le serveur");
    } else {
      let jsonData = JSON.parse(data);

      if (jsonData.favorites.includes(movieID)) {
        console.log("Le film est déjà dans les favoris.");
      } else {
        jsonData.favorites.push(movieID);

        fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.log("Une erreur s'est produite avec le serveur");
          } else {
            console.log("Le film a bien été ajouté aux favoris");
          }
        });
      }
    }
  });
}

module.exports = save;
