import React from 'react';
import { Container } from '@style';
import { Link } from 'gatsby';
import NavLinks from './NavLinks';
import MaLogo from '../icons/logo';
import styled from 'styled-components';

const NavWrapper = styled(Container)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
`;

const LogoLinks = styled(Link)`
  background: transparent;
  height: 6rem;
`;

const Navbar = () => (
  <NavWrapper>
    <Logo>
      <LogoLinks to="/" aria-label="Home">
        <MaLogo />
      </LogoLinks>
    </Logo>
    <NavLinks desktop />
  </NavWrapper>
);

export default Navbar;
