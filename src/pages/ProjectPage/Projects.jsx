import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./Projects.css";
import { Container, Left } from "./Projects.styled";
import pidpal from "../../images/pidpal.png";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webstudio from "../../images/webstudio.png";
import movies from "../../images/movies.png";
import phonebook from "../../images/phonebook.png";

export const ProjectsPage = () => {
  const settings = {
    // arrows: false,
    infinite: true,
    autoplaySpeed: 8000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <ProjectCard
          title={"movies"}
          img={movies}
          alt={"movies"}
          description={""}
          link={"https://vadym-boreichuk.github.io/goit-react-hw-05-movies/"}
          linkgh={"https://github.com/vadym-boreichuk/goit-react-hw-05-movies"}
        />
        <ProjectCard
          title={"WedStudio"}
          img={webstudio}
          alt={"webstudio"}
          description={""}
          link={"https://vadym-boreichuk.github.io/goit-markup-hw-08/"}
          linkgh={"https://github.com/vadym-boreichuk/goit-markup-hw-08"}
        />

        <ProjectCard
          title={"PhoneBook"}
          img={phonebook}
          alt={"phonebook"}
          description={""}
          link={"https://vadym-boreichuk.github.io/goit-react-hw-08-phonebook/"}
          linkgh={
            "https://github.com/vadym-boreichuk/goit-react-hw-08-phonebook"
          }
        />

        {/* <ProjectCard title={""} img={""} alt={""} description={""} /> */}
      </Slider>
    </Container>
  );
};
