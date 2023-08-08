import styled from "styled-components";

export const Navcontainer = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 15px;
    gap: 15px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    width: 20vw;
  }
  @media screen and (max-width: 1000px) {
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MobileContainer = styled.div`
  @media screen and (min-width: 1001px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding-right: 10px;
    padding-left: 10px;
  }
`;
