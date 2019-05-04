import { css } from 'styled-components';

const sizes = {
  large: 1440,
  biggerDesktop: 1200,
  desktop: 1000,
  tablet: 767,
  one: 600,
  iphonex: 480,
  phone: 376,
  small: 330,
};

const mediaSizes = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default mediaSizes;
