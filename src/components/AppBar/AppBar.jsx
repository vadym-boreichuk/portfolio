import { Outlet } from "react-router-dom";
import { Container, Item, Navcontainer } from "./AppBar.styled";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { SlCallIn } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import "./AppBar.css";
import { NavBar } from "../Navbar/NavBar";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Button,
} from "react-scroll";

export const AppBar = () => {
  return (
    <Container>
      <ul>
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
      </ul>
      {/* <Navcontainer>
        <a
          className="link"
          href="https://github.com/vadym-boreichuk"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiGithub className="responsive-icon" />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/vadym-boreichuk/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SlSocialLinkedin className="responsive-icon" />
        </a>
        <a
          className="link"
          href="mailto:vadym.boreichuk@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LuMail className="responsive-icon" />
        </a>
        <a
          className="link"
          href="tel:+48575224387"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SlCallIn className="responsive-icon" />
        </a>
        <a
          className="link"
          href="https://t.me/vados_frontend"
          target="_blank"
          rel="noreferrer noopener"
        >
          <PiTelegramLogo className="responsive-icon" />
        </a>
      </Navcontainer> */}
      <Outlet />
    </Container>
  );
};
