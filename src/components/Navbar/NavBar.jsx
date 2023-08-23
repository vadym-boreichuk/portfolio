import React, { forwardRef, useRef, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Container, List, StyledLink } from "./NavBar.styled";
import { AboutPage } from "../../pages/AboutPage";
import { SkilsPage } from "../../pages/Skils";
import { ProjectsPage } from "../../pages/Projects";
import { ExperiencePage } from "../../pages/Experience";
import { EducationPage } from "../../pages/Education";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Container>
      <List>
        <Link spy={true} to="section1" smooth={true} duration={500}>
          <StyledLink>AboutPage</StyledLink>
        </Link>

        <Link spy={true} to="section2" smooth={true} duration={500}>
          <StyledLink>EducationPage</StyledLink>
        </Link>

        <Link
          className="aaa"
          activeClass="active"
          spy={true}
          to="section3"
          smooth={true}
          duration={500}
        >
          <StyledLink>ExperiencePage</StyledLink>
        </Link>
        <Link to="section4" smooth={true} duration={500}>
          <StyledLink>ProjectsPage</StyledLink>
        </Link>
        <Link to="section5" smooth={true} duration={500}>
          <StyledLink>SkilsPage</StyledLink>
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
    </Container>
  );
};
