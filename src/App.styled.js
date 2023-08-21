import styled from "styled-components";
// import img from "./images/back.jpg";
// import iam from "./images/iam.jpg";
// import sm from "./images/4x3.jpg";
import bg from "./images/8x5.jpg";

export const Wrapper = styled.div`
  display: flex;
  &:before {
    content: "";
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
    filter: blur(10px);
  }
`;
