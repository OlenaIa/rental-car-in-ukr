import { CarsList } from "components/CarsList/CarsList";
import { Filters } from "components/Filters/Filters";
import { Container, Section } from "./Page.styled";

const Catalog = () => {
    return (
        <>
            <Section>
                <Container>
                    <Filters />
                </Container>
            </Section>
            <CarsList/>
        </>
    )
}

export default Catalog;