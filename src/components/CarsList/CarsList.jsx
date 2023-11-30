import { Loader } from "Loader/Loader";
import { CarItem } from "components/CarItem/CarItem";
import { Container, Section } from "pages/Page.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, getAllCarsThunk, getCarsThunk, getFilterCarsThunk } from "redux/cars/fetchCar";
import { selectAllCars, selectBrand, selectCars, selectIsLoading, selectPage } from "redux/selectors";
import { CarsListStyle, LoadMore } from "./CarsList.styled";
import { pageSet } from "redux/filter/filterSlice";

export const CarsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const cars = useSelector(selectCars);
    const allCars = useSelector(selectAllCars);
    const filterBrand = useSelector(selectBrand);
    const page = useSelector(selectPage);
    // const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        dispatch(getAllCarsThunk())
    }, [dispatch]);

    // useEffect(() => {
    //     if (page === 0) {
    //         setPage(page + 1);
    //         return; 
    //     };

    //     dispatch(getCarsThunk(page))
    // }, [dispatch, page]);

    useEffect(() => {
        // if (filterBrand === 'all') {
        //     setIsLoadMore(false);
        //     setPage(1);
        // };


        dispatch(getFilterCarsThunk({filterBrand, page}))
        setIsLoadMore(true);

    }, [dispatch, filterBrand, page]);

    const totalPage = allCars.length / LIMIT;
     
    const onClickLoadMore = () => {
        if (page === totalPage - 1) {
            setIsLoadMore(true);
        };
        pageSet();
        console.log('page', page);
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
                    <LoadMore onClick={onClickLoadMore} display={false ? 'none' : 'block'}>Load more</LoadMore>
                </>
                )}
            </Container>
        </Section>
    )
};