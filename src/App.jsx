import React, { Component } from "react";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Header from "./components/Header";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="coverPage">
            <Header />
            <div className="nameHeader">Christian Bound</div>
            <div className="subHeader">The web developer</div>
            <div className="mugshot">
              <img src="/images/avatarpunch.jpg" alt="mugshot" />
            </div>
          </div>
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

              <div className="contactBox">
                <img className="cvLink" src="/images/CVQR.png" alt="cvQRcode" />
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
