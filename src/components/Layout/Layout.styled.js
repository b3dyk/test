import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  display: flex;
  gap: 32px;
  padding: 20px;
  text-align: center;
`;

export const Header = styled.header`
  padding: 8px;
  border-bottom: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const SideMenu = styled.div`
  height: 25vh;
  background-color: #ececec;
  padding: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #020332;
  padding: 4px 32px;
  border-radius: 6px;

  :hover,
  :focus {
    background-color: #0d6efd;
    color: #fff;
  }

  &.active {
    background-color: #0d6efd;
    color: #fff;
  }
`;
