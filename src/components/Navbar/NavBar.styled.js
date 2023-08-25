import { styled } from "styled-components";

export const Container = styled.div`
  /* position: relative; */
  display: block;
  justify-content: center;
  /* max-width: 1900px; */
  /* margin: 0 auto;/ */
  margin-left: 100px;
  padding: 0 30px;
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
