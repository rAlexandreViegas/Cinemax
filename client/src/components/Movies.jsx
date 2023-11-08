export default function Movies({ movies }) {
  const API = "http://localhost:3000/api/save";
  const favIcon = "https://api.iconify.design/mdi:star-circle.svg";
  const placeHolder =
    "https://placehold.co/300x450/000000/FFF?text=Non+disponible";
  const imdbURL = "https://imdb.com/title/";

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <form className="favorite" method="POST" action={API}>
            <input type="hidden" name="imdbID" value={movie.imdbID} />
            <input type="hidden" name="imdbID" value={movie.Title} />
            <button type="submit" className="btn-favorite">
              <img src={favIcon} alt="star" width="50" />
            </button>
          </form>
          <div className="movie-info">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : placeHolder}
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détails
              <a href={imdbURL + movie.imdbID} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
