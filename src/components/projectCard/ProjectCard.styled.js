import { styled } from "styled-components";

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0.5 px solid purple;
  border-radius: 10%;
  width: 80%;
  padding: 15px;
  margin: 0 auto;

  &:before {
    /* content: "";
    background: linear-gradient(to bottom, green, orange);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.05; */
    /* filter: blur(10px); */
  }
`;

export const Title = styled.h2``;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
  /* opacity: 0; */
  /* max-width: 100%; */
  /* height: 200px; */
  /* background: ("https://candle-shop-by-ninjas-team.vercel.app/"); */
`;

export const Description = styled.div`
  text-align: center;
  font-size: 25px;
`;
