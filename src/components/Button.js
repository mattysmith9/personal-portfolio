import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../styled/theme';
const { colors } = theme;

const Button = styled(Link)`
  cursor: pointer;
  font-family: ${theme.fontFamily};
  border-radius: ${theme.borderRadiusBtn};
  padding: 1em 1.5em;
  vertical-align: middle;
  line-height: 1;
  border: 3px solid ${colors.green};
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${colors.green};
  box-shadow: ${theme.boxShadow};
  &:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    border: 2px solid ${colors.blue};
  }
`;

export default Button;
