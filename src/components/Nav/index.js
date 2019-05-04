import React, { useState } from 'react';
import { mediaSizes } from '@style';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding-top: 0.5rem;
  margin: 0 auto;
  align-content: center;
  width: 100%;
  ${mediaSizes.tablet`padding: 0 25px;`};
`;

const SidebarOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;
  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;

const Header = () => {
  const [sidebar, toggle] = useState(false);
  return (
    <HeaderWrapper id="header" aria-label="navigation">
      <Navbar />
      <SidebarOverlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </HeaderWrapper>
  );
};

export default Header;
