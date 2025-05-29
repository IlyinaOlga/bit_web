import styled from "styled-components";
import { palette, typography } from "../../core/styles";
import { Button, colors } from "@mui/material";
import { $ } from "react-router/dist/development/fog-of-war-oa9CGk10";

export const HeaderContainer = styled.h1`
  padding: 16px 24px;
  background-color: #F4F2FE;
`;

export const HeaderTitle = styled.h3`
  ${typography.title_medium};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const GroupGap12 = styled(Group)`
  gap: 12px;
`;

export const LogoutBtn = styled.div`
  padding: 10px 12px;
  color: ${palette.colors.primary};
  ${typography.body_medium}
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border-radius: 999px;

  &:hover {
    color: ${palette.colors.default};
  }

  &:hover path {
    fill: ${palette.colors.default};
  }
`;

export const LoginBtn = styled(Button)`
  & svg {
    margin-right: 8px;
  }
  &.MuiButton-root {
    width: 128px;
    padding: 10px 16px;
    background-color: transparent;
    border-radius: 999px;
    border: 1px solid ${palette.colors.grey_light};
    ${typography.body_regular};
    color: ${palette.colors.primary};
    text-transform: capitalize;
}
`;

export const RegistrationBtn = styled(Button)`
  &.MuiButton-root {
    padding: 10px 16px;
    border-radius: 999px;
    color: ${palette.colors.white_main};
    background-color: ${palette.colors.primary};
    text-transform: capitalize;
    ${typography.body_regular};
  }

  &.MuiButton-root:hover {
    background-color: #213fc4;
  }
`;

export const GroupGap8 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const User = styled.div`
  color: ${palette.colors.grey};
  ${typography.body_regular}`;
;

export const ArticleBtn = styled.div`
  ${typography.body_regular};
  padding: 8px 12px;
  border-radius: 999px;
  background-color: ${palette.colors.lilac};
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 24px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;