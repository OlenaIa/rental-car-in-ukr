import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 18px;
  }
`;

export const Label = styled.label`
    color: var(--color-text-label);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Select = styled.select`
    width: ${props => props.width || '100%'};
    height: 48px;
    padding: 14px 18px;
    margin-top: 8px;
    border-radius: 14px;
    border: none;
    background-color: var(--color-filter-field);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputWrap = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const Input = styled.input`
    width: 160px;
    height: 48px;
    padding: 14px 24px;
    margin-top: 8px;
    border-radius: ${props => props.$radius || '14px'};
    border: none;
    border-right: ${props => props.$border || 'none'};
    background-color: var(--color-filter-field);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;

    &::placeholder {
    color: #121417;
    opacity: 1;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonSearch = styled.button`
    display: flex;
    width: 136px;
    height: 48px;
    padding: 14px;
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