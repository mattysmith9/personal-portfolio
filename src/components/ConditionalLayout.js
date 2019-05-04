import React from 'react';
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Layout } from '@comp';
import { theme } from '@style';
import styled from 'styled-components';

const { colors } = theme;

const GoBack = styled(Link)`
  color: ${colors.blue};
  font-size: 3.2rem;
  font-weight: bold;
  &:hover {
    color: ${colors.green};
  }
`;

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <GoBack to={closeTo}>《</GoBack>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
);

export default ConditionalLayout;
