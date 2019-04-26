import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { mediaSizes } from '@style';

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  ${mediaSizes.tablet`padding: 0 25px;`};
`;

const Overlay = styled.div`
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
    <Wrapper aria-label="navigation">
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};

export default Header;
