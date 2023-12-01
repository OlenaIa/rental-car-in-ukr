import styled from 'styled-components';

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 15px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    row-gap: 30px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 50px;
    column-gap: 29px;
  }
`;

export const LoadMore = styled.p`
  display: ${(props) => props.display || 'block'};
  color: var(--color-text-loadmore);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-loadmore-hover);
  }
`;
