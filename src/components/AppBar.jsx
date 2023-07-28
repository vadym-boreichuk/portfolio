import { Link, Outlet } from "react-router-dom";
import css from "./AppBar.module.css";
import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/Contact";
import EducationPage from "../pages/Education";
import ExperiencePage from "../pages/Experience";
import ProjectsPage from "../pages/Projects";
import SkilsPage from "../pages/Skils";

export const AppBar = () => {
  return (
    <>
      <nav className={css.navcontainer}>
        <div>HOME</div>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <Link to="/education">education</Link>
        <Link to="/experience">experience</Link>
        <Link to="/projects">projects</Link>
        <Link to="/skils">skils</Link>
        <Outlet />
      </nav>
    </>
  );
};
