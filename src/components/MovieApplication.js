import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movies from "./Movies";

function MovieApplication(props) {
  const [movie, setMovie] = useState(null);

  function setMovieValues(movieTitle, movieRating) {
    setMovie({ title: movieTitle, rating: movieRating });
  }

  return (
    <div>
      <h1>Min filmlista</h1>
      <AddMovieForm callback={setMovieValues} />
      <Movies movieValue={movie} />
    </div>
  );
}

export default MovieApplication;
