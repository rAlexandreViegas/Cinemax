import { useState } from "react";

import cinemaxLogo from "../assets/cinemax-lg.png";

import Search from "../components/Search";
import Movies from "../components/Movies";

export default function App() {
  const omdbAPI = "https://www.omdbapi.com/?apikey=934f5780";

  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchValue) => {
    try {
      const response = await fetch(`${omdbAPI}&s=${searchValue}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      }

      console.log(movies);
    } catch (error) {
      console.error(error);
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
