
import Navbar from "./component/navbar";
import Hero from "./component/PopularSection";
import Movie from "./component/Movie";
import Layout from "./component/Layout";

function App() {

  
  return (
    <div>

      <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
