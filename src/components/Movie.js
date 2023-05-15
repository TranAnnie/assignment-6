import React from "react";

function Movie(props) {
  return (
    <li className="list-group-item">
      {props.movieTitle}
      {props.movieRating}
    </li>
  );
}

export default Movie;
