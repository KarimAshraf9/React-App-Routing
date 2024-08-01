import "./Detail.css";
import Header from "./../Header/Header";

export default function Detail({
  showDetailsDialog,
  dialogData,
  setShowDetailsDialog,
  setDialogData,
}) {
  console.log("🚀 ~ setDialogData:", setDialogData)
  if (!showDetailsDialog) {
    return null;
  }

  const closeModalHandler = () => {
    setShowDetailsDialog(false);
    setDialogData({});

    document.documentElement.classList.remove("noScroll");
  };

  return (
    <>
      <section
        id="detail"
        className="position-fixed top-0 start-0 end-0 z-1 h-100 overflow-y-scroll"
      >
        <div className="container my-5">
          <div className="row">
            <div className="col-8 offset-2 bg-white rounded-4 position-relative">
              <i
                className="fa-solid fa-close fa-2x position-absolute closeIcon"
                onClick={closeModalHandler}
              ></i>

              <div className="pt-5">
                <Header title={dialogData.title} />
              </div>
              <figure className="px-5 mb-0">
                <img
                  src={dialogData.image}
                  className="w-100 rounded-4"
                  alt="cabin"
                />
                <figcaption>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <span
                    className="d-block text-center mb-3"
                    onClick={closeModalHandler}
                  >
                    <i className="fa-solid fa-close fa-2x align-middle me-2"></i>
                    Close Window
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
