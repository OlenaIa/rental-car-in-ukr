import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectCarBrands } from "redux/selectors";
import { ButtonSearch, Form, Input, InputWrap, Label, firstSelectStyles, secondSelectStyles } from "./Filters.styled";
import Select from 'react-select';
import { brandSet } from "redux/filter/filterSlice";

export const Filters = () => {
    const dispatch = useDispatch();
    const carBrands = useSelector(selectCarBrands);
    const filterBrand = useSelector(selectBrand);

    const [selectedPrice, setSelectedPrice] = useState(null);
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');
   

    const pricesArray = [];
    for (let index = 30; index < 501; index += 10) {
        pricesArray.push({ value: index, label: index });
    };

    // const onSubmitFilter = (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     // const searchValue = form.search.value
    //     console.log('form', form);
    // };
    const handleChange = (e) => {
        console.log('e.target', e.target);
        const { value } = e.target;
        switch (e.target.name) {
            case 'mileageFrom':
                setMileageFrom(value);
                console.log('mileageFrom');
                break;
            case 'mileageTo':
                setMileageTo(value);
                console.log('mileageTo');
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
        <>
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
                            name="mileageFrom"
                            placeholder="From"
                            value={mileageFrom}
                            onChange={handleChange} min="0"
                            step='10'
                            $radius='14px 0px 0px 14px'
                            $border='1px solid rgba(138, 138, 137, 0.20)'
                        />
                    </Label>
                    <Input type="number"
                        name="mileageTo"
                        placeholder="To"
                        value={mileageTo}
                        onChange={handleChange} min="10"
                        step='10'
                        $radius='0px 14px 14px 0px' />
                </InputWrap>
                <ButtonSearch type="submit"
                // onSubmit={onSubmitFilter}
                >Search</ButtonSearch>
            </Form>
        </>
    )
};