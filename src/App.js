import Navbar from "./component/Navbar";
import Movie from "./component/Movie";
import Layout from "./component/Layout";
import MovieList from "./component/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PopularSection from "./component/PopularSection";
import Home from "./component/Home";


function App() {

  
  return (
    <div>
      <Router>
          <Navbar/>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movies" element={<Movie />}></Route>
                <Route path="movielist" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
        <PopularSection /> 

    </div>
  );
}

export default App;
