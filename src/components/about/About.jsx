/** @format */

import "./about.scss";
import { useState } from "react";
import {
  GitHub,
  YouTube,
  Twitter,
  LinkedIn,
  MenuBook,
} from "@material-ui/icons";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h1>About</h1>
          <p>
            I’m a Philosopher and Programmer from Boston, Massachusetts. My goal
            is to combine these two disperate fields through bring my knowledge
            of Ethics, Language, Logic, and beyond into the expanding dicipline
            of Artificial Intelligence. I view programming as my medium and
            conduit for Philosophy, much like playwriting and fiction.
          </p>
          <h2>Skillset</h2>
          <div className="skillWrapper">
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>Javascript</li>
              <li>C++</li>

              <li>Firebase</li>
              <li>HTML+CSS</li>
              <li>MERN stack</li>
              <li>Clojure</li>
              <li>UX Design</li>
            </ul>
          </div>
          <h2>Positions</h2>
          <div className="posWrapper">
            <div className="container">
              <div
                className="card"
                onClick={() => {
                  window.open("https://www.patch.tech/", "_blank");
                }}
              >
                <div className="bottom">
                  <h3>Patch Technologies</h3>
                  <h4>Distributed Systems Intern</h4>
                  <h5>January 2022 - Present</h5>
                </div>
              </div>
              <div
                className="card"
                onClick={() => {
                  window.open(
                    "https://www.berkeleycodingacademy.com/team",
                    "_blank"
                  );
                }}
              >
                <div className="bottom">
                  <h3>Berkeley Coding Academy</h3>
                  <h4>Data Science Instructor</h4>
                  <h5>August 2022 - Present</h5>
                </div>
              </div>
              <div
                className="card"
                onClick={() => {
                  window.open(
                    "https://www.codeninjas.com/ma-medfield",
                    "_blank"
                  );
                }}
              >
                <div className="bottom">
                  <h3>Code Ninjas</h3>
                  <h4>Code Sensei</h4>
                  <h5>September 2021 - June 2022</h5>
                </div>
              </div>
            </div>
          </div>
          <h2>Socials</h2>

          <div className="social-menu">
            <ul>
              <li>
                <a href="https://github.com/Gunman108" target="_blank">
                  <GitHub className="icon GitHub" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCkBUieHBtSlyzhUFmZVBDbw"
                  target="_blank"
                >
                  <YouTube className="icon YouTube" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Gumbapeterson" target="_blank">
                  <Twitter className="icon Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gunner-peterson-20729820b/"
                  target="_blank"
                >
                  <LinkedIn className="icon LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/gumba" target="_blank">
                  <MenuBook className="icon Book" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img className="" src="assets/abt_pic.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
