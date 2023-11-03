import { memo } from "react";
import css from "../components/card.module.css";
//import MovieDetails from "../pages/movie_details";

export default memo(function RenderCard({ movie, selected }) {
  return (
    <a href="#">
      <div id={!movie.selected ? movie.imdbID : movie.id} className={css.card}>
        <p className={css.title}>
          {movie.Title}
          <span className={css.year}>{movie.Year}</span>
        </p>
        <img className={css.img} src={movie.Poster} alt={movie.Title} />
        {!movie.selected && (
          <span className={css.selected} id="selected">
            Добавить в избранное
          </span>
        )}
        {selected && (
          <button id="delete" className={css.deleteBtn}>
            🗙
          </button>
        )}
        {movie.selected && <span className={css.starActive}>⭐</span>}
        {!movie.selected && <span className={css.starInactive}>✰</span>}
      </div>
    </a>
  );
});
