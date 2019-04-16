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
      <Link to="/#skills/" />
    </ModalWrapper>
  </ConditionalLayout>
);

export default ProjectDescription;
