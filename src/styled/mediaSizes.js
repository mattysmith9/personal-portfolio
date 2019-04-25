import { css } from 'styled-components';

const sizes = {
  large: 1440,
  biggerDesktop: 1200,
  desktop: 1000,
  tablet: 767,
  thone: 600,
  phablet: 480,
  phone: 376,
  small: 330,
};

const mediaSizes = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default mediaSizes;
