import "./Header.css";

export default function Header({ title, secondary }) {
  return (
    <>
      <div className="sectionHeader text-center mb-5">
        <h1
          className={`specialH1 fw-semibold ${secondary ? "text-white" : ""}`}
        >
          {title}
        </h1>

        <div
          className={`position-relative mt-4 specialBorder ${
            secondary ? "secondary" : ""
          }`}
        >
          <i
            className={`fa-solid fa-star fa-2x ${secondary ? "text-white" : "" }`}
          ></i>
        </div>
      </div>
    </>
  );
}
