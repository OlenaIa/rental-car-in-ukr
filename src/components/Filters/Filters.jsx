import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCarBrands } from "redux/selectors";
import { Blink, ButtonSearch, Form, Input, InputWrap, Label, FalseInput, WrapSecondInput, firstSelectStyles, secondSelectStyles } from "./Filters.styled";
import Select from 'react-select';
import { filterSet } from "redux/filter/filterSlice";
import { makeComaInMileage } from "service/serviceFunc";

export const Filters = () => {
    const dispatch = useDispatch();
    const carBrands = useSelector(selectCarBrands);

    const [brand, setBrand] = useState({ value: 'all', label: 'Enter the text' });
    const [toPrice, setToPrice] = useState({ value: 'all', label: 'To $' });
    const [mileageTo, setMileageTo] = useState('');
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageToWithComa, setMileageToWithComa] = useState('');
    const [mileageFromWithComa, setMileageFromWithComa] = useState('');

    const pricesArray = [{ value: 'all', label: 'All price' }];
    for (let index = 30; index < 501; index += 10) {
        pricesArray.push({ value: index, label: index });
    };

    const reset = () => {
        setBrand({ value: 'all', label: 'Enter the text' });
        setToPrice({ value: 'all', label: 'To $' });
        setMileageTo('');
        setMileageFrom('');
        setMileageToWithComa('');
        setMileageFromWithComa('');
    };

    const onClickFilter = () => {
        console.log('typeof filterMileageFrom', typeof filterMileageFrom); 
        const commonFilter = {
            brand: brand.value,
            priceTo: toPrice.value,
            mileage: {
                from: mileageFrom,
                to: mileageTo
            }
        };
        console.log(commonFilter);
        dispatch(filterSet(commonFilter))
    };

    const handleChange = (e) => {
        const { value } = e.target;
        const valueWithComa = makeComaInMileage(value);

        switch (e.target.name) {
            case 'mileageFrom':
                setMileageFrom(value);
                setMileageFromWithComa(valueWithComa);
                break;
            case 'mileageTo':
                setMileageTo(value);
                setMileageToWithComa(valueWithComa);
                break;
            default:
                break;
        }
    };
    
    return (
        <Form>
            <Label>Car brand
                <Select
                    onChange={setBrand}
                    options={carBrands}
                    isSearchable
                    placeholder='Enter the text'
                    styles={firstSelectStyles}
                    value={brand}
                />
            </Label>
            <Label>Price/ 1 hour
                <Select
                    onChange={setToPrice}
                    options={pricesArray}
                    isSearchable
                    placeholder='To   $'
                    styles={secondSelectStyles}
                    value={toPrice}
                />
            </Label>
            <InputWrap>
                <Label>Сar mileage / km
                    <Input type="number"
                        pattern="[0-9]{1,5}"
                        title="Only number. From 1 to 5 digits"
                        name="mileageFrom"
                        value={mileageFrom}
                        onChange={handleChange}
                        min="1"
                        max='99998'
                        $radius='14px 0px 0px 14px'
                        $border='1px solid rgba(138, 138, 137, 0.20)'
                    />
                    <span></span>
                    <FalseInput>From {mileageFromWithComa}
                        {mileageFromWithComa.length > 0 && <Blink></Blink>}
                    </FalseInput>
                </Label>
                <WrapSecondInput>
                    <Input type="number"
                        pattern="[0-9]{1,5}"
                        title="Only number. From 1 to 5 digits"
                    name="mileageTo"
                    value={mileageTo}
                        onChange={handleChange}
                        min="1"
                        max='99999'
                        $radius='0px 14px 14px 0px' 
                        $padding='14px 14px 14px 48px' />
                                        <span></span>
                    <FalseInput>To {mileageToWithComa}
                                                {mileageToWithComa.length > 0 && <Blink></Blink>}
                    </FalseInput>
                </WrapSecondInput>
            </InputWrap>
            <ButtonSearch type="button"
            onClick={onClickFilter}
            >Search</ButtonSearch>
        </Form>
    )
};