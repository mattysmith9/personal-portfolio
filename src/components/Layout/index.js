import React from 'react';
import styled from 'styled-components';
import './fonts.css';

const HtmlBackground = styled.div`
  background: transparent;
`;

const Layout = ({ children }) => (
  <>
    <HtmlBackground />
    {children}
  </>
);

export default Layout;
