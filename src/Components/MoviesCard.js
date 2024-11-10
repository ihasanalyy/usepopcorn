

import { useContext } from 'react';
import { myContext } from '../App.js';

const MoviesCard = () => {
    const { movies, onMovieClick } = useContext(myContext);

    return (
        <div className="movies-card overflow-y-scroll">
            {movies?.map((movie, index) => (
                <Card movie={movie} key={index} onMovieClick={onMovieClick} />
            ))}
        </div>
    );
};
export { MoviesCard };

const Card = ({ movie, onMovieClick }) => {
    return (
        <div className="card mb-3 movie-card border-0" onClick={() => onMovieClick(movie)}>
            <div className="row g-0 card-row">
                <div className="col-md-4 card-image-container">
                    <img className="img-fluid rounded-start" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="col-md-8 card-content">
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <h6 className="card-text">{movie.Type}</h6>
                        <p className="card-text">{movie.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
