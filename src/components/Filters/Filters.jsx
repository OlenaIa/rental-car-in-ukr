import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectCarBrands, selectMileageFrom, selectMileageTo, selectToPrice } from "redux/selectors";
import { Blink, ButtonSearch, Form, Input, InputWrap, Label, FalseInput, WrapSecondInput, firstSelectStyles, secondSelectStyles } from "./Filters.styled";
import Select from 'react-select';
import { brandSet, mileageFromSet, mileageToSet } from "redux/filter/filterSlice";

export const Filters = () => {
    const dispatch = useDispatch();
    const carBrands = useSelector(selectCarBrands);
    const filterBrand = useSelector(selectBrand);
    const filterToPrice = useSelector(selectToPrice);
    const filterMileageFrom = useSelector(selectMileageFrom);
    const filterMileageTo = useSelector(selectMileageTo);

    console.log('filterMileageFrom', filterMileageFrom);
        console.log('filterMileageTo', filterMileageTo);

    const [selectedPrice, setSelectedPrice] = useState(null);
    const [mileageToWithComa, setMileageToWithComa] = useState('');
    const [mileageFromWithComa, setMileageFromWithComa] = useState('');

   
    const pricesArray = [];
    for (let index = 30; index < 501; index += 10) {
        pricesArray.push({ value: index, label: index });
    };

 const reset = () => {
        setMileageFrom('');
        setMileageTo('');
        setMileageToWithComa('');
        setMileageFromWithComa('');
    };

    const onSubmitFilter = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        // const searchValue = form.search.value
        console.log('form', form);
        reset();
    };

   

    const makeComaInMileage = (mileage) => {
        const lengthMileage = mileage.toString().length;

        if (lengthMileage <= 3) {
            return mileage;
        };

        const mileageStringArr = mileage.split('');
        mileageStringArr.splice((lengthMileage-3), 0, ',');
        return mileageStringArr.join('');
    };

    const handleChange = (e) => {
        const { value } = e.target;
        const valueWithComa = makeComaInMileage(value);

        switch (e.target.name) {
            case 'mileageFrom':
                dispatch(mileageFromSet(value));
                setMileageFromWithComa(valueWithComa);
                break;
            case 'mileageTo':
                dispatch(mileageToSet(value));
                setMileageToWithComa(valueWithComa);
                break;
            default:
                break;
        }
    };
    
    const onChangeBrand = (e) => {
        console.log('e', e);
        dispatch(brandSet(e));
    };
    
    return (
        <Form>
            <Label>Car brand
                <Select
                    onChange={onChangeBrand}
                    options={carBrands}
                    isSearchable
                    placeholder='Enter the text'
                    styles={firstSelectStyles}
                    value={filterBrand}
                />
            </Label>
            <Label>Price/ 1 hour
                <Select
                    onChange={setSelectedPrice}
                    options={pricesArray}
                    isSearchable
                    placeholder='To   $'
                    styles={secondSelectStyles}
                    value={selectedPrice}
                />
            </Label>
            <InputWrap>
                <Label>Сar mileage / km
                    <Input type="number"
                        inputmode='numeric'
                        pattern="[0-9]{1,5}"
                        title="Only number. From 1 to 5 digits"
                        name="mileageFrom"
                        value={filterMileageFrom}
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
                        inputmode='numeric'
                    name="mileageTo"
                    value={filterMileageTo}
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
            <ButtonSearch type="submit"
            onSubmit={onSubmitFilter}
            >Search</ButtonSearch>
        </Form>
    )
};