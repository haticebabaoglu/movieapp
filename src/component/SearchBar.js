import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=98bf490ddf45c2b763033cb54b1893e2=${inputValue}`
    );
    setSearchResults(response.data.results);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
