import React from 'react';
import { Container } from '../../styled/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontAwesome';
import styled from 'styled-components';
import theme from '../../styled/theme';
const { colors } = theme;

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: ${colors.body};
  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 5px;
    color: ${colors.blue};
  }
`;

const Details = styled.div`
  margin-top: 2rem;
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
  span {
    color: ${colors.orange};
    font-family: ${theme.fontFamily};
    font-size: ${theme.footerSize};
  }
  h2 {
    color: ${colors.blue};
  }
  a {
    color: ${colors.orange};
  }
  a:hover {
    color: ${colors.blue};
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container} id="footer" rel="canonical">
      <Details>
        <h2>Burlington, Vermont</h2>
        <div>
          <span>
            © {new Date().getFullYear()} | Made with{' '}
            <span aria-label="love" role="img">
              🙏
            </span>{' '}
            by{' '}
            <a
              href="https://github.com/mattysmith9"
              rel="noopener noreferrer"
              target="_blank"
            >
              Matty Smith
            </a>
          </span>
        </div>
      </Details>
      <Links>
        <a
          href="https://github.com/mattysmith9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
        <a
          href="https://instagram.com/mattysmith9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/matty.smith.146"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mattysmith9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
