import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Modal(props) {
  let modalRoot = document.querySelector(
    "body #root .container .backCover .allDetails .profileBox .profileText"
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", console.log("clicked"));
  })

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
            <div className="modalText">
              <h1>{props.portfolio.title}</h1>
              <a target="_blank" rel="noreferrer" href={props.portfolio.url}>
                <img
                  className="projectThumbnail"
                  src={props.portfolio.cover}
                  alt="portfolio"
                />
                {/* <FaExternalLinkSquareAlt className="svg" /> */}
              </a>
              <p>{props.portfolio.description}</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}
