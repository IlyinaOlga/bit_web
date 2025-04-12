import { Link } from "react-router";
import styled from "styled-components";
import { typography } from "./typography";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${typography.body_regular};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;