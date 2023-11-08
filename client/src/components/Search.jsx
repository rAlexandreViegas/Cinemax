import { useState } from "react";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(search);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel film recherchez-vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
}
