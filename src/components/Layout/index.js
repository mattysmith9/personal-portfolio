import React from 'react';
import { Header } from '@comp';
import Scroll from '../Scroll';
import './fonts.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <Scroll />
    {children}
  </>
);

export default Layout;
