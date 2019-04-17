import React from 'react';
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Layout, theme } from '@style';
import styled from 'styled-components';

const { colors } = theme;

const GoBack = styled(Link)`
  color: ${colors.orange};
  font-size: 3rem;
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
