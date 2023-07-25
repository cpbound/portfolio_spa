import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <svg
        viewBox="0 0 150 125"
        width="25%"
        height="25%"
        xmlns="http://www.w3.org/2000/svg"
        // preserveAspectRatio="xminYMin slice"
        fill={props.colour}
        display="block"
      >
        <g>
          <polygon points="0,0 150,0 0,125" />

          <text
              x="34"
              y="70"
              transform="rotate(-40 40,85)"
              fontFamily="Arial"
              fontWeight="600"
              fill="white"
              fontSize="26"
              >
              STUFF
            </text>
        </g>
      </svg>
      <img className="homePng" src="/images/HomeTitle.png" alt="logo" />
    </div>
  );
};

export default Header;
