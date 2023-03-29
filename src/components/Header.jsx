import React from "react";
import { useState } from "react";

const Header = () => {
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
    <header>
      <svg
        width="70%"
        height="300px"
        transform="rotate(45)"
        xmlns="http://www.w3.org/2000/svg"
        fill={colour}
        display="block"
        transform-origin="269px -139px"
      >
        <g>
          <rect width="300" height="300" x="0" y="0" />
          <text x="1000" y="1000" fontFamily="Verdana" fill="black" fontSize="35">
            I love SVG!
          </text>
        </g>
      </svg>
    </header>
  );
};

export default Header;
