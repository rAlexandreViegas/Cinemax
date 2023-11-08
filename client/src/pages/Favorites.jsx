import { useEffect, useState } from "react";

import Movies from "../components/Movies";

export default function Favorites() {
  const API = "http://localhost:3000/api/favorites";
  const omdbAPI = "https://www.omdbapi.com/?apikey=13caa88d";

  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  async function fetchFavorites() {
    try {
      const res = await fetch(API);
      const data = await res.json();

      if (data.favorites) {
        setFavorites(data.favorites);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchMovies() {
    const moviesArray = [];

    try {
      for (const el of favorites) {
        const res = await fetch(`${omdbAPI}&i=${el.id}`);
        const data = await res.json();

        moviesArray.push({
          imdbID: data.imdbID,
          Title: data.Title,
          Poster: data.Poster,
        });

        if (moviesArray.length > 0) {
          setMovies(moviesArray);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [favorites]);

  return (
    <>
      <h1>Favorites</h1>
      <div>
        <Movies movies={movies} />
      </div>
    </>
  );
}
