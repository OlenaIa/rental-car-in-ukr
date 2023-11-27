import { HeaderStyled, MainTitle, NavStyled, StyledNavLink } from "./Header.styled";
    
export const Header = () => {
    return (
        <HeaderStyled>
            <MainTitle>Car rental</MainTitle>
            <NavStyled>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/catalog">Catalog</StyledNavLink>
                <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            </NavStyled>
        </HeaderStyled>
  )      
};