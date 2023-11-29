import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk, getFirstCarsThunk } from "redux/cars/fetchCar";
import { selectCars, selectIsLoading } from "redux/selectors";
import { CarsListStyle, LoadMore } from "./CarsList.styled";

export const CarsList = () => {
    const cars = useSelector(selectCars);
    console.log('cars in List', cars);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    console.log(cars.length);
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        dispatch(getFirstCarsThunk())
    }, [dispatch]);

    const onClickLoadMore = () => {
        dispatch(getCarsThunk());
        setIsLoadMore(true);
    }


    return (
        <Section>
            <Container>
                {isLoading && <Loader />}
                {(cars?.length > 0) && (<>
                    <CarsListStyle>
                        {cars?.map((car, index) =>
                            <CarItem car={car} key={car.id} index={index} />
                        )}
                    </CarsListStyle>
                    <LoadMore onClick={onClickLoadMore} display={isLoadMore ? 'none' : 'block'}>Load more</LoadMore>
                </>
                )}
            </Container>
        </Section>
    )
};