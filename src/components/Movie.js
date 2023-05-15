import React from "react";
import deleteImg from "../image/delete.png";
import starImg from "../image/star.png";

function Movie(props) {

  function addStars(rating) {
    let stars = [];
    let counter = 0;
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starImg} alt="Star" className="float-end" key={counter} style={{"width": "5%"}}/>);
      counter++;
    }
    return stars;
  }

  return (
    <li className="list-group-item">
      {props.value.title}
      <button className="btn btn-sm float-end" onClick={() => props.deleteItem(props.value.id)}>
        <img src={deleteImg} alt="Delete" style={{"width": "50%"}} />
      </button>
      {addStars(props.value.rating).map((star) => star)}
    </li>
  );
}

export default Movie;
