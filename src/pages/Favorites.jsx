import { CarsListStyle } from "components/CarsList/CarsList.styled";
import { Container, EmptyPage, Section } from "./Page.styled";
import { CarItem } from "components/CarItem/CarItem";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";
import { Link } from 'react-router-dom';

const Favorite = () => {
    const favoriteCars = useSelector(selectFavoriteCars);

    return (
        <Section>
            <Container $top='50px'>
                {(favoriteCars?.length > 0) ?
                    <CarsListStyle>
                        {favoriteCars?.map((car, index) =>
                            <CarItem car={car} key={car.id} index={index} />
                        )}
                    </CarsListStyle> :
                    <EmptyPage>
                        <p>
                            Please select your favorite cars in the <Link to="/catalog">Сatalog</Link>.
                        </p>
                    </EmptyPage>}
            </Container>
        </Section>
    )
};

export default Favorite;