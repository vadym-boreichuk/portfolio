import { Outlet } from "react-router-dom";
import { Container, Item, Navcontainer } from "./AppBar.styled";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { SlCallIn } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import "./AppBar.css";

export const AppBar = () => {
  return (
    <Container>
      <Navcontainer>
        {/* <a
          href="https://github.com/vadym-boreichuk"
          target="_blank"
          rel="noreferrer noopener"
        > */}
        {/* </a> */}

        <FiGithub className="responsive-icon" />

        <SlSocialLinkedin className="responsive-icon" />

        <LuMail className="responsive-icon" />

        <SlCallIn className="responsive-icon" />

        <PiTelegramLogo className="responsive-icon" />
      </Navcontainer>
      <Outlet />
    </Container>
  );
};

// <Link to="/about">About</Link>
// <Link to="/contact">contact</Link>
// <Link to="/education">education</Link>
// <Link to="/experience">experience</Link>
// <Link to="/projects">projects</Link>
// <Link to="/skils">skils</Link>
