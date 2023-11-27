export const Filters = () => {
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
                        <option value="xs">Extra Small</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                </label>
                <label>Price/ 1 hour
                    <select name="price">
                        <option value="" defaultValue="Brand">To   $</option>
                        <option value="xs">Extra Small</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
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