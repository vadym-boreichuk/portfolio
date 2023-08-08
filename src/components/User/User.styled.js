import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1001px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
