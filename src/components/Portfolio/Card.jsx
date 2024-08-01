export default function Card({ image, onClickHandler }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <figure className="position-relative" onClick={onClickHandler}>
        <img src={image} className="w-100 rounded" alt="cabin" />
        <figcaption className="rounded position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-plus fa-5x text-white"></i>
        </figcaption>
      </figure>
    </div>
  );
}
