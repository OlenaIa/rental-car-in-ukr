import { CarsList } from "components/CarsList/CarsList";
import { Filters } from "components/Filters/Filters";

const Catalog = () => {
    return (
        <>
            <Filters/>
            <CarsList />
        </>
    )
}

export default Catalog;