import RenderCard from "./RenderCard";

export default function Cards({ movies }) {
    //console.log(movies)
    if (movies) {
    return (
      <div className="card-wrapper">
        {movies.map((movie) => (
          <RenderCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}
