import { useEffect, useState } from "react";

import cinemaxLogo from "../assets/cinemax-lg.png";

import Nav from "../components/Nav";
import Movies from "../components/Movies";

export default function Favorites() {
  const API = "/api/favorites";
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
      }

      if (moviesArray.length > 0) {
        setMovies(moviesArray);
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
      <Nav />
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        <h1>Favoris</h1>
      </header>
      <div>
        <Movies movies={movies} />
      </div>
    </>
  );
}
