import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movielist, setMovielist] = useState([]);

  const getMovie = () => {

    fetch("https://api.themoviedb.org/3/trending/movie", {
      method: 'GET',
      headers: {
            'Authorization': 'Bearer: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2MxOWUyYTFlYmI3MTcyNjFlYmRmNGVkYzQ0NjY3NyIsInN1YiI6IjY1MjFiMDg3MDcyMTY2MDExYzA1NjFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t5n4TymD3RPSLFw263tBjHLGv2tfOi0Dgx0iQHzcClA',
                Accept: "application/json",
                "Content=Type": "application/json"
            },
    })
  };
  useEffect(() => {
    getMovie()
  }, []);


  return (
    <div>
      {movielist.map((movie) => (
        <img src={"https://image.tmdb.org/t/p/w500/${movie.poster_path}"} />
      ))}
    </div>
  )

};

export default Movie;