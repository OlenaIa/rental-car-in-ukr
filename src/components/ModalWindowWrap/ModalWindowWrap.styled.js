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
    /* min-width: 335px; */
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
  cursor: pointer;
  width: 22px;
  height: 22px;
  stroke: var(--color-text);
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
export const ModalChildrenWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;


