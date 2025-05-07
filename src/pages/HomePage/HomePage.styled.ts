import styled from "styled-components";

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 32px;
  gap: 24px;

  & div {
    cursor: auto;
  }
`;

export const ConferenceGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  gap: 24px;
`;

