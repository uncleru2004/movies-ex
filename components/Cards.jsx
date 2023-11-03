import { memo } from "react";
import RenderCard from "./RenderCard";

export default memo(function Cards({ movies, selected }) {
  //console.log(movies)
  if (movies) {
    return (
      <div className="card-wrapper">
        {movies.map((movie) => (
          <RenderCard movie={movie} selected={selected} key={movie.imdbID} />
        ))}
      </div>
    );
  }
});
