import styled from "styled-components";
import { palette, typography } from "../../core/styles";

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;

  & p {
    ${typography.body_regular};
  }
`;

export const DirectionsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  grid-column-gap: 48px;
  grid-row-gap: 24px;
  margin-top: 32px;
`;

export const DirectionItem = styled.div`
  display: flex;
  ${typography.body_regular};
  align-items: center;
`;

export const Order = styled.div`
  background-color: ${palette.colors.surface_light};
  border-radius: 32px;
  padding: 12px 8px;
  ${typography.body_regular};
  font-weight: 700;
  margin-right: 8px;
  width: 32px;
  display: flex;
  justify-content: center;
`;

export const TeachersGroup = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const TeacherItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TeacherName = styled.div`
  ${typography.title_medium};
  padding-top: 8px;
`;

export const TeacherPosition = styled.div`
  padding-bottom: 16px;
  ${typography.body_regular};
`;