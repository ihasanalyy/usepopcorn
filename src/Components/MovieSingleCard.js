import { useContext } from 'react';
import {myContext} from '../App.js';

const MovieSingleCard = () => {
  const { id,singleMovie } = useContext(myContext); 
    return (
        <div class="card w-50 m-auto" >
  <img src={singleMovie.Poster} class="card-img-top" alt="Movie Poster"/>
  <div class="card-body">
    <h5 class="card-title">{singleMovie.Title}</h5>
    <p class="card-text">{singleMovie.Year}</p>
  </div>
</div>
    )
}
export  {MovieSingleCard}