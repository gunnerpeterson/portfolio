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
import abort from "../../assets/abortion.png";
import abortPDF from "../../assets/Abortion and Objective Emotivism.pdf";
import friend from "../../assets/friendship.png";
import friendPDF from "../../assets/Friendship.pdf";
import mind from "../../assets/function.png";
import mindPDF from "../../assets/Functionalism Dualism.pdf";
import gorg from "../../assets/gorg.png";
import gorgPDF from "../../assets/Gorgias' Helen.pdf";

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
        <a href={abortPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={abort} alt="" />
            <h3>Abortion & Emotivism</h3>
            <p>
              An objective emotivist perspective in the Abortion debate through
              the analysis of Marquis and Thomson.
            </p>
          </div>
        </a>
        <a href={friendPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={friend} alt="" />
            <h3>On Friendship</h3>
            <p>
              An exploration of Aristotelian and Platonic definitions of
              friendship.
            </p>
          </div>
        </a>
        <a href={mindPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={mind} alt="" />
            <h3>On Functionalism</h3>
            <p>
              A comparison between Cartesian Dualist and Functionalist
              perspectives on the Mind and conciousness.
            </p>
          </div>
        </a>
        <a href={gorgPDF} target="_blank" rel="noopener noreferrer">
          <div className="item">
            <img src={gorg} alt="" />
            <h3>On Gorgias</h3>
            <p>
              An analysis of the ancient rhetor Gorgias and his use of language
              in his "Encomium of Helen."
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
