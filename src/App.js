import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import { MoviesCard } from '../src/Components/MoviesCard';
import { MovieSingleCard } from '../src/Components/MovieSingleCard';
import { useEffect, useState } from 'react';




function App() {
  // USESTATE FOE MOVIES API
  const [movies, SetMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=guardians&apikey=2069fe59`)
    const data = await response.json()
    console.log(data)
    SetMovies(data.Search)
    console.log(movies , "data araha hai")
    // fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2069fe59`)
    //   .then(response => response.json())
    //   .then(response => SetMovies(response),
    //     console.log(response))
    //   .catch(error => {
    //     console.error('Error fetching movies:', error);
    //   });
  }
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Navbar />
      </div>
      <div className="container mt-5 ms-5 d-flex border-danger justify-content-around align-items-center">
        <MoviesCard movies={movies} />
        <MovieSingleCard />
      </div>
    </div>
  );
}

export default App;
