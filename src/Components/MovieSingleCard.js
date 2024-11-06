import { useContext, useState } from 'react';
import { myContext } from '../App.js';
import RatingSize from '../Components/starRatings.js';

const MovieSingleCard = () => {
  const { id, singleMovie } = useContext(myContext);
  const [rating, setRating] = useState(0);
  return (
    <div class="card w-50 m-auto h-25 d-flex flex-column justify-content-center align-items-center border-0 toggleCss" >
      <img src={singleMovie.Poster} class="card-img-top h-75 w-50 center m-auto" alt="Movie Poster" />
      <div class="card-body m-auto text-center ">
        <h5 class="card-title">{singleMovie.Title}</h5>
        <p class="card-text">{singleMovie.Year}</p>
      </div>
      <div className=' m-auto d-flex flex-column align-items-center justify-content-center h-100 '>
        <RatingSize rating={rating} setRating={setRating} />

        {rating > 0 ? (
          <p>YOU RATED {rating} STARS</p>
        ) : (
          <button className=" w-100">+Add To List</button>
        )}

      </div>
    </div>
  )
}
export { MovieSingleCard }

 