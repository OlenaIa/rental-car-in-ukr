import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${props => props.$bottom || '20px'};
  margin-top: ${props => props.$top || '0px'};

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${props => props.$bottom || '30px'};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
    margin-bottom: ${props => props.$bottom || '50px'};
  }
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const WelcomeWrap = styled.div`
  display: flex;
  height: 100vh;
  margin-right: auto;
  padding: 15px 0px;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  
  @media screen and (min-width: 768px) {
    font-size: 30px;
    padding: 20px 0px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const Welcome = styled.div`
  display: block;
  height: 149px;
  padding: 25px;
  color: var(--color-text-main);
  background-color: rgba(255,255,255,0.5);
  border-radius: 30px;
  
  @media screen and (min-width: 768px) {
    border-radius: 40px;
    height: 150px;
    padding: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px;
    height: 200px;
  }
`;
