import { memo } from "react";

export default memo(function MovieDetails({ movie }) {
  if (movie.Response === "True") {
    //console.log(movie);

    return (
      <>
        <div className="details">
          <div className="movie-details-container">
            <span className="movie-details-title">{movie.Title}</span>
          </div>

          <div className="description-container">
            <div className="poster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>

            <div className="text-details">
              <p className="film-overview">{movie.Plot}</p>

              <div className="details-list-item-rating">{movie.imdbRating}</div>

              <table className="film_data_table">
                <tbody>
                  <tr>
                    <td>
                      <p>Type</p>
                      <p>{movie.Type}</p>
                    </td>
                    <td>
                      <p>Genres</p>
                      <p>{movie.Genre}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Director</p>
                      <p>{movie.Director}</p>
                    </td>
                    <td>
                      <p>Actors</p>
                      <p>{movie.Actors}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Runtime</p>
                      <p>{movie.Runtime}</p>
                    </td>
                    <td>
                      <p>Release date</p>
                      <p>{movie.Released}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Awards</p>
                      <p>{movie.Awards}</p>
                    </td>
                    <td>
                      <p>BoxOffice</p>
                      <p>{movie.BoxOffice}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="details_backgr_image">
          <img
            className="details_backgr_image_img"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </>
    );
  }
});
