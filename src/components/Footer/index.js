import React from 'react';
import { theme, Container } from '@style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './fontAwesome';

const { colors } = theme;

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
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
  background: ${colors.blue};
  border: 8px solid ${colors.blue};
  border-radius: ${theme.borderRadiusBtn};
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
  background: ${colors.blue};
  padding: 0.3em 0.3em;
  border-radius: ${theme.borderRadiusBtn};
  border: 8px solid ${colors.blue};
  a {
    margin: 0 10px;
    color: ${colors.body};
    padding: 0.2em 0.1em;
    &:hover {
      color: ${colors.green};
    }
  }
`;

const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
  span {
    color: ${colors.body};
    font-family: ${theme.fontFamilyBtn};
    font-size: ${theme.footerSize};
    margin-left: 1rem;
  }
  a {
    color: ${colors.green};
  }
  a:hover {
    color: ${colors.orange};
  }
`;

const Footer = () => (
  <Wrapper>
    <Flex as={Container} id="footer" rel="canonical">
      <Details>
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
          aria-label="link to github repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
        <a
          href="https://instagram.com/mattysmith9"
          aria-label="link to instagram account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/matty.smith.146"
          aria-label="link to facebook account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mattysmith9"
          aria-label="link to linkedin profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
