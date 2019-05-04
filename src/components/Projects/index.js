import React from 'react';
import { graphql } from 'gatsby';
import { StaticQuery } from 'gatsby';
import { Card, theme } from '@style';
import styled from 'styled-components';

const { colors } = theme;

const ProjectsWrapper = styled.div`
  min-height: 90vh;
  max-width: 1280px;
  margin: 0 auto;
  width: 82%;
  text-align: center;
  h2 {
    color: ${colors.orange};
    padding-top: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${theme.gridTemplateColumnsDesk};
  grid-template-rows: ${theme.gridTemplateRows};
  gap: ${theme.gap};
  @media (max-width: 960px) {
    grid-template-columns: ${theme.gridTemplateColumnsMob9};
  }
  @media (max-width: 680px) {
    grid-template-columns: ${theme.gridTemplateColumnsMob6};
  }
`;

const ProjectItem = styled.div`
  height: 100%;
  overflow: hidden;
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadiusCard};
  h4 {
    color: ${colors.items};
    font-family: ${theme.fontFamily};
    background: ${colors.blue};
    border-radius: ${theme.borderRadiusCard};
    text-transform: capitalize;
  }
  p {
    color: ${colors.grey};
    font-family: ${theme.fontFamily};
  }
`;

const ProjectContent = styled.div`
  padding: 0.5rem 0;
`;

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        github {
          repositoryOwner(login: "mattysmith9") {
            repositories(
              first: 6
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `}
    render={({
      github: {
        repositoryOwner: {
          repositories: { edges },
        },
      },
    }) => (
      <ProjectsWrapper id="projects" rel="canonical" aria-label="projects">
        <h2>Recent Repositories</h2>
        <ProjectsGrid>
          {edges.map(({ node }) => (
            <ProjectItem
              key={node.id}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <ProjectContent>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </ProjectContent>
              </Card>
            </ProjectItem>
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>
    )}
  />
);

export default Projects;
