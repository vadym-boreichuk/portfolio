import { styled } from "styled-components";

export const Container = styled.div`
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
`;
