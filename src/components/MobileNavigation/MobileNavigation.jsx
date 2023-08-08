import { NavLink, Outlet } from "react-router-dom";
import { Navcontainer, StyledLink } from "./MobileNavigation.styled";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useRef } from "react";

export const MobileNavigation = ({ handleToggleMenu }) => {
  return (
    <Navcontainer>
      <StyledLink onClick={() => handleToggleMenu()} to="/about">
        About
      </StyledLink>
      <StyledLink onClick={() => handleToggleMenu()} to="/contact">
        contact
      </StyledLink>
      <StyledLink onClick={() => handleToggleMenu()} to="/education">
        education
      </StyledLink>
      <StyledLink onClick={() => handleToggleMenu()} to="/experience">
        experience
      </StyledLink>
      <StyledLink onClick={() => handleToggleMenu()} to="/projects">
        projects
      </StyledLink>
      <StyledLink onClick={() => handleToggleMenu()} to="/skils">
        skils
      </StyledLink>
    </Navcontainer>
  );
};
