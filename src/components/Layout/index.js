import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import './fonts.css';
const { colors } = theme;

const Backround = styled.div`
  background-color: ${colors.body};
`;

const Layout = ({ children }) => (
  <>
    <Backround />
    {children}
  </>
);

export default Layout;
