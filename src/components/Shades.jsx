import React, { useState, useEffect, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade";

const Shades = ({ color }) => {
  const audioRef = useRef();
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) {
      createShades();
    }
  }, [color]);
  const createShades = () => {
    const shades = new Values(color).shades(1);
    setShades(shades);
  };
  const onCopy = () => {
    audioRef.current.play();
  };
  return (
    <div className="shade">
      <audio ref={audioRef} src={require("../assets/sound1.mp3")}></audio>
      {shades.map((shade) => (
        <Shade className="color" shade={shade} onCopy={onCopy}></Shade>
      ))}
    </div>
  );
};
export default Shades;
