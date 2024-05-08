import Movie from "./component/Movie";
import MovieList from "./component/MovieList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PopularSection from "./component/PopularSection";
import Home from "./component/pages/Home";
import Person from "./component/pages/Person";
import Movies from "./component/pages/Movies";
import Series from "./component/pages/Series";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/home">Ana Sayfa</NavLink>
      <NavLink to="/movies">Filmler</NavLink>
      <NavLink to="/series">Diziler</NavLink>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movielist" element={<MovieList />} />
        <Route path="popularsection" element={<PopularSection />} />
        <Route path="per son" element={<Person />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
      <PopularSection />
    </BrowserRouter>
  );
}

export default App;
