

export const CarItem = ({car}) => {
    const { id, make, model, year, img, rentalPrice, rentalCompany, type, fudnctionalities, address } = car;

    return (
        <>
          <li key={id}>
                    <img src={img ?
                        img :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={make} width="200" height="200" />
                    <div>
                        <h3>{make}</h3>
                        <p>{model}</p>
                    </div>
                </li>  
        </>
    )
}