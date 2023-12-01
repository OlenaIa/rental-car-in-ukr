import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 20px;
  padding: 20px 0px;
  border-bottom: 1px solid var(--color-button);
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 20px;
  color: var(--color-button);
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 20px;
    font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-text-main);

  &.active {
    color: var(--color-text-loadmore-hover);
  }
`;

