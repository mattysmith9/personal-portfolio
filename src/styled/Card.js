import styled from 'styled-components';
import theme from './theme';

const { colors } = theme;

const Card = styled.div`
  padding: 1rem;
  background: ${colors.items};
  height: 100%;
  border: 2px solid ${colors.blue};
  border-radius: ${theme.borderRadiusCard};
`;

export default Card;
