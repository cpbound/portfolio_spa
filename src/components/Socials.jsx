import React from "react";
import { useState } from "react";
import {
  FaGithubAlt,
  FaSoundcloud,
  FaBandcamp,
  FaLinkedin,
  FaEnvelope,
  FaMediumM,

} from "react-icons/fa";
import Pdf from "../assets/Christian_Bound_Resume.pdf";

export default function Socials(props) {
  const [social, setSocial] = useState("");

  return (
    <div className="contactBox">
      <a className="cvLink" target="_blank" href={Pdf} rel="noreferrer">
        <img className="qrCode" src="/images/CVQR.png" alt="cvQRcode"></img>
      </a>
      <div className="contactText">
        <div
          className="socialsBox"
          style={{ border: `0.4vw solid ${props.colour}` }}
        >
          <h1 className="playerTitle">PLAYERS: {social}</h1>
          <h1 className="peripheralTitle">PERIPHERALS:</h1>
          <div className="socialsLinks">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/christian-bound/"
              onMouseEnter={() =>
                setSocial(<i style={{ color: `#005DA3` }}>LinkedIn</i>)
              }
              onMouseLeave={() => setSocial("")}
            >
              <FaLinkedin className="socialIcon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/cpbound"
              onMouseEnter={() => [
                setSocial(<i style={{ color: `#005DA3` }}>Github</i>),
              ]}
              onMouseLeave={() => setSocial("")}
            >
              <FaGithubAlt className="socialIcon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@cpbound87"
              onMouseEnter={() =>
                setSocial(<i style={{ color: `#005DA3` }}>Medium</i>)
              }
              onMouseLeave={() => setSocial("")}
            >
              <FaMediumM className="socialIcon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://soundcloud.com/adult_time"
              onMouseEnter={() =>
                setSocial(<i style={{ color: `#005DA3` }}>SoundCloud</i>)
              }
              onMouseLeave={() => setSocial("")}
            >
              <FaSoundcloud className="socialIcon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://adulttime.bandcamp.com/"
              onMouseEnter={() =>
                setSocial(<i style={{ color: `#005DA3` }}>BandCamp</i>)
              }
              onMouseLeave={() => setSocial("")}
            >
              <FaBandcamp className="socialIcon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:cpbound87@gmail.com"
              onMouseEnter={() =>
                setSocial(<i style={{ color: `#005DA3` }}>Mail Me</i>)
              }
              onMouseLeave={() => setSocial("")}
            >
              <FaEnvelope className="socialIcon" />
            </a>
          </div>
        </div>
        <div className="footer">
          <div className="footerText">
            2025 © Christian Bound {"\n"} Made In Japan {"\n"} Sega logo style
            font from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://actselect.chips.jp/"
            >
              https://actselect.chips.jp/
            </a>{" "}
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
