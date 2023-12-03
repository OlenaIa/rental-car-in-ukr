import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, EmptyPage, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, getAllCarsThunk, getCarsThunk } from "redux/cars/fetchCar";
import { selectAllCars, selectCars, selectFilter, selectFilterCars, selectIsLoading } from "redux/selectors";
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

        const { brand, priceTo, mileage: { from, to } } = filter;
        if (brand === 'all' && priceTo === 'all' && from === '' && to === '') {
            dispatch(filterDelete())
            return;
        }

        // Фільтр brand є? -> Так -> Віддає filterBrandCars
        // Фільтр brand 'all'? -> Так -> Віддає allCars
        const filterBrandCars = (brand !== 'all') && allCars.filter(car => car.make === brand);
        
        // Фільтр priceTo є? -> Так. Та є Фільтр brand -> Фільтрує filterBrandCars -> Віддає filterBrandPriceCars
        // Фільтр priceTo є? -> Так. Ален нема Фільтр brand -> Фільтрує allCars -> Віддає filterBrandPriceCars
        // Фільтр priceTo 'all'? -> Віддає filterBrandPriceCars = false
        const filterBrandPriceCars = (priceTo !== 'all') ?
            (filterBrandCars ? filterBrandCars.filter(car => makeNumberFromPrice(car.rentalPrice) <= priceTo) :
                allCars.filter(car => makeNumberFromPrice(car.rentalPrice) <= priceTo)) : false;

        // Фільтр mileage є? -> Так. Та є Фільтр priceTo -> Фільтрує filterBrandPriceCars -> Віддає filterBrandPriceMileageCars
        // Фільтр mileage є? -> Так. Але нема priceTo. Але є brand -> Фільтрує filterBrandCars -> Віддає filterBrandPriceMileageCars
        // Фільтр mileage є? -> Так. Але нема інших фільтрів -> Фільтрує allCars -> Віддає filterBrandPriceMileageCars
        let filterBrandPriceMileageCars = false;
        if (from !== '' && to !== '' && priceTo !== 'all') {
            filterBrandPriceMileageCars = filterBrandPriceCars.filter(car => (car.mileage > parseInt(from) && car.mileage < parseInt(to)));
        } else {
            if (from !== '' && to !== '' && brand !== 'all') {
                filterBrandPriceMileageCars = filterBrandCars.filter(car => (car.mileage > parseInt(from) && car.mileage < parseInt(to)));
            } else {
                filterBrandPriceMileageCars = allCars.filter(car => (car.mileage > parseInt(from) && car.mileage < parseInt(to)));
            }
        };

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
                    </CarsListStyle>) :
                        <EmptyPage><p>Sorry. Nothing found for your search</p></EmptyPage>) :
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