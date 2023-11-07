import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/favorites")
      .then((response) => response.json())
      .then((data) => setFavorites(data.favorites))
      .catch((error) => console.error(error));
  }, [favorites]);

  return (
    <div>
      <p>Favorites</p>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.movie}</li>
        ))}
      </ul>
    </div>
  );
}
