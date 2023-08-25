import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 0.1px solid black;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* justify-content: space-between; */

  margin: 0 auto; /* Для центрування контейнера */
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`;
