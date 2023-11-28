import { Button, CarCard, CarItemStyle, DescriptItem, DescriptList, DescriptListWrap, DescriptionWrap, Heart, Img, ImgWrap, Span, TitleH3, TitleWrap } from "./CarItem.styled";
import sprite from '../../assets/sprite.svg';


export const CarItem = ({car}) => {
    const { id, make, model, year, img, rentalPrice, rentalCompany, type, functionalities, address, mileage, engineSize } = car;
    const cityCountry = address.split(', ').slice(-2);
    console.log('cityCountry', cityCountry);

    return (
          <CarItemStyle key={id}>
                    <CarCard>
                        <ImgWrap>
                            <Img src={img ?
                                img :
                                'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={make} />
                    <Heart
            //   fill="red"
            //   stroke="var(--color-text-button-and-back)"
            >
              <use href={`${sprite}#icon-heart`} />
            </Heart>
                        </ImgWrap>
                        <DescriptionWrap>
                    <TitleWrap>
                        <TitleH3>
                            {make}<Span> {model}</Span>, {year}
                        </TitleH3>
                        <p>{rentalPrice}</p>
                    </TitleWrap>
                    <DescriptListWrap>
                        <DescriptList>
                            <DescriptItem>{cityCountry[0]}</DescriptItem>
                            <DescriptItem>{cityCountry[1]}</DescriptItem>
    <DescriptItem>{rentalCompany}</DescriptItem>
                        </DescriptList>
                        <DescriptList>
                            <DescriptItem>{type}</DescriptItem>
                        <DescriptItem>{engineSize}</DescriptItem>
                                            <DescriptItem>{mileage}</DescriptItem>
    
                            <DescriptItem>{functionalities[0]}</DescriptItem>
                        </DescriptList>
                    </DescriptListWrap>
                </DescriptionWrap>
                    </CarCard>
            <Button>Learn more</Button>
                </CarItemStyle>  
    )
}