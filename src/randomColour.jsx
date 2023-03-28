import { useState } from "react";

const colourPalette = [
  "#63399B",
  "#F7F30A",
  "#F7F30A",
  "#F7F30A",
  "#F7F30A",
  "#F7F30A",
  "#F95389",
];

console.log(colourPalette[1])

const useColourPalette = () => {
  const [colour, setColour] = useState("");
  const generateColor = () => {
    setColour(colourPalette[Math.floor(Math.random() * colourPalette.length)]);
  };
  return { colour, generateColor };
};
export default useColourPalette;
