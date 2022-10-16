/** @format */

import "./intro.scss";

import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Philosopher", "Programmer", "Playwrite"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/main_pic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World, I'm</h2>
          <h1>Gunner Peterson</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio"></a>
      </div>
    </div>
  );
}