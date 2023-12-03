import React, { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import { ModalContainer, CloseBtnWrapper, BackdropModal } from './ModalWindowWrap.styled';
import { ModalPortal } from './ModalPortal';

export const ModalWindowWrap = ({ onClick, children }) => {
  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const onClickClose = () => {
    onClick();
  };

  const onClickBackDrop = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <ModalPortal>
      <BackdropModal onClick={onClickBackDrop}>
        <ModalContainer>
          <CloseBtnWrapper onClick={onClickClose}>
            <use href={`${sprite}#icon-x`} />
          </CloseBtnWrapper>
          {children}
        </ModalContainer>
      </BackdropModal>
    </ModalPortal>
  );
};
