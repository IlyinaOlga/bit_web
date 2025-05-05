import styled from "styled-components";
import { ContainedButton, Container, palette, typography } from "../../core/styles";

interface TeachersListProps {
  isexpanded: string;
  heigth: string;
}

export const ContainerPage = styled(Container)`
  padding-top: 24px;

  & button {
    text-transform: none !important;
  }
`;

export const TopicGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const Gap48 = styled.div`
  display: flex;
  gap: 48px;
`;

export const ConditionContainer = styled.div`
  background: ${palette.colors.surface_light};
  border-radius: 28px;
  padding: 48px;
  width: 50%;
`;

export const ConditionBody = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ConditionList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & li {
    display: flex;
    gap: 8px;

    & a {
      text-decoration: none;
      color: ${palette.colors.primary};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  & button {
    width: 50%;
    border-radius: 12px !important;
    text-transform: none !important;
    height: 64px;
  }
`;

export const ParticipantButton = styled(ContainedButton)`
   & svg {
    margin-right: 6px;
   }
`;

export const ListenerButton = styled(ContainedButton)`
  &.MuiButton-contained {
    background-color: ${palette.colors.surface};
    color: ${palette.colors.black_main};
  }
  &.MuiButton-contained:hover {
    background-color: ${palette.colors.surface};
    color: ${palette.colors.black_main};
  }
`;

export const TextWrap = styled.div`
  margin-top: 16px;
  max-width: 75%;

  & p {
    ${typography.body_regular};
  }
`;

export const TeachersList = styled.div<TeachersListProps>`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  ${typography.body_regular};
  max-height: ${props => props.isexpanded === "true" ? props.heigth : '180px'};
  overflow: hidden;
  transition: max-height 0.5s ease;
`;

export const CardGroup = styled.div`
  display: flex;
  gap: 24px;
`;

export const ConfCard = styled.div`
  width: 50%;
  border-radius: 28px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${palette.colors.grey_light};
  ${typography.body_regular};
`;