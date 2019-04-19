import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import { ConditionalLayout, SEO } from '@comp';
import styled from 'styled-components';
import { theme } from '@style';
const { colors } = theme;

const ModalWrapper = styled.div`
  background: ${colors.grey};
  box-shadow: ${theme.boxShadow};
  font-family: ${theme.fontFamilyBtn};
  border-radius: ${theme.borderRadiusCard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  h2 {
    color: ${colors.green};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  color: ${colors.body};
  line-height: 2;
  padding-bottom: 3rem;
`;

const ProjectDescription = () => {
  return (
    <ConditionalLayout>
      <ModalWrapper>
        <SEO
          title="More Details"
          description="further explanation of repositories"
        />
        <TextWrapper>
          <h2>More details</h2>
          Eos ea veniam deleniti possimus tenetur itaque doloremque eveniet. Et
          voluptatibus velit voluptatem facere. Provident sint similique
          architecto consequuntur nulla ut rerum nesciunt. Nihil sint at sed
          tempora earum laudantium culpa et. Aperiam hic deleniti delectus fugit
          occaecati sunt aut dolore. Culpa labore aut non saepe rem sed ea
          doloribus. Cum ipsum quaerat repudiandae dicta quasi sint dicta aut.
          Eos ea veniam deleniti possimus tenetur itaque doloremque eveniet. Et
          voluptatibus velit voluptatem facere. Provident sint similique
          architecto consequuntur nulla ut rerum nesciunt. Nihil sint at sed
          tempora earum laudantium culpa et. Aperiam hic deleniti delectus fugit
        </TextWrapper>
        <Link to="/#about/" />
      </ModalWrapper>
    </ConditionalLayout>
  );
};

export default ProjectDescription;
