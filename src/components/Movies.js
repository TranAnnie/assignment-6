import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import OrderByAlphaButton from "./buttons/OrderByAlphaButton";
import OrderByGradeButton from "./buttons/OrderByGradeButton";

function Movies(props) {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    if(props.movieValue !== null){
      setMovieList([
      ...movieList,
      {
        title: props.movieValue.title,
        rating: props.movieValue.rating,
      },
    ]);
    }
    
  }, []);

  return (
    <div className="Movies">
      <hr />
      <h2>Inlagda filmer</h2>
      <ul className="list-group mb-3">
        {movieList !== null ? movieList.map((movie) => <Movie movieTitle={movie.title} movieRating={movie.rating} :  />)}
      </ul>
      <OrderByAlphaButton />
      <OrderByGradeButton />
    </div>
  );
}

export default Movies;
