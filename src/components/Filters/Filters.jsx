import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarsThunk } from "redux/cars/fetchCar";
import { selectCarBrands } from "redux/selectors";
import { ButtonSearch, Form, Input, InputWrap, Label, Select } from "./Filters.styled";

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
            <Form>
                <Label>Car brand
                    <Select name="brand" width='224px'>
                        <option value=""
                            defaultValue="Brand"
                        // selected="selected"
                        // hidden="hidden"
                        // disabled
                        >Enter the text</option>
                        {carBrands?.map((brand) => <option value={brand}>{brand}</option>)}
                    </Select>
                </Label>
                <Label>Price/ 1 hour
                    <Select name="price" width='125px'>
                        <option value="" defaultValue="Brand">To   $</option>
                        {pricesArray?.map((price) => <option value={price}>{price}</option>)}
                    </Select>
                </Label>
                <InputWrap>
                    <Label>Сar mileage / km
                        <Input type="number"
                            name="mileageFrom"
                            placeholder="From"
                            // value="0"
                            min="0"
                            step='10'
                            $radius='14px 0px 0px 14px'
                            $border='1px solid rgba(138, 138, 137, 0.20)'
                        />
                    </Label>
                    <Input type="number"
                        name="mileageTo"
                        placeholder="To"
                        // value="0"
                        min="10"
                        step='10'
                        $radius='0px 14px 14px 0px' />
                </InputWrap>
                <ButtonSearch type="submit">Search</ButtonSearch>
            </Form>
        </>
    )
};