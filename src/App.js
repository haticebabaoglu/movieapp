
import Navbar from "./component/navbar";
import Movie from "./component/Movie";
import Layout from "./component/Layout";
import MovieList from "./component/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  
  return (
    <div>
      <Router>
          <Header />
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="/" element={<Movie />}></Route>
                <Route path="/" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
