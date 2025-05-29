import { Tab } from "@mui/material";
import styled from "styled-components";
import { palette, typography } from "../../core/styles";
import { TabList } from "@mui/lab";

export const Section = styled.section`
  height: 100%;
`;

export const StyledTabList = styled(TabList)`
    & .MuiTabs-indicator {
    background-color: ${palette.colors.primary};
  }
`;

export const StyledTab = styled(Tab)`
  &.MuiTab-root {
    text-transform: none;
    ${typography.body_regular};
    color: ${palette.colors.grey_dark};
  }

  &.MuiTab-root.Mui-selected {
    color: ${palette.colors.primary};
  }
`;