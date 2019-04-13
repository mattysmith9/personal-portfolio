import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  display: flex;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  text-align: center;
  &:focus {
    outline: red;
  }
`;

export default Button;
