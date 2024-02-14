import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import About from "../components/About";

function Detail() {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  } 
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <About 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
        year={movie.year}
        rating={movie.rating}
        runtime={movie.runtime}
      />
    </div>
  );
}

export default Detail;