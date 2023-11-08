import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Detailpage.css";

const Movie = ({ match }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=Your-React-App-Client-ID&language=en-US`
      );
      setMovie(result.data);
    };
    fetchData();
  }, [match.params.movieId]);

  return (
    <div className="movie">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default Movie;
