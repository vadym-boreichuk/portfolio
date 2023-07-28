import { Link, Outlet } from "react-router-dom";
import css from "./AppBar.module.css";

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
