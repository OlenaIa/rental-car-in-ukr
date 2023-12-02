import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, getAllCarsThunk, getCarsThunk, getFilterCarsThunk } from "redux/cars/fetchCar";
import { selectAllCars, selectBrand, selectCars, selectIsLoading, selectMileageFrom, selectMileageTo, selectToPrice } from "redux/selectors";
import { CarsListStyle, LoadMore } from "./CarsList.styled";
import { makeNumberFromPrice } from "service/serviceFunc";

export const CarsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const cars = useSelector(selectCars);
    const allCars = useSelector(selectAllCars);
    const filterBrand = useSelector(selectBrand);
    const filterToPrice = useSelector(selectToPrice);
    const filterMileageFrom = useSelector(selectMileageFrom);
    const filterMileageTo = useSelector(selectMileageTo);

    const [page, setPage] = useState(1)
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        dispatch(getAllCarsThunk())
    }, [dispatch]);

    useEffect(() => {
        if (page === 1) {
            return; 
        };

        dispatch(getCarsThunk(page))
    }, [dispatch, page]);

    useEffect(() => {
        if (filterBrand.value === 'all') {
            setIsLoadMore(false);
            setPage(1);
        } else {setIsLoadMore(true)};

        dispatch(getFilterCarsThunk(filterBrand))
    }, [dispatch, filterBrand]);

    // useEffect(() => {
    //     const visibleCars = cars.filter(car => car.rentalPrice <= filterToPrice);

    // }, [dispatch]);

    const totalPage = allCars.length / LIMIT;
    
    const onClickLoadMore = () => {
        if (page === totalPage - 1) {
            setIsLoadMore(true);
        };
        setPage(page + 1)
        console.log('page', page);
    };

    
// if (filterToPrice.value === 'All') {
//             return;
//         }
    const visibleCars = cars.filter(car => {
        const price = makeNumberFromPrice(car.rentalPrice);
        return (price < filterToPrice.value)
    });
       console.log(visibleCars);


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