import React from 'react';
import { graphql } from 'gatsby';
import { theme } from '@style';
import styled from 'styled-components';
const { colors } = theme;

const FileWrapper = styled.div`
  background: ${colors.body};
  font-family: ${theme.fontFamilyBtn};
  display: flex;
  justify-content: center;
  position: relative;
  h2 {
    color: ${colors.blue};
    font-size: 2.5rem;
    text-align: center;
  }
  th {
    color: ${colors.green};
    font-family: ${theme.fontFamilyBtn};
  }
  td {
    color: ${colors.grey};
    font-family: ${theme.fontFamilyBtn};
  }
`;

export default ({ data }) => {
  console.log(data);
  return (
    <FileWrapper>
      <div>
        <h2>Site Files</h2>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FileWrapper>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
