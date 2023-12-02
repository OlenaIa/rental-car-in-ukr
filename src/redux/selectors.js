// --------------- CARS -----------------

export const selectCars = state => state.cars.cars;
export const selectAllCars = state => state.cars.allCars;
export const selectCarBrands = state => state.cars.carsBrands;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

// --------------- FAVORITE -----------------

export const selectFavoriteCars = state => state.favoriteCars.favorites;

// --------------- FILTER -----------------

export const selectBrand = state => state.filter.brand;
export const selectToPrice = state => state.filter.toPrice;
export const selectMileageFrom = state => state.filter.mileageFrom;
export const selectMileageTo = state => state.filter.mileageTo;