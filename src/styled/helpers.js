import { css } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const helpers = {
  mediumButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 2px solid ${colors.blue};
    border-radius: ${theme.borderRadiusCard};
    padding: 12px 17px;
    font-size: 1rem;
    font-family: ${theme.fontFamilyBtn};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.green};
      color: ${colors.body};
    }
  `,

  largeButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 2px solid ${colors.blue};
    border-radius: ${theme.borderRadiusCard};
    padding: 15px 20px;
    font-size: 1rem;
    font-family: ${theme.fontFamilyBtn};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover {
      box-shadow: ${theme.boxShadow};
      color: ${colors.orange};
    }
  `,
};

export default helpers;
