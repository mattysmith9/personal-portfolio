import React from 'react';
import { Header, Scroll } from '@comp';
import './fonts.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <Scroll />
    {children}
  </>
);

export default Layout;
