import React from 'react';
import NavLinks from './NavLinks';
import styled from 'styled-components';
import { theme } from '@style';
const { colors } = theme;

const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background: ${colors.body};
  color: ${colors.body};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  ${({ active }) =>
    active &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;
			@media (max-width: 960px) {
				width: 40%;
			}
			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;

const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavLinks />
  </Wrapper>
);

export default Sidebar;
