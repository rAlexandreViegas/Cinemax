import { useState } from "react";

import cinemaxLogo from "../assets/cinemax-lg.png";

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
    <div className="App">
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinema" />
        <Search searchMovies={searchMovies} />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
