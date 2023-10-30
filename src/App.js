import Movie from "./component/Movie";
import MovieList from "./component/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularSection from "./component/PopularSection";
import Home from "./component/pages/Home";
import Person from "./component/pages/Person";
import Movies from "./component/pages/Movies";
import Series from "./component/pages/Series";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movie />}></Route>
          <Route path="movielist" element={<MovieList />}></Route>
          <Route path="popularsection" element={<PopularSection />}></Route>
          <Route path="person" element={<Person />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="series" element={<Series />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      <PopularSection />
    </div>
  );
}

export default App;
