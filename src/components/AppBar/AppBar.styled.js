import styled from "styled-components";

export const Navcontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  justify-content: space-evenly;
  height: 100%;
  padding-top: 20px;
  @media (max-width: 999px) {
    height: 60vh;
  }
`;

export const Item = styled.li`
  margin-bottom: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  justify-content: space-evenly;
  top: 0;
  @media (max-width: 999px) {
    width: 60px;
  }
`;
