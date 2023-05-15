import React from "react";

const Profile = () => {
  return (
    <div className="profileBox">
      <div className="profileText">
        🛠️🚧This'll be the profile bit one day. At the moment I'm using it as a
        notes section. Pretty swell. Master Systems boxes are great, huh? Check
        out their beauty here:{" "}
        <a href="https://segaretro.org/Category:Master_System_UK_box_scans">
          at Sega Retro
        </a>
        <br />
        <br />
        🛠️🚧The basic layout is okay. It isn't responsive yet but I'll get to
        that. And it doesn't want to play nice with firefox yet but, again,
        we'll get to that.
        <br />
        <br />
        🛠️🚧It's May 15th 2023, so it's my birthday and I've been gainfully
        unemployed for a year! Excellent! The page now has a lovely texture to
        take the harshness off that white. It's mostly working now apart from
        being responsive. And a loader and some animations too to tidy things up a bit. Once that's done, I'm going to sort out darkmode and
        then a more accessible version for screen readers and mobile devices.
        Still, it mostly looks like a Master System box which was really what I
        wanted to achieve.
      </div>
    </div>
  );
};

export default Profile;
