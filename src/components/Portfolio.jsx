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
          <a
            className="projectCard"
            key={idx}
            href={port.url}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <img
              className="projectThumbnail"
              src={port.cover}
              alt="portfolio"
              style={{ width: '22vw', maxWidth: 120, borderRadius: 8 }}
            />
            <div className="modalText" style={{ flex: '1 1 0', minWidth: 0 }}>
              <h1 className="projectHeader" style={{ margin: 0, fontSize: '4vw' }}>{port.title}</h1>
              <p className="projectDescription" style={{ margin: '1vw 0 0 0', fontSize: '4vw' }}>{port.description}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }
};

export default Portfolio;
