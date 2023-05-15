import React, { useState } from "react";
import SaveMoviesButton from "./buttons/SaveMoviesButton";
import Movies from "./Movies";

function AddMovieForm() {
  const [movieList, setMovieList] = useState([{
    id: 1,
    title: "The Matrix",
    rating: 5,
  }]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.valueOf() === "" || rating < 1) {
      alert("Du måste ange titel och betyg");
    } else {
      const newID = movieList.length > 0 ? movieList[movieList.length - 1].id + 1 : 1;
      setMovieList([
        ...movieList,
      {
        id: newID,
        title: title,
        rating: rating,
      },
    ]);
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

  function deleteItem(id) {
    setMovieList(movieList.filter((item) => item.id !== id));
  }

  function handleAlpha() {
    setMovieList([...movieList].sort((a, b) => a.title.localeCompare(b.title)));
  }

  function handleGrade() {
    setMovieList([...movieList].sort((a, b) => b.rating - a.rating));
  }

  return (
    <div>
      <h1>Min filmlista</h1> 
      <form onSubmit={handleSubmit}>
        <div>
          <legend>Lägg till en film</legend>
          <label htmlFor="title-field">Titel:</label>
          <input
            type="text"
            id="title"
            placeholder="Titel här.."
            className="form-control"
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
          <Movies movieList={movieList} deleteItem={deleteItem} handleAlpha={handleAlpha} handleGrade={handleGrade}/>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;
