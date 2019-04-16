import React from 'react';
import styled from 'styled-components';

export const ToTop = styled.a`
  .back-to-top {
    position: fixed;
    right: var(--space-md);
    bottom: var(--space-md);
    padding: var(--space-xs);
    z-index: var(--zindex-fixed-element);
    border-radius: 0.25em;
    background-color: alpha(var(--color-contrast-higher), 0.9);
    transition: 0.3s;

    &:hover {
      background-color: var(--color-contrast-higher);
    }

    .icon {
      display: block;
      color: var(--color-bg);
      width: var(--btt-icon-size);
      height: var(--btt-icon-size);
    }
  }
`;
