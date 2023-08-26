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

export const CustomDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "blue" : "gray")};
  border-radius: 2px;
  margin: 0 5px;
`;

export const Custom = styled.div`
  height: 8px;
  width: 14px;
  background-color: #e5e7e9;
  border-radius: 4px;
  position: relative;
`;

export const Loading = styled.div`
  height: 8px;
  /* animation: scale(1) 1s ease-in; */
  background-color: black;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
`;
