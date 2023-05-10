import React from "react";
import portfolioData from "../data/portfolio.json";
import Modal from "./Modal";

const Portfolio = () => {
  const renderPortfolio = (portfolio) => {
    return (
      <div className="projects">
        <div className="projectsBox">
          {portfolio.map((port, idx) => {
            return <Modal portfolio={port} />;
          })}
        </div>
      </div>
    );
  };

  return renderPortfolio(portfolioData.portfolio);
};

export default Portfolio;
