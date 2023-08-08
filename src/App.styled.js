import styled from "styled-components";
import img from "./images/back.jpg";

export const Wrapper = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
  }
  /* padding: 15px; */
  /* background: url(${img}); */
  /* background-size: cover;   */
  @media screen and (max-width: 1000px) {
    /* display: none;   */
  }
`;
