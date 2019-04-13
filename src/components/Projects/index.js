import React from 'react';
import { graphql } from 'gatsby';
import { StaticQuery } from 'gatsby';
import { Card } from '../../styled/Card';
import { Container } from '../../styled/Container';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  h4 {
    color: #2aa1af;
  }
  p {
    color: #282e56;
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
      <Wrapper as={Container} id="projects" rel="canonical">
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
