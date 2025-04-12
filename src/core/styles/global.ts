import { Link } from "react-router";
import styled from "styled-components";
import { typography } from "./typography";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${typography.body_text_regular};
`
