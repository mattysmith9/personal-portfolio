import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default Header;
