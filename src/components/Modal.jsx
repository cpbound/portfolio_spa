import { createPortal } from "react-dom";
import { useState } from "react";

export default function Modal(props) {
  let modalRoot = document.querySelector(
    "body #root .container .backCover .allDetails .profileBox .profileText"
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="unstyled-button" onClick={() => setShowModal(true)}>
        <img
          className="projectThumbnail"
          src={props.portfolio.cover}
          alt="portfolio"
        />
      </button>
      {showModal &&
        createPortal(
          <div className="portfolioModal">
            <button
              className="unstyled-button"
              onClick={() => setShowModal(false)}
            >
              <div className="modalText">
                <h1>{props.portfolio.title}</h1>
                <a target="_blank" rel="noreferrer" href={props.portfolio.url}>
                  <img
                    className="projectThumbnail"
                    src={props.portfolio.cover}
                    alt="portfolio"
                  />
                </a>
                <p>{props.portfolio.description}</p>
              </div>
            </button>
          </div>,
          modalRoot
        )}
    </>
  );
}
