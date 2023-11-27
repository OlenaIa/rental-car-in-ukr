import { CarItem } from "components/CarItem/CarItem";
import { useSelector } from "react-redux";
import { selectCars } from "redux/selectors";

export const CarsList = () => {
    const cars = useSelector(selectCars);
console.log('cars in List', cars);

    return (
        <ul>
            {cars?.map((car) => <CarItem car={car} key={car.id}/>)}
        </ul>
    )
}