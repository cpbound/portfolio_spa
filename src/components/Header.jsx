import React from "react";

const Header = (props) => {
  return (
    <header>
      <svg
        width="150px"
        height="150px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill={props.colour}
        display="block"
      >
        <g>
          <polygon points="0,0 150,0 0,150" />

          <text
            x="20"
            y="75"
            transform="rotate(-45 45,85)"
            fontFamily="Arial"
            fontWeight="bold"
            fill="white"
            fontSize="28"
          >
            ACTION
          </text>
        </g>
      </svg>
      <img className="home" src="/images/HomeTitle.png" alt="logo" />
    </header>
  );
};

export default Header;
