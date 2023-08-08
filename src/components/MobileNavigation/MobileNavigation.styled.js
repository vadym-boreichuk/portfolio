import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

export const Navcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  /* position: relative;
  top: 35px;
  right: 30px; */
  /* transform: translateY(30%); */
  /* transition-property: transform; */
  /* transition-property: background-color;
  transition-timing-function: linear;
  transition-delay: 500ms; */
  transition: background-color 500ms linear, transform 500ms ease-in-out 500ms;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
