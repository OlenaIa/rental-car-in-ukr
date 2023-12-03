// Make from 4 and more 4-digits number (mileage) string with Coma 1111 -> '1,111'

export const makeComaInMileage = (mileage) => {
    const lengthMileage = mileage.toString().length;
    if (lengthMileage <= 3) {
        return mileage;
    };
    const mileageStringArr = mileage.toString().split('');
    mileageStringArr.splice((lengthMileage - 3), 0, ',');
    return mileageStringArr.join('');
};

// Make number from string with '$' (rentalPrice) '$30' -> 30

export const makeNumberFromPrice = (stringPrise) => {
    const price = parseInt(stringPrise.replace('$', ''));
    return price;
};

// Make array of unique brands from allCars array

export const makeUniqueBrandsState = (payload) => {
    const brands = payload?.map(car => car.make);
    const uniqueBrands = brands.filter((brand, index, array) =>
        array.indexOf(brand) === index);
    const uniqueBrandsObj = [
        { value: 'all', label: 'All Brands' },
        ...uniqueBrands.map(brand => { return { value: brand, label: brand } })
    ];
    return uniqueBrandsObj;
};