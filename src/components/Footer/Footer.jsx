import { FooterStyle, LinkStyle } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyle>
            <p>Copyright © </p>
            <LinkStyle href="https://github.com/OlenaIa" target="_blank">
                 Olena Iankovska
            </LinkStyle>
        </FooterStyle>
    )
};

export default Footer;