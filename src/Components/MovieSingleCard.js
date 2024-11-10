

import { useContext, useState, useEffect } from 'react';
import { myContext } from '../App.js';
import RatingSize from '../Components/starRatings.js';

const MovieSingleCard = () => {
  const { id, singleMovie } = useContext(myContext);
  const [rating, setRating] = useState(0);
  const [showAddToList, SetShowAddToList] = useState(false);

  useEffect(() => {
    setRating(0);
    SetShowAddToList(false);
  }, [id]);

  const AddtoList = () => {
    return <div>You watched this movie</div>;
  };

  return (
    <div className="single-movie-card d-flex flex-column justify-content-center align-items-center border-0 overflow-y-scroll">
      <img src={singleMovie.Poster} className="movie-poster img-fluid" alt="Movie Poster" />
      <div className="card-body text-center">
        <h5 className="card-title">{singleMovie.Title}</h5>
        <p className="card-text">{singleMovie.Year}</p>
      </div>
      <div className="rating-container d-flex flex-column align-items-center justify-content-center">
        <RatingSize rating={rating} setRating={setRating} />
        {rating > 0 ? (
          <>
            <p>YOU GAVE {rating} STARS</p>
            <button className="add-to-list-btn" onClick={() => SetShowAddToList(true)}>+Add to list</button>
          </>
        ) : (
          <p>Please rate the movie</p>
        )}
        {showAddToList && <AddtoList />}
      </div>
    </div>
  );
};

export { MovieSingleCard };
