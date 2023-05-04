import React from "react";
import {
  FaGithubAlt,
  FaSoundcloud,
  FaBandcamp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Socials(props) {
  return (
    <div className="contactBox">
      <img className="cvLink" src="/images/CVQR.png" alt="cvQRcode" />
      <div className="contactText">
        <div
          className="socialsBox"
          style={{ border: `4px solid ${props.colour}` }}
        >
          <h1 className="playerTitle">PLAYERS: 1</h1>
          <h1 className="peripheralTitle">PERIPHERALS:</h1>
          <div className="socialsLinks">
            <a href="https://github.com/cpbound">
              <FaGithubAlt className="socialIcon" />
              <span className="tooltiptext">GitHub</span>
            </a>
            <a href="https://soundcloud.com/adult_time">
              <FaSoundcloud className="socialIcon" />
              <span className="tooltiptext">Soundcloud</span>
            </a>
            <a href="https://adulttime.bandcamp.com/">
              <FaBandcamp className="socialIcon" />
              <span className="tooltiptext">Bandcamp</span>
            </a>
            <a href="https://www.linkedin.com/in/christian-bound/">
              <FaLinkedin className="socialIcon" />
              <span className="tooltiptext">LinkedIn</span>
            </a>
            <a href="mailto:cpbound87@gmail.com">
              <FaEnvelope className="socialIcon" />
              <span className="tooltiptext">Mail me</span>
            </a>
          </div>
        </div>
        <div className="footer">
          <div className="footerText">
              2023 © Christian Bound {"\n"} Made In Japan 2023-05-01 {"\n"} Sega
              logo style font from{" "}
            <a href="https://actselect.chips.jp/">
              https://actselect.chips.jp/
            </a>
          </div>
          <img
            className="footerTitle"
            src="/images/FooterLogo.png"
            alt="footer"
          />
        </div>
      </div>
    </div>
  );
}
