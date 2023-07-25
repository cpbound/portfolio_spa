import React from "react";
import Header from "./Header";

const Cover = (props) => {
  return (
    <div className="coverPage">
      <Header colour={ props.colour } />
      <div className="nameHeader">Christian Bound</div>
      <div className="subHeader">The web developer</div>
      <div className="mugshot">
        <img src="/images/Profile_pic_centre.jpg" alt="mugshot" />
      </div>
    </div>
  );
};

export default Cover;
