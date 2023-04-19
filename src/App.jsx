import React, { Component } from "react";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Header from "./components/Header";

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
            <div className="allDetails">
              <Portfolio />
              <div className="profileBox">
                <div className="profileText">
                  Here's the autobiographical section. Great stuff! Hailing from
                  the bottom bit of the U.K. and now firmly ensconced in Tokyo,
                  Japan; Chris, in a time prior to the time you're currently
                  reading this sentence now, studied English Literature and Film
                  Studies. After moving to Japan with his wife in 2011, Chris
                  taught English at various international schools in Tokyo
                  before (in the heady days of 2020) he felt a yearning for
                  something beyond the teaching life. He packed in his last
                  teaching gig in early 2022 and completed the full stack web
                  development course at Le Wagon. He now divides his time
                  between studying as much about web development as he can,
                  making music, looking after his family, playing video games
                  and sometimes sleeping when the need arises.
                </div>
              </div>
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