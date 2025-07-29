import React, { useState, useEffect } from "react";
import portfolioData from "../data/portfolio.json";
import Modal from "./Modal";

const Portfolio = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDesktop) {
    return (
      <div className="portfolioContainer">
        <h1 className="projectsHeader">⬇️Projects⬇️</h1>
        <div className="projects">
          <div className="projectsBox">
            {portfolioData.portfolio.map((port, idx) => (
              <Modal key={idx} portfolio={port} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="projectsBox">
        {portfolioData.portfolio.map((port, idx) => (
          <div className="projectCard" key={idx}>
            <div className="modalText">
              <a target="_blank" rel="noreferrer" href={port.url}>
                <img
                  className="projectThumbnail"
                  src={port.cover}
                  alt="portfolio"
                />
              </a>
              <h1 className="projectHeader">{port.title}</h1>
              <hr />
              <p className="projectDescription">{port.description}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Portfolio;
