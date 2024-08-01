import "./Portfolio.css";
import Header from "./../Header/Header";
import data from "./data";
import Card from "./Card";
import { useState } from "react";
import Detail from "../Detail/Detail";

export default function Portfolio() {

  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});

  const onClickHandler = (title, image) => {
    setShowDetailsDialog(true);
    setDialogData({
      title,
      image,
    });

    document.documentElement.classList.add("noScroll");
  };
  return (
    <>
      <Detail
        showDetailsDialog={showDetailsDialog}
        dialogData={dialogData}
        setShowDetailsDialog={setShowDetailsDialog}
        setDialogData={setDialogData}
      />
      <section id="portfolio">
        <Header title={"PORTFOLIO"} />

        <div className="container">
          <div className="row gx-5 gy-5">
            {data.map((card) => (
              <Card
                image={card.image}
                onClickHandler={() => onClickHandler(card.title, card.image)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
