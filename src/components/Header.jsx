import React from "react";
import { useState } from "react";

const Header = () => {
  const colourPalette = [
    "#63399B",
    "#F7F30A",
    "#F7F30A",
    "#F7F30A",
    "#F7F30A",
    "#F7F30A",
    "#F95389",
  ];

  const generateColor = colourPalette[Math.floor(Math.random() * colourPalette.length)];;
  const [colour] = useState(generateColor);

  console.log(colour)

  return (
    <header>
      <svg
        width="70%"
        height="300px"
        transform="rotate(45)"
        x="-1000"
        xmlns="http://www.w3.org/2000/svg"
        fill={colour}
        display="block"
        transform-origin="269px -139px"
      >
        <rect width="300" height="300" x="0" y="0" />
      </svg>
    </header>
  );
};

export default Header;
