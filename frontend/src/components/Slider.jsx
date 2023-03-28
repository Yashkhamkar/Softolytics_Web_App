import React from "react";
import HeroSlider, { Slide, MenuNav } from "hero-slider";
import Social from "./Social";
// import "./Slider.css";
import img1 from "../assets/home-slider/banner.jpg";
import img2 from "../assets/home-slider/banner3.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const Slider = () => {
  return (
    <div id="main">
      {/* <Social /> */}
      <HeroSlider
        height={"100vh"}
        width="100%"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: img1,
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: img2,
          }}
        />{" "}
        {/* <MenuNav /> */}
      </HeroSlider>
    </div>
  );
};

export default Slider;
