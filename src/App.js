
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

  const [id, setId] = useState("")

  const [singleMovie, setSingleMovie] = useState([])

  const getMovies = async () => {

    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`)

    const data = await response.json()
    console.log(data)

    SetMovies(data.Search)
    // setId(data?.Search?.imdbID || "");
    // console.log(id, '===>>nid')

    console.log(movies, "data araha hai")

  }
  useEffect(() => {

    getMovies();
  }, [search])
 
  const openMovieHandler = (movie) =>{
    console.log(movie, "movie clicked")
    setId(movie.imdbID)
    setSingleMovie(movie)
  
  }
  return (

    <div className="App">
      <div className="container-fluid w-100  m-auto">
        <Navbar setSearch={setSearch} movies={movies} />
      </div>
      <div className="container-fluid w-100  m-auto d-flex">
        <div className="container mt-5 ms-5 d-flex justify-content-around align-items-center w-50">
          <MoviesCard movies={movies} onMovieClick={openMovieHandler} />
        </div>
        <div className='container mt-5'>
          {
            id ? (<MovieSingleCard id={id} singleMovie={singleMovie} />) : (<h1 className='text-center'>No Movie Selected</h1>)
          }

        </div>
      </div>
    </div>

  );
}

export default App;
