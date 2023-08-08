import { Link, Outlet } from "react-router-dom";
import { User } from "../User/User";
import { Container, MobileContainer, Navcontainer } from "./AppBar.styled";
import { AppMobileBar } from "../AppMobileBar/AppMobileBar";

export const AppBar = () => {
  return (
    <Container>
      <MobileContainer>
        <AppMobileBar />
      </MobileContainer>
      <User />
      <Navcontainer>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <Link to="/education">education</Link>
        <Link to="/experience">experience</Link>
        <Link to="/projects">projects</Link>
        <Link to="/skils">skils</Link>
        <Outlet />
      </Navcontainer>
    </Container>
  );
};
