/** @format */
import React, { useState } from "react";
import "./slider.scss";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
      <ArrowForward className="left-arrow" />
      <ArrowBack className="right-arrow" />
      {slides.map((slide, index) => {
        return <img src={slide.image} alt="commutr image" className="image" />;
      })}
    </section>
  );
}
