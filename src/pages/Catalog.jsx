import { Loader } from "Loader/Loader";
import { CarsList } from "components/CarsList/CarsList";
import { Filters } from "components/Filters/Filters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk } from "redux/cars/fetchCar";
import { selectCars, selectIsLoading } from "redux/selectors";

const Catalog = () => {
    const cars = useSelector(selectCars);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    console.log('cars', cars);
    console.log(cars.length);

    // useEffect(() => {
    //     setLoad(false);
    // }, [])

    useEffect(() => {
        dispatch(getCarsThunk())
    }, [dispatch]);

    return (
        <>
            <Filters />
            {isLoading && <Loader/>}
            {(cars?.length > 0) && <CarsList />}
        </>
    )
}

export default Catalog;