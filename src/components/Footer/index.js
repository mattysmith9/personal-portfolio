import React from 'react';
import { Container } from '../../styled/Container';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #eaf2f4;
  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Details = styled.div`
  color: #282e56;
  margin-top: 2rem;
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
  span {
    color: #0d4f9d;
  }
  h2 {
    color: #282e56;
  }
  a {
    color: #ff5e5b;
  }
  a:hover {
    color: #0d4f9d;
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container} id="footer" rel="canonical">
      <Details>
        <h2>Thanks for visiting my page!</h2>
        <div>
          <span>
            © {new Date().getFullYear()} | Made with{' '}
            <span aria-label="love" role="img">
              🙏
            </span>{' '}
            by{' '}
            <a
              href="https://github.com/mattysmith9"
              rel="noopener noreferrer"
              target="_blank"
            >
              Matty Smith
            </a>
          </span>
        </div>
      </Details>
    </Flex>
  </Wrapper>
);
