import styled from 'styled-components';

export const ModalCarWrap = styled.div`
    margin: 0 auto;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ModalCard = styled.div`
    display: flex;
    width: 100%;
    height: 604px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ModalImgWrap = styled.div`
    position: relative;
    display: block;
    overflow: hidden;  
    width: 100%;
    height: 248px;
    object-fit: cover;
    border-radius: 14px;
    background: #F3F3F2;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ModalImg = styled.img`
    position: absolute;
    top: -25px;
    right: 0;
    width: 461px;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ModalDescriptionWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 24px;
  @media screen and (min-width: 768px) {  
  }

  @media screen and (min-width: 1440px) { 
  }
`;

export const Block = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

  @media screen and (min-width: 768px) {  
  }

  @media screen and (min-width: 1440px) { 
  }
`;

export const ModalTitleH3 = styled.h3`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
    }
`;

export const Description = styled.p`
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.42;
    height: 40px;
    overflow-y: scroll;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
    }
`;

export const ModalTitleH4 = styled.h4`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
    }
`;

export const ConditionsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
color: var(--color-text-conditions);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ConditionsItem = styled.li`
padding: 7px 14px;
border-radius: 35px;
background: var(--color-back-conditions);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;