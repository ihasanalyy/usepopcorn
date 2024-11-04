import { MovieSingleCard } from '../Components/MovieSingleCard';
import { useContext } from 'react';
import {myContext} from '../App.js';

const MoviesCard = () => {
    const { movies, onMovieClick } = useContext(myContext); 
    return (
        <div className="movies-card w-100">
            {
                movies?.map((movie, index) => (
                    <Card movie={movie} key={index} onMovieClick={onMovieClick} />
                ))
            }
        </div>

    )
}
export { MoviesCard }

const Card = ({ movie , onMovieClick }) => {
    return (
        <div class="card mb-3 w-100 m-auto"  onClick={() =>onMovieClick(movie)}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={movie.Poster} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{movie.Title}</h5>
                        <h5 class="card-text">{movie.Type}</h5>
                        <p class="card-text"><small class="text-body-secondary">{movie.Year}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
