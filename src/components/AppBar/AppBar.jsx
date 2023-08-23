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
      </Navcontainer>
      <Outlet />
    </Container>
  );
};
