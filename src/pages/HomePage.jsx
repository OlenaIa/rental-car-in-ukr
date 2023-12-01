import { Container, Welcome, Section, WelcomeWrap } from "./Page.styled";
import auto from '../assets/hero-car.jpg'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Section $url={auto && `url(${auto})`}>
            <Container $bottom='0px'>
                <WelcomeWrap>
                    <Welcome>
                        <p>Welcome to Car Rental!</p>
                        <p>Choose the best for you <Link to="/catalog">HERE</Link></p>
                    </Welcome>
                </WelcomeWrap>
            </Container>
        </Section>
    )
};

export default HomePage;