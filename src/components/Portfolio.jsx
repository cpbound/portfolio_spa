import React from "react";
import portfolioData from "../data/portfolio.json";
import Modal from "./Modal";
import { useEfect, useState } from "react";

const Portfolio = () => {
  const renderPortfolio = (portfolio) => {
    const query = `1200`;
    const media = window.innerWidth;
    if (media > query) {
      return (
        <div className="projects">
          <div className="projectsBox">
            {portfolio.map((port, idx) => {
              return <Modal portfolio={port} />;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="projectsBox">
          {portfolio.map((port, idx) => {
            return (
              <div className="projectsModal">
                <a target="_blank" rel="noreferrer" href={port.url}>
                  <img
                    className="projectThumbnail"
                    src={port.cover}
                    alt="portfolio"
                  />
                </a>
                <h1 className="projectHeader">{port.title}</h1>
                <p className="projectDescription">{port.description}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return renderPortfolio(portfolioData.portfolio);
};

export default Portfolio;
