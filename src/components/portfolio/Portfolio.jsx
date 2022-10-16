/** @format */
import { useState } from "react";
import "./portfolio.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "0",
      title: "Commutr",
      desc: " After winning the “Best for Social Good” award at a Milton academy hackathon, Milton’s Sustainability board reached out to us asking if they could further fund development of this product. At the time the board had been trying to solve the same task as us, only they were working by hand. Our programmatic solution to this problem greatly reduced the human time commitment and workloads and could be easily in future years to build a sustainable future at Milton Academy and beyond. The web app is currently live, although functionality will be turned off until the fall of 2022.",
      images: [
        "assets/commutr_route.png",
        "assets/commutr_profile.png",
        "assets/commutr_login.png",
      ],
      link: "http://commutr.org",
    },
    {
      id: "1",
      title: "Tutor Milton",
      desc: "I led a team to recreate the website used to pair students with peer tutor, and was appointed to project head and faculty/student liaison. I became an expert in React fontend development and Firebase database management. I led a team of six students to create a finished and polished product currently used by the school, and was the primary programmer for the site. Features of this website included a page to request approval to tutor, a page to request tutoring, and corresponding pages teachers to approve students and tutors to accept requests.",
      images: ["assets/tutor_prof.png", "assets/tutor_req.png"],
      link: "https://tutormilton.com/",
    },
    {
      id: "2",
      title: "Gotcha",
      desc: 'I worked with two team members to design and execute the code for "Gotcha," an all school game of tag hosted at my school. Using a database of faces which I had scraped from the school directory prior, I built a website which paired students to both a tagger and a target. These pairings formed a complete circle, so a tag resulted in being re-paired with the target\'s victim. Special features included a showcase of student made logos for the game, a last words feature to announce your loss to the school, a leaderboard, and a page to see the name and photo of your target.',
      images: ["assets/gotcha_1.png", "assets/gotcha_2.png"],
      link: "https://github.com/Gunman108/gotcha",
    },
    {
      id: "3",
      title: "PhilBot",
      desc: "I built a text generation model using a variety of Philosophical texts, many of which I have read. My intention was to detect patterns across a variety of schools of thought, to perhaps come to a common consensus among thinkers. I first designed individual models to analyze the writing styles of individual thinkers. I created models for the Bible, Nietzsche, Plato, and Timothy Dexter. I then created my collective model. In order to preserve a diversity of thought, I did research into a variety of philosophies from geographic areas, time periods, genders, etc.",
      images: ["assets/textgen.png", "assets/phil_list.png"],
      link: "https://colab.research.google.com/drive/1aACU-uJ48dYebRfw15S7W_I3Kf0pUucw?usp=sharing",
    },
    {
      id: "5",
      title: "Facial/Gender Recognition",
      desc: "In this project, I first used Selenium to access and pull from my school's directory. I built a model that looked through this directory and recognized the name of anyone in my school through simply analyzing a photo of their face. I then classified these photos into categories based on gender presentation, and built a Convolutional Neural Network based off of this data to categorize new faces.",
      images: ["assets/face_rec.png", "assets/face_photo.png"],
      link: "https://colab.research.google.com/drive/1A80I2NC6UPSHIYrfJ--SVD0pwLHev86f?usp=sharing#scrollTo=6FKuCd2h-CXl",
    },
    {
      id: "6",
      title: "Kingdomfall.io",
      desc: 'I co-created a prototype of a tower defense game in native JavaScript using p5. I designed all of the minimalist digital art for the game, as well as much of the code behind the game\'s core mechanics. The game won "Best Design" at the 2020 annual BB&N Hackathon.',
      images: [
        "assets/kingdomfall.png",
        "assets/kingomfall_menu.png",
        "assets/kingdomfall_code.png",
      ],
      link: "https://editor.p5js.org/Gumba/sketches/vrRMm8PFL",
    },
    {
      id: "6",
      title: "Medelian Genetics",
      desc: "I conducted an experiment to study the effect of homozygous dominance in Brassica rapa plants on the strength of its purple color. In short, I was trying to prove that, while small, clear differences between homozygous and heterozygous dominant plants could be detected with computer technology. I created a color analysis algorithm with Python and the cv2 library. I then used this algorithm to determine that there are, in fact, differences between the phenotypes of homozygous and heterozygous dominant plants!",
      images: [
        "assets/medel1.png",
        "assets/medel2.png",
        "assets/medel_graph.png",
      ],
      link: "https://docs.google.com/document/d/11U0xDl7KNu4L8vkIVbO6vPRZPGXLn5fIQ0n9-SguDrc/edit?usp=sharing",
    },
    {
      id: "7",
      title: "Food Pantry Management",
      desc: "Created an organization app for my food pantry using a cross platform development environment in Java and hosted an SQL server database. This project was completed by me, and me alone. I did consulting work and talked to volunteers and clients alike to determine their needs and accessibility restrictions. The project was eventually completed with elderly accessibility in mind.",
      images: ["assets/foodpantry_1.png", "assets/foodpantry_2.png"],
      link: "https://github.com/Gunman108/FoodPantry",
    },
    {
      id: "8",
      title: "Orbital Mechanics",
      desc: "I created simulated solar system using physics concepts and knowledge of Orbital mechanics and vector math. I developed systems with single and multiple orbiting bodies, as well as a rescaling algorithm in Java. I prototyped a version in JavaScript and later created a full solar system in Java.",
      images: ["assets/orbit.png", "assets/orbit_prototype.png"],
      link: "https://editor.p5js.org/Gumba/sketches/oRB0_qn_t",
    },
    {
      id: "9",
      title: "Calculus With CS",
      desc: "I have worked on many products which use Computer Science as a vehicle for the study of Calculus. I have worked on a Riemann Sum algorithm, a local minimum convergence algorithm, and an instantaneous slope (derivative) calculator. In this process I also aided in the creation of a Mathematical Equation parser, which can turn strings into equations to calculate.",
      images: ["assets/calc_1.png", "assets/calc_2.png"],
      link: "https://github.com/Gunman108/Local-Minimum-Regressor",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} className="commutr-link" target="_blank">
                    Project Link
                  </a>
                </div>
              </div>
              <div className="right">
                {d.images.map((im) => (
                  <img className="commutr_pic" src={im} alt="" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
