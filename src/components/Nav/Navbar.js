import React from 'react';
import { Link } from 'gatsby';
import { Container } from '@style';
import NavLinks from './NavLinks';
import MaLogo from '../icons/logo';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const LogoL = styled(Link)`
  background: transparent;
  height: 6rem;
`;

const Navbar = () => (
  <Wrapper>
    <Logo>
      <LogoL to="/" aria-label="Home">
        <MaLogo />
      </LogoL>
    </Logo>
    <NavLinks desktop />
  </Wrapper>
);

export default Navbar;
