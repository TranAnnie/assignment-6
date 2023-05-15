//import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import OrderByAlphaButton from "./buttons/OrderByAlphaButton";
import OrderByGradeButton from "./buttons/OrderByGradeButton";

function Movies(props) {
  return (
    <div className="Movies">
      <hr />
      <h2>Inlagda filmer</h2>
      <ul className="list-group mb-3">
        {props.movieList.map((movie) => (
          <Movie key={movie.id} value={movie} deleteItem={props.deleteItem}/>))}
      </ul>
      <OrderByAlphaButton handleAlpha={props.handleAlpha}/>
      <OrderByGradeButton handleGrade={props.handleGrade}/>
    </div>
  );
}

export default Movies;
