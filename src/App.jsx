import React from "react";
import { useState } from "react";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Profile from "./components/Profile";
import Cover from "./components/Cover";

const App = () => {
  const colourPalette = [
    "#63399B",
    "#F7F30A",
    "#F5341B",
    "#D76515",
    "#2BB245",
    "#0C7EA7",
    "#F95389",
  ];

  const generateColor =
    colourPalette[Math.floor(Math.random() * colourPalette.length)];
  const [colour] = useState(generateColor);

  return (
    <>
      <div className="container">
        <Cover colour={colour} />
        <div className="spine">
          <div className="spineText">Christian Bound</div>
        </div>
        <div className="backCover">
          <img
            className="backCoverImage"
            src="/images/HomeTitle.png"
            alt="backCover"
          />
          <div className="allDetails">
            <Portfolio />
            <Profile />
            <Socials colour={colour} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
