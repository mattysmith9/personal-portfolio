import React from 'react';
import styled from 'styled-components';
import Scroll from '../Scroll';
import './fonts.css';

const HtmlBackground = styled.div`
  background: transparent;
  .HtmlBackground::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Layout = ({ children }) => (
  <>
    <HtmlBackground />
    <Scroll />
    {children}
  </>
);

export default Layout;
