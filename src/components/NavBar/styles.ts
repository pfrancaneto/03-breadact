import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 60px;
  background-color: #089;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  color: white;

  &.active {
    border-bottom-width: 1px;
    border-bottom-color: white;
    border-bottom-style: solid;
  }
`;