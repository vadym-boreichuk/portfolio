import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./Projects.css";
// import { Container, Left } from "./Projects.styled";
// import pidpal from "../../images/pidpal.png";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Custom, Loading } from "./Projects.styled";
import { styled } from "styled-components";

const RedDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 2px;
  margin: 0 5px;
`;

export const ProjectsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
  };
  return (
    // <div>

    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};
