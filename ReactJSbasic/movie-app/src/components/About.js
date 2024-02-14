import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres, year, rating, runtime}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>Summary: {summary? {summary} : `-`}</p>
      <p>{genres&&`Genres:`}</p>
      <ul>
        {genres&&genres.map((g) => (<li key={g}>{g}</li>))}
      </ul>
      <p>Released year: {year}</p>
      <p>Rating: {rating}</p>
      <p>Runtime: {runtime}</p>
      <button><Link to={`/`}>Back to Home</Link></button>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired
}

export default Movie;