import { useEffect } from "react";
import Navbar from "./component/navbar";
import Hero from "./component/PopularSection";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }[]);
  const apiTesting = () => {
    fetchDataFromApi(`/movie/popular`)
    .then((response)=> {
      console.log(response)
    }) 
  }
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
