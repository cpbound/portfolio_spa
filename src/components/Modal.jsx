import { createPortal } from "react-dom";
import { useState } from "react";
import { FaWindowClose, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Modal(props) {
  let modalRoot = document.querySelector(
    "body #root .container .backCover .allDetails .profileBox .profileText"
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img
        className="projectThumbnail"
        src={props.portfolio.cover}
        alt="portfolio"
        onClick={() => setShowModal(true)}
      />
      {showModal &&
        createPortal(
          <div className="portfolioModal" onClick={() => setShowModal(false)}>
            <div className="modalText">
              <FaWindowClose className="closeIcon" />
              <h1>{props.portfolio.title}</h1>
              <a target="_blank" rel="noreferrer" href={props.portfolio.url}>
                <img
                  className="projectThumbnail"
                  src={props.portfolio.cover}
                  alt="portfolio"
                />
                <FaExternalLinkSquareAlt className="externalIcon"/>
              </a>
              <p>{props.portfolio.description}</p>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}
