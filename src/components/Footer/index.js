import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, Container, mediaSizes } from '@style';
import { socialLinks } from '@data';
import styled from 'styled-components';
import './fontAwesome';

const { colors } = theme;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 70px;
  @media (max-width: 1960px) {
    padding: 10rem 0 2rem;
  }
`;

const FooterFlex = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  border-bottom: 2px solid ${colors.modal};

  ${mediaSizes.tablet`display: block;`};
`;

const SocialList = styled.ul`
  display: inline-flex;
  list-style: none;
  margin-top: 1rem;
  ${mediaSizes.tablet`display: block;`};
`;

const IconLinks = styled.a`
  padding: 6px;
  text-decoration: none;
  color: ${colors.modal};
  &:hover {
    color: ${colors.scroll};
  }
`;

const FooterDetails = styled.div`
  font-size: ${theme.footerSize};
  color: ${colors.modal};
  #name {
    margin-top: 2.4rem;
    display: inline-flex;
    color: ${colors.modal};
    font-size: ${theme.footerSize};
    &:hover {
      color: ${colors.orange};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterFlex id="footer" rel="canonical" aria-label="footer-social-links">
      <FooterDetails>
        <span>
          © {new Date().getFullYear()} | Site built by{' '}
          <a
            id="name"
            href="https://www.github.com/mattysmith9/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github-profile"
          >
            Matty Smith
          </a>
        </span>
      </FooterDetails>
      <SocialList>
        {socialLinks &&
          socialLinks.map(({ name, url }, i) => (
            <li key={i}>
              <IconLinks
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === 'Linkedin' ? (
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
                ) : name === 'Dev' ? (
                  <FontAwesomeIcon icon={['fab', 'dev']} size="3x" />
                ) : name === 'Facebook' ? (
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" />
                ) : name === 'Github' ? (
                  <FontAwesomeIcon icon={['fab', 'github-square']} size="3x" />
                ) : name === 'Instagram' ? (
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
                ) : (
                  <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
                )}
              </IconLinks>
            </li>
          ))}
      </SocialList>
    </FooterFlex>
  </FooterWrapper>
);

export default Footer;
