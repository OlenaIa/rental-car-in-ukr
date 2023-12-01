import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 16px;
  padding: 15px 0px;
  border-bottom: 1px solid var(--color-button);

 @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 20px 0px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 16px;
  color: var(--color-button);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 5px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-text-main);

  &.active {
    color: var(--color-text-loadmore-hover);
  }
`;

