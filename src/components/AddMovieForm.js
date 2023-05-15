import React, { useState, useRef } from "react";
import SaveMoviesButton from "./buttons/SaveMoviesButton";

function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (title.valueOf() === "" || rating < 1) {
      alert("Du måste ange titel och betyg");
    } else {
      props.setMovieValues(title, rating);
      setTitle("");
      setRating(0);
    }
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleRating(event) {
    setRating(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <legend>Lägg till en film</legend>
        <label htmlFor="title-field">Titel:</label>
        <input
          type="text"
          id="title"
          placeholder="Titel här.."
          className="form-control"
          ref={inputRef}
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="rating-field">Betyg:</label>
        <select
          type="text"
          id="rating"
          className="form-control"
          value={rating}
          onChange={handleRating}
        >
          <option value="0">Välj betyg här</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <SaveMoviesButton />
      </div>
    </form>
  );
}

export default AddMovieForm;
