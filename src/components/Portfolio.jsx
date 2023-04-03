import portfolioData from "../data/portfolio.json";

const Portfolio = () => {
  const renderPortfolio = (portfolio) => {
    return (
      <div className="projectsBox">
        {portfolio.map((port, idx) => {
          return (
            <img
              className="projectThumbnail"
              src={port.cover}
              alt="portfolio"
            />
          );
        })}
      </div>
    );
  };

  return renderPortfolio(portfolioData.portfolio);
};

export default Portfolio;
