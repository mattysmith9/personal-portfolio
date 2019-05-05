import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, mediaSizes } from '@style';
import { scrollNav } from '@data';
import styled from 'styled-components';

const { colors } = theme;

const ScrollWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 75px;
  color: ${colors.blue};
  ${mediaSizes.desktop`left: 25px;`};
  ${mediaSizes.tablet`display: none;`};
`;

const ScrollItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const ScrollItem = styled.li`
  &:last-of-type {
    margin-bottom: 5px;
  }
`;

const ScrollLink = styled(AnchorLink)`
  padding: 10px;
  color: ${colors.scroll};
  &:hover {
    color: ${colors.blue};
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Scroll = () => (
  <ScrollWrapper aria-label="scroll-navigation">
    <ScrollItemList>
      {scrollNav &&
        scrollNav.map(({ url, name }, i) => (
          <ScrollItem key={i}>
            <ScrollLink href={url} aria-label={name}>
              {name === 'header' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : name === 'about' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : name === 'projects' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : name === 'skills' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : name === 'contact' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : name === 'footer' ? (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              ) : (
                <FontAwesomeIcon icon={['fas', 'anchor']} />
              )}
            </ScrollLink>
          </ScrollItem>
        ))}
    </ScrollItemList>
  </ScrollWrapper>
);

export default Scroll;
