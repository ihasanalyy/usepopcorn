
import './App.css';
import Navbar from '../src/Components/Navbar';
import { MoviesCard } from '../src/Components/MoviesCard';
import { MovieSingleCard } from '../src/Components/MovieSingleCard';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  // USESTATE FOE MOVIES API
  const [movies, SetMovies] = useState([]);


  // USESATE FOR KEYWORD SERACH
  const [search, setSearch] = useState("");

  const getMovies = async () => {

    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`)

    const data = await response.json()
    console.log(data)

    SetMovies(data.Search)

    console.log(movies, "data araha hai")

  }
  useEffect(() => {

    getMovies();
  }, [search])

  return (

    <div className="App">
      <div className="container w-100 p-0 m-auto">
        <Navbar setSearch={setSearch} movies={movies} />
      </div>
      <div className="container mt-5 ms-5 d-flex border-danger justify-content-around align-items-center">
        <MoviesCard movies={movies} />
        <MovieSingleCard />
      </div>
    </div>

  );
}

export default App;
