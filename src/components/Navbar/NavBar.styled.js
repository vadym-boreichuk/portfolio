import { styled } from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* justify-content: center; */
  width: 100%;
  /* justify-content: space-between;  */
  /* height: 70vh; */
  /* flex-direction: column; */
  margin-left: 100px;
  /* margin-top: 30px; */
  /* padding-right: 30px; */
  /* align-items: flex-end; */
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
