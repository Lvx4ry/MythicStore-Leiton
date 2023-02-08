export default function Spinner() {
  return (
    <div className="container col-12 d-flex justify-content-center">
      <div
        className="spinner-border justify-content-center my-5 d-flex"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
