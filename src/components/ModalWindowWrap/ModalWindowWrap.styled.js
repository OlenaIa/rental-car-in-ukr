import styled from 'styled-components';

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-modal-wrap);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #FFF;
  border-radius: 24px;
  width: 335px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 541px;
}
  @media screen and (min-width: 1440px) {
    height: 752px;
  }
`;

export const CloseBtnWrapper = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: var(--color-text-main);
  top: 16px;
  right: 16px;
  cursor: pointer;
`;


