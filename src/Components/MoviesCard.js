import { useContext } from 'react';
import {myContext} from '../App.js';

const MoviesCard = () => {
    const { movies, onMovieClick } = useContext(myContext); 
    return (
        <div className="movies-card w-100 toggleCss">
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
        <div class="card mb-3 w-100 m-auto toggleCss border-0"  onClick={() =>onMovieClick(movie)}>
            <div class="row g-0 toggleCss">
                <div class="col-md-4 toggleCss">
                    <img class="img-fluid rounded-start" src={movie.Poster} alt="..." />
                </div>
                <div class="col-md-8 toggleCss">
                    <div class="card-body toggleCss">
                        <h5 class="card-title">{movie.Title}</h5>
                        <h5 class="card-text">{movie.Type}</h5>
                        <h6 class="card-text">{movie.Year}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
