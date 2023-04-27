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
      <div
        className="socialsBox"
        style={{ border: `4px solid ${props.colour}` }}
      >
        <h1 className="playerTitle">PLAYERS: 1</h1>
        <h1 className="peripheralTitle">PERIPHERALS:</h1>
        <div className="socialsLinks">
          <a href="https://github.com/cpbound">
            <FaGithubAlt className="socialIcon" />
          </a>
          <a href="https://soundcloud.com/adult_time">
            <FaSoundcloud className="socialIcon" />
          </a>
          <a href="https://adulttime.bandcamp.com/">
            <FaBandcamp className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/christian-bound/">
            <FaLinkedin className="socialIcon" />
          </a>
          <a href="mailto:cpbound87@gmail.com">
            <FaEnvelope className="socialIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
