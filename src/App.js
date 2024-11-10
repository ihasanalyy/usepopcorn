import './App.css';
import Navbar from '../src/Components/Navbar';
import { MoviesCard } from '../src/Components/MoviesCard';
import { MovieSingleCard } from '../src/Components/MovieSingleCard';
import { createContext, useEffect, useState } from 'react';

export const myContext = createContext();

function App() {
  const [movies, SetMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [singleMovie, setSingleMovie] = useState([]);
  const [themeHandler, setThemeHandler] = useState(false);

  const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`);
    const data = await response.json();
    SetMovies(data.Search);
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  const openMovieHandler = (movie) => {
    setId(movie.imdbID);
    setSingleMovie(movie);
  };

  return (
    <myContext.Provider value={{
      movies,
      setSearch,
      onMovieClick: openMovieHandler,
      singleMovie,
      id,
      setThemeHandler,
      themeHandler,
    }}>
      <div className="App">
        <div className="container-fluid">
          <Navbar />
        </div>
        <div className={`main-content ${themeHandler ? 'dark-theme' : 'light-theme'}`}>
          <div className="movies-container">
            <MoviesCard />
          </div>
          <div className="single-movie-container">
            {search ? <MovieSingleCard /> : <h1 className="text-center">Search for a movie!</h1>}
          </div>
        </div>
      </div>
    </myContext.Provider>
  );
}

export default App;
