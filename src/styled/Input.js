import styled from 'styled-components';
import theme from './theme';
const { colors } = theme;

const Input = styled.input`
  display: flex;
  width: 50%;
  margin: 0 auto;
  background: ${colors.body};
  box-sizing: border-box;
  border: 2px solid ${colors.blue};
  padding: 0.8rem 1rem;
  border-radius: ${theme.borderRadiusCard};
  margin-bottom: 0.5rem;
  transition: 0.3s;
  ${({ error }) =>
    error &&
    `
		border-color: ${colors.orange};
	`}
  &::placeholder {
    color: ${colors.grey};
    font-family: ${theme.fontFamily};
  }
`;

export default Input;
