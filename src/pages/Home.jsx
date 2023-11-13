import { useState } from "react";

import cinemaxLogo from "../assets/cinemax-lg.png";

import Nav from "../components/Nav";
import Search from "../components/Search";
import Movies from "../components/Movies";

export default function App() {
  const omdbAPI = "https://www.omdbapi.com/?apikey=13caa88d";

  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchValue) => {
    try {
      const res = await fetch(`${omdbAPI}&s=${searchValue}`);
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Nav />
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        <Search searchMovies={searchMovies} />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}
