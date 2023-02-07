import { Link, Outlet } from 'react-router-dom';
import logo from '../../images/legiosoft.jpg';
import {
  Header,
  SideMenu,
  StyledContainer,
  StyledNavLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <StyledContainer>
          <Link to="/">
            <img src={logo} alt="logo" width="75" />
          </Link>
        </StyledContainer>
      </Header>
      <main>
        <StyledContainer>
          <SideMenu>
            <StyledNavLink to="transactions">Transactions</StyledNavLink>
          </SideMenu>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};
