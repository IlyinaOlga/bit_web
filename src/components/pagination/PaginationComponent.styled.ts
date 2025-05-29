import styled from "styled-components";
import { palette } from "../../core/styles";

export const PaginationContainer = styled.div`
  & ul {
    justify-content: center;
  }
  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${palette.colors.primary};
  }
`;