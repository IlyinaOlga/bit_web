import styled from "styled-components";
import { palette, TextButton } from "../../core/styles";

export const StyledButton = styled(TextButton)`
  color: ${palette.colors.primary};
  & svg {
    margin-right: 8px;
  }
`