import styled from "styled-components";
import { palette, typography } from "../../core/styles";
import { Button } from "@mui/material";

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
  color: ${palette.colors.primary};
  ${typography.body_medium}
  display: flex;
  gap: 8px;
  align-items: center;
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
`;