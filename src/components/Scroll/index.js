import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { theme, mediaSizes } from '@style';
import { scrollNav } from '@data';
const { colors } = theme;

const MoreWrapper = styled.div`
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
  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin-left: 9px;
    background-color: ${colors.blue};
  }
`;

const ScrollItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const MorelLink = styled(AnchorLink)`
  padding: 10px;
  color: ${colors.modal};
  &:hover {
    color: ${colors.yellow};
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

const Scroll = () => (
  <MoreWrapper>
    <ScrollItemList>
      {scrollNav &&
        scrollNav.map(({ url, name }, i) => (
          <ScrollItem key={i}>
            <MorelLink href={url} aria-label={name}>
              {name === 'header' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : name === 'about' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : name === 'projects' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : name === 'skills' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : name === 'contact' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : name === 'footer' ? (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              ) : (
                <FontAwesomeIcon icon={['fas', 'circle']} size="2x" />
              )}
            </MorelLink>
          </ScrollItem>
        ))}
    </ScrollItemList>
  </MoreWrapper>
);

export default Scroll;
