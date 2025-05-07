import styled from "styled-components";
import { palette, typography } from "../../core/styles";

export const StyledMessageContainer = styled.div`
  ${typography.body_medium};
  color: ${palette.colors.white_main};
`;

export const StyledToaster = styled.div`

`;

export const StyledToasterContainer = styled.div`
  width: 344px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background-color: ${palette.colors.grey_dark};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;
