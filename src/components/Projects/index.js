import React from 'react';
import { graphql } from 'gatsby';
import { StaticQuery } from 'gatsby';
import { Card, theme } from '@style';
import styled from 'styled-components';
const { colors } = theme;

const Wrapper = styled.div`
  min-height: 140vh;
  max-width: 1280px;
  margin: 0 auto;
  width: 80%;
  text-align: center;
  h2 {
    color: ${colors.blue};
    padding-top: 1rem;
  }
  
`;

const Grid = styled.div`
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

const Item = styled.div`
  height: 100%;
  overflow: hidden;
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadiusCard};
  background: ${colors.body};
  h4 {
    color: ${colors.green};
    font-weight: bold;
  }
  p {
    color: ${colors.grey};
    font-family: ${theme.fontFamilyBtn};
  }
`;

const Content = styled.div`
  padding: 1rem 0;
`;

export const Projects = () => (
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
      <Wrapper id="projects" rel="canonical">
        <h2>Recent Repositories</h2>
        <Grid>
          {edges.map(({ node }) => (
            <Item
              key={node.id}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    )}
  />
);