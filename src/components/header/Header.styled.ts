import styled from "styled-components";
import { palette, typography } from "../../core/styles";

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

export const LogoutBtn = styled.div`
  color: ${palette.colors.primary};
  ${typography.body_text_medium}
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
