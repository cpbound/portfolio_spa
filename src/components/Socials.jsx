import React from "react";
import {
  FaGithubAlt,
  FaSoundcloud,
  FaBandcamp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socialsBox">
      <h1>PLAYERS: 1</h1>
      <h1>PERIPHERALS: </h1> <FaGithubAlt className="socialIcon" />
      <FaSoundcloud className="socialIcon" />
      <FaBandcamp className="socialIcon" />
      <FaLinkedin className="socialIcon" />
      <FaEnvelope className="socialIcon" />
    </div>
  );
}
