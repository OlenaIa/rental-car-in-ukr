import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, EmptyPage, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, getAllCarsThunk, getCarsThunk } from "redux/cars/fetchCar";
import { selectAllCars, selectCars, selectFilter, selectFilterCars, selectIsLoading, selectMileageFrom, selectMileageTo, selectToPrice } from "redux/selectors";
import { CarsListStyle, LoadMore } from "./CarsList.styled";
import { makeNumberFromPrice } from "service/serviceFunc";
import { filterCarsSet, filterDelete } from "redux/filter/filterSlice";

export const CarsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const cars = useSelector(selectCars);
    const allCars = useSelector(selectAllCars);
    const filterCars = useSelector(selectFilterCars);
    const filter = useSelector(selectFilter);

    const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        dispatch(getAllCarsThunk())
    }, [dispatch]);

    useEffect(() => {
        if (page === 0) {
            setPage(page + 1)
            return; 
        };
        dispatch(getCarsThunk(page))
    }, [dispatch, page]);

    useEffect(() => {
        if (filter === null) {
                return; 
        };

        const { brand, priceTo, mileage: {from, to} } = filter;
        if (brand === 'all' && priceTo === 'all' && from === '' && to === '') {
            dispatch(filterDelete())
            return;
        }
        // brand !== 'all' -> filterBrandCars
        // brand === 'all' -> allCars
        const filterBrandCars = (brand !== 'all') && allCars.filter(car => car.make === brand);
        console.log('filterBrandCars', filterBrandCars);
        
        // priceTo !== 'all' -> filterBrandCars(true) -> filterBrandCars.filter -> filterBrandPriceCars
        // priceTo !== 'all' -> filterBrandCars(false) -> allCars.filter -> filterBrandPriceCars
        const filterBrandPriceCars = (priceTo !== 'all') ?
            (filterBrandCars ? filterBrandCars.filter(car => makeNumberFromPrice(car.rentalPrice) <= priceTo) :
                allCars.filter(car => makeNumberFromPrice(car.rentalPrice) <= priceTo)) : false;          
        console.log('filterBrandPriceCars', filterBrandPriceCars)
        // priceTo === 'all' -> filterBrandCars || allCars

        // mileage !== '' -> filterBrandPriceCars(true)) -> filterBrandPriceCars.filter -> filterBrandPriceMileageCars

        let filterBrandPriceMileageCars = false;
        if (from !== '' && to !== '' && priceTo !== 'all') {
            filterBrandPriceMileageCars = filterBrandPriceCars.filter(car => (car.mileage > from && car.mileage < to));
        } else {
            if (from !== '' && to !== '' && brand !== 'all') {
                filterBrandPriceMileageCars = filterBrandCars.filter(car => (car.mileage > from && car.mileage < to));
            } else {
                    filterBrandPriceMileageCars = allCars.filter(car => (car.mileage > from && car.mileage < to));
                }
        };

        console.log('filterBrandPriceMileageCars', filterBrandPriceMileageCars);
        

        if ((from !== '' && to !== '')) {
            dispatch(filterCarsSet(filterBrandPriceMileageCars))
        } else {
            if (priceTo !== 'all') {
                dispatch(filterCarsSet(filterBrandPriceCars))
            } else {
                if (brand !== 'all') {
                    dispatch(filterCarsSet(filterBrandCars))
                } else {
                    return;
                }
            }
        };

    }, [dispatch, filter, allCars]);

    const totalPage = allCars.length / LIMIT;
    
    const onClickLoadMore = () => {
        if (page === totalPage - 1) {
            setIsLoadMore(true);
        };
        setPage(page + 1)
        console.log('page', page);
    };

    return (
        <Section>

            <Container>
                {isLoading && <Loader />}
                {filter !== null ?
                    (filterCars?.length > 0 ? (<CarsListStyle>
                        {filterCars?.map((car, index) =>
                            <CarItem car={car} key={car.id} index={index} />
                        )}
                    </CarsListStyle>) : <EmptyPage>Sorry. Nothing found for your search</EmptyPage>) :
                (cars?.length > 0) && (<>
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