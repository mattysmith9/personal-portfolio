import React from 'react';
import { theme, Container } from '@style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './fontAwesome';

const { colors } = theme;

const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  padding: 10rem 0 2rem;
  @media (max-width: 1960px) {
    padding: 10rem 0 2rem;
  }
`;

const Flex = styled(Container)`
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
  justify-content: space-evenly;
  a {
    margin: 0 0.3rem;
    color: ${colors.blue};
    &:hover {
      color: ${colors.green};
    }
  }
`;

const Details = styled.div`
  font-family: ${theme.fontFamilyBtn};
  font-size: ${theme.footerSize};
  color: ${colors.blue};
  #name {
    color: ${colors.blue};
    font-family: ${theme.fontFamily};
    font-size: ${theme.footerSize};
    &:hover {
      color: ${colors.green};
    }
  }
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Flex id="footer" rel="canonical">
      <Details>
        <span>
          © {new Date().getFullYear()} | Site built by{' '}
          <a
            id="name"
            href="https://github.com/mattysmith9"
            rel="noopener noreferrer"
            target="_blank"
          >
            Matty Smith
          </a>
        </span>
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
        <a
          href="https://dev.to/mattysmith9"
          aria-label="link to Dev.to profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'dev']} size="3x" />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
