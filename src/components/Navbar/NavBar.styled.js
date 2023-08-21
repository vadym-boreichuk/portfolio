import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: space-between; /* Рівномірно розтягнути контент по вертикалі */
  height: 70vh;
  flex-direction: column;
  margin-left: auto;
  margin-top: 30px;
  padding-right: 30px;
  /* align-items: flex-end; */
`;
