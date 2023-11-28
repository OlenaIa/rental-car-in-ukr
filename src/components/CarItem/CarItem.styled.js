import styled from 'styled-components';

export const CarItemStyle = styled.li`
    display: flex;
    width: 100%;
        width: 150px;

    flex-basis: calc((100% - 1*16px) / 2);
    /* height: 426px; */
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    gap: 16px;
    /* flex-shrink: 0; */

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2*20px) / 3);
    gap: 20px;
       width: 209px;

  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 426px;
    gap: 28px;
    flex-basis: calc((100% - 3*29px) / 4);
  }
`;

export const CarCard = styled.div`
    display: flex;
    width: 100%;
    /* height: 426px; */
    flex-direction: column;
    align-items: flex-start;
        justify-content: space-between;

    gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    height: 354px;
    gap: 14px;
  }
`;

export const ImgWrap = styled.div`
    position: relative;
    display: block;
    overflow: hidden;  
    width: 100%;
    /* width: 150px; */
    height: 146px;
    object-fit: cover;
    border-radius: 14px;

  @media screen and (min-width: 768px) {
   /* width: 209px; */
    height: 204px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 274px; */
    height: 268px;
  }
`;

export const Img = styled.img`
    position: absolute;
    top: 0;
    right: -37px;
    height: 146px;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;

  @media screen and (min-width: 768px) {
    height: 204px;
    right: -50px;
  }

  @media screen and (min-width: 1440px) {
    right: -65px;
    height: 268px;
  }
`;

export const Heart = styled.svg`
position: absolute;
top: 14px;
right: 14px;
  /* width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'}; */
  fill: ${(props) => props.fill || 'none'};
  stroke: ${(props) => props.stroke || 'var(--color-text-button-and-back)'};
  display: inline-block;
  width: 18px;
  height: 18px;
  /* transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  } */
`;

export const DescriptionWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;

  @media screen and (min-width: 768px) {
  
  }

  @media screen and (min-width: 1440px) {
  
  }
`;

export const TitleWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
font-size: 12px;
font-weight: 500;
align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;

  }

  @media screen and (min-width: 1440px) {
  font-size: 16px;
  }
`;

export const TitleH3 = styled.h3`
font-size: inherit;
font-weight: inherit;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Span = styled.span`
color: var(--color-text-loadmore);

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
  }
`;
export const DescriptListWrap = styled.div`
display: flex;
height: 36px;
gap: 4px;
flex-direction: column;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const DescriptList = styled.ul`
display: flex;
height: 18px;

column-gap: 6px;
color: var(--color-text-second);
flex-wrap: nowrap;
overflow: hidden;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const DescriptItem = styled.li`
display: flex;

/* color: var(--color-text-second); */
&:not(:last-child) {


&:after {
    display: block;
    height: 16px;
    width: 1px;
background-color: rgba(18, 20, 23, 0.10);
margin-left: 6px;
content: '';

}}
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Button = styled.button`
display: flex;
width: 100%;
height: 44px;
padding: 12px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border: none;
border-radius: 12px;
background: var(--color-button);
color: var(--color-text-button-and-back);
font-size: 14px;
font-weight: 600;
line-height: 1.4;

&:hover,
&:focus {
   background: var(--color-button-hover);
}

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;