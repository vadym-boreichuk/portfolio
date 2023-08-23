import { styled } from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  margin-left: 100px;

  @media (max-width: 999px) {
    width: 60px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 30px;
  width: 100%;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  top: 0;
  position: fixed;
  /* background-color: blue;
  opacity: 0.5;
  filter: blur(0.6); */
`;

export const StyledLink = styled.button`
  position: relative;
  display: inline-block;
  font-size: 24px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 50%;
    background-color: black; /* Колір підкреслення */
    transform: scaleX(0); /* Початковий стан - немає підкреслення */
    transform-origin: center;
    transition: transform 0.3s ease-in-out; /* Транзиція анімації */
  }
  /* &:focus::before {
    transform: scaleX(1);
  } */
  &:hover::before {
    transform: scaleX(1); /* Збільшуємо масштаб підкреслення при наведенні */
  }
`;
