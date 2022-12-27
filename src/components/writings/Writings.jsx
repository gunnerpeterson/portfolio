/** @format */
import "./writings.scss";
import soc from "../../assets/s&p.png";
import socPDF from "../../assets/socrates and the pig at the end of time together.pdf";
import meta from "../../assets/metapragmatism.png";
import metaPDF from "../../assets/Metapragmatism.pdf";
import meta2 from "../../assets/metaprag_pt2.png";
import alg from "../../assets/onalg.png";
import algPDF from "../../assets/Algorithms.pdf";
import manip from "../../assets/moral_manip.png";
import manipPDF from "../../assets/Moral Manipulation.pdf";
import death from "../../assets/death.png";
import deathPDF from "../../assets/On Death.pdf";
import rhetoric from "../../assets/rhetoric.png";
import rhetoricPDF from "../../assets/Philosophy on Rhetoric.pdf";
import second from "../../assets/2ndp.png";
import secondPDF from "../../assets/Philosophy of the Second Person.pdf";
import speech from "../../assets/speech.png";
import speechPDF from "../../assets/on the nonexistance of words.pdf";

export default function Writings() {
  return (
    <div className="writings" id="writings">
      <h1>Writings</h1>
      <p>
        A selection of my most recent works. Be on the lookout for "Heaven," my
        first work of prose fiction on death and the afterlife.
      </p>
      <div className="container">
        <a href={socPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={soc} alt="" />
            <h3>Socrates and the Pig</h3>
            <p>
              A comedy in the spirit of J.S. Mill's "Sad Socrates and Happy
              Fool" thought experiment.
            </p>
          </div>
        </a>
        <a href={metaPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={meta} alt="" />
            <h3>Metapragmatism</h3>
            <p>
              A school of thought of my own invention, "Metapragmatism" is a
              system of Metaphysics in which truth is driven by purpose.
            </p>
          </div>
        </a>
        <a href={speechPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={speech} alt="" />
            <h3>On Words</h3>
            <p>
              A peice of epideictic oratory written in the style of Gorgias
              proving words do not exist.
            </p>
          </div>
        </a>
        <div
          className="item"
          onClick={() => {
            alert("Get in touch in the Contact section below for this work.");
          }}
        >
          <img src={meta2} alt="" />
          <h3>Metapragmatism pt 2</h3>
          <p>
            An exploration of conciousness in the spirit of Hofstadter's "Gödel,
            Escher, Bach."
          </p>
        </div>
        <a href={algPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={alg} alt="" />
            <h3>On Algorithms</h3>
            <p>
              A philosophical exploration of justice in the "Facebook
              whistleblower scandal."
            </p>
          </div>
        </a>
        <a href={manipPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={manip} alt="" />
            <h3>Moral Manipulation</h3>
            <p>
              An piece of literary analyisis exploring moral manipulation in
              Whitehead's "Nickel Boys."
            </p>
          </div>
        </a>
        <a href={deathPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={death} alt="" />
            <h3>On Death</h3>
            <p>
              An analysis of existentialist and romantic Philosophical
              perspectives on Death.
            </p>
          </div>
        </a>
        <a href={secondPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={second} alt="" />
            <h3>2nd Person Philosophy</h3>
            <p>
              An introduction to the ethics driven Metaphysics of Buber and
              Levinas.
            </p>
          </div>
        </a>
        <a href={rhetoricPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={rhetoric} alt="" />
            <h3>On Rhetoric</h3>
            <p>
              An introduction to and analysis of various Philosophical
              perspectives on persuasive language.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
