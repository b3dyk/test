import { Link, Outlet } from 'react-router-dom';
import logo from '../../images/legiosoft.jpg';
import { Header, StyledContainer, StyledNavLink } from './Layout.styled';

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
          <aside>
            <StyledNavLink to="transactions">Transactions</StyledNavLink>
          </aside>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};
