import styled from 'styled-components';
import theme from './theme';
const { colors } = theme;

const Input = styled.input`
  width: 50%;
  box-sizing: border-box;
  border: 2px solid ${colors.grey};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  ${({ error }) =>
    error &&
    `
		border-color: ${colors.orange};
	`}
  &::placeholder {
    color: ${colors.grey};
  }
`;

export default Input;
