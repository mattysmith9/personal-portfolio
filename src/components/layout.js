import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import StyledBackgroundSection from '../components';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => (
      <StyledBackgroundSection>
        <div
          style={{
            height: `100vh`,
            width: `100%`,
            display: `flex`,
            placeContent: `center`,
          }}
        >
          {children}
        </div>
      </StyledBackgroundSection>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
