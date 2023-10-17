import Navbar from "./component/navbar";
import Moviecard from "./component/moviecard";
import Hero from "./component/HeroSection";
import Movie from "./component/Movie";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Moviecard />
      <Movie />
    </div>
  );
}

export default App;
