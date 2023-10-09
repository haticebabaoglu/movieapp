import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movielist, setMovielist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = `f7c19e2a1ebb717261ebdf4edc446677`; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("API isteği başarısız oldu.");
        }

        const data = await response.json();
        setMovielist(data.results);
        setLoading(false);
      } catch (error) {
        setError("Veriler alınamadı. Lütfen daha sonra tekrar deneyin.");
        setLoading(false);
        console.error("API hatası:", error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movielist.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: 350, height: 350 }}
          />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Movie;
