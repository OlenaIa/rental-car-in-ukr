import styled from 'styled-components';

export const Section = styled.section`
    margin: 0 auto;
    width: 100%;
`;

export const Container = styled.div`
    max-width: 375px;
    margin: 0 auto;
    width: 100%;
    padding: 0px 30px;
    margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 50px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0px 128px;
    margin-bottom: 50px;
  }
`;
