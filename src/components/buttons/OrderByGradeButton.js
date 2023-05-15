function OrderByGradeButton(props) {

  return (
    <button
      className="btn btn-primary me-3"
      type="button"
      onClick={() => props.handleGrade()}
    >
      Betygsordning
    </button>
  );
}

export default OrderByGradeButton;
