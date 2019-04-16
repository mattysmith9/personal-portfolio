import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import ConditionalLayout from '../components/ConditionalLayout';
import { Container } from '../styled/Container';
import SEO from '../components/seo';
import styled from 'styled-components';
import theme from '../styled/theme';
const { colors } = theme;

const ModalWrapper = styled(Container)`
  background: ${colors.blue};
  box-shadow: ${theme.boxShadow};
  color: ${colors.body};
  font-family: ${theme.fontFamily};
  padding: 1 1rem;
`;

const Button = styled(Link)`
  cursor: pointer;
  font-family: ${theme.fontFamily};
  border-radius: ${theme.borderRadiusBtn};
  padding: 1em 1.5em;
  vertical-align: middle;
  line-height: 1;
  border: 1px solid ${colors.green};
  background: ${colors.body};
  box-shadow: ${theme.boxShadow};
  &:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    border: 2px solid ${colors.blue};
  }
  span {
    color: ${colors.blue};
    font-size: 1.2rem;
  }
`;

const ProjectDescription = () => (
  <ConditionalLayout>
    <ModalWrapper>
      <SEO title="Page two" />
      <h1>More details</h1>
      <p>
        Eos ea veniam deleniti possimus tenetur itaque doloremque eveniet. Et
        voluptatibus velit voluptatem facere. Provident sint similique
        architecto consequuntur nulla ut rerum nesciunt.
      </p>
      <p>
        Nihil sint at sed tempora earum laudantium culpa et. Aperiam hic
        deleniti delectus fugit occaecati sunt aut dolore. Culpa labore aut non
        saepe rem sed ea doloribus. Cum ipsum quaerat repudiandae dicta quasi
        sint dicta aut.
      </p>
      <Button to="/homepage/">
        <span>previous</span>
      </Button>
    </ModalWrapper>
  </ConditionalLayout>
);

export default ProjectDescription;
