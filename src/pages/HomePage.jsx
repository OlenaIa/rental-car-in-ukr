import { Container, EmptyPage, Section } from "./Page.styled";
import auto from '../assets/hero-car.jpg'

const HomePage = () => {
    return (
        <Section $url={auto && `url(${auto})`}>
            <Container $bottom='0px'>
                <EmptyPage></EmptyPage>
                </Container>
            </Section>
    )
}

export default HomePage;