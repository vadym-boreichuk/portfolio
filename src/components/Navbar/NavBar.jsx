import React from "react";
import { Link, Element } from "react-scroll";
// import { Link } from "react-router-dom";
import { Container } from "./NavBar.styled";
import { AppBar } from "../AppBar/AppBar";
import { AboutPage } from "../../pages/AboutPage";
import { SkilsPage } from "../../pages/Skils";
import { ProjectsPage } from "../../pages/Projects";
import { ExperiencePage } from "../../pages/Experience";
import { EducationPage } from "../../pages/Education";
import { Main } from "../../pages/Main/Main";

export const NavBar = () => {
  return (
    <Container>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="section1" smooth={true} duration={500}>
                AboutPage
              </Link>
            </li>
            <li>
              <Link to="section2" smooth={true} duration={500}>
                EducationPage
              </Link>
              <li>
                <Link to="section3" smooth={true} duration={500}>
                  ExperiencePage
                </Link>
              </li>
              <li>
                <Link to="section4" smooth={true} duration={500}>
                  ProjectsPage
                </Link>
              </li>
              <li>
                <Link to="section4" smooth={true} duration={500}>
                  SkilsPage
                </Link>
              </li>
            </li>
          </ul>
        </nav>

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
        <Element name="section4" className="section">
          <SkilsPage />
        </Element>
      </div>
      {/* <Link to="/about">About</Link>
      <Link to="/contact">contact</Link>
      <Link to="/education">education</Link>
      <Link to="/experience">experience</Link>
      <Link to="/projects">projects</Link>
      <Link to="/skils">skils</Link> */}
    </Container>
  );
};
