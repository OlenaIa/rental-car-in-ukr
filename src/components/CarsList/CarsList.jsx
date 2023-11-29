import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, getCarsThunk } from "redux/cars/fetchCar";
import { selectAllCars, selectCars, selectIsLoading } from "redux/selectors";
import { CarsListStyle, LoadMore } from "./CarsList.styled";

export const CarsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const cars = useSelector(selectCars);
    const allCars = useSelector(selectAllCars);

    const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        if (page === 0) {
            setPage(page + 1);
            return; 
        };

        dispatch(getCarsThunk(page))
    }, [dispatch, page]);

    const totalPage = allCars.length / LIMIT;
     
    const onClickLoadMore = () => {
        if (page === totalPage - 1) {
            setIsLoadMore(true);
        };
        setPage(page + 1);
    };

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