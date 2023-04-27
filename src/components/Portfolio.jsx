import React from "react";
import portfolioData from "../data/portfolio.json";

const Portfolio = () => {
  const renderPortfolio = (portfolio) => {
    return (
      <div className="projectsBox">
        {portfolio.map((port, idx) => {
          return (
            <a href={port.url}>
              <img
                className="projectThumbnail"
                src={port.cover}
                alt="portfolio"
              />
            </a>
          );
        })}
      </div>
    );
  };

  return renderPortfolio(portfolioData.portfolio);
};

export default Portfolio;
