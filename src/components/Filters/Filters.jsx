import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarsThunk } from "redux/cars/fetchCar";
import { selectCarBrands } from "redux/selectors";

export const Filters = () => {
    const dispatch = useDispatch();
    const carBrands = useSelector(selectCarBrands);
    
    useEffect(() => {
        dispatch(getAllCarsThunk())
    }, [dispatch]);

    const pricesArray = [];
    for (let index = 30; index < 501; index += 10) {
        pricesArray.push(index);
    };

    return (
        <>
            <form>
                <label>Car brand
                    <select name="brand">
                        {/* <option value="">Please choose car brand</option> */}
                        <option value=""
                            defaultValue="Brand"
                        // selected="selected"
                        // hidden="hidden"
                        // disabled
                        >Please choose car brand</option>
                        {carBrands?.map((brand) => <option value={brand}>{brand}</option>)}
                    </select>
                </label>
                <label>Price/ 1 hour
                    <select name="price">
                        <option value="" defaultValue="Brand">To   $</option>
                        {pricesArray?.map((price) => <option value={price}>{price}</option>)}
                    </select>
                </label>
                <label>Сar mileage / km
                    <input type="number"
                        name="mileageFrom"
                        placeholder="From"
                        // value="0"
                        min="0"
                        step='10' /></label>
                <input type="number"
                    name="mileageTo"
                    placeholder="To"
                    // value="0"
                    min="10"
                    step='10' />
                <button type="submit">Search</button>
            </form>
        </>
    )
};