function OrderByAlphaButton(props) {

  return (
    <button
      className="btn btn-primary me-3"
      type="button"
      onClick={() => props.handleAlpha()}
    >
      Alfabetisk ordning
    </button>
  );
}

export default OrderByAlphaButton;
