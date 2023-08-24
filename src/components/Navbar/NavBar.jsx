import React, { forwardRef, useRef, useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Container, List } from "./NavBar.styled";
import { AboutPage } from "../../pages/AboutPage";
import { SkilsPage } from "../../pages/Skils";
import { ProjectsPage } from "../../pages/Projects";
import { ExperiencePage } from "../../pages/Experience";
import { EducationPage } from "../../pages/Education";
import "./NavBar.css";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);

  const scroolToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <Container>
      <List>
        <Link
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "24px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
          }}
          // onSetActive={start}
          // onSetInactive={end}
          className="hover"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          to="section1"
        >
          AboutPage
        </Link>

        <Link
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "24px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
          }}
          className="hover"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          to="section2"
        >
          EducationPage
        </Link>

        <Link
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "24px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
          }}
          className="hover"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          to="section3"
        >
          ExperiencePage
        </Link>
        <Link
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "24px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
          }}
          className="hover"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          to="section4"
        >
          ProjectsPage
        </Link>
        <Link
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "24px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
          }}
          className="hover"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          to="section5"
        >
          SkilsPage
        </Link>
      </List>

      <Element name="section1" className="section">
        <AboutPage />
      </Element>
      <Element name="section2" className="section">
        <EducationPage />
      </Element>
      <Element name="section3" className="section">
        <ExperiencePage />
      </Element>
      <Element name="section4" className="section">
        <ProjectsPage />
      </Element>
      <Element name="section5" className="section">
        <SkilsPage />
      </Element>
      {isVisible && (
        <button className="scroll-button" onClick={scroolToTop}>
          Наверх
        </button>
      )}
    </Container>
  );
};
