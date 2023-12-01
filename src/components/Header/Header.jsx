import { Container, Section } from "pages/Page.styled";
import { HeaderStyled, LogoWrap, MainTitle, NavStyled, StyledNavLink } from "./Header.styled";
import Logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <Section>
            <Container $bottom='0px'>
                <HeaderStyled>
                    <LogoWrap>
                        <img src={Logo} alt="Logo" />
                        <MainTitle>Car rental</MainTitle>
                    </LogoWrap>
                    <NavStyled>
                        <StyledNavLink to="/">Home</StyledNavLink>
                        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
                        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                    </NavStyled>
                </HeaderStyled>
            </Container>
        </Section>
    )
};