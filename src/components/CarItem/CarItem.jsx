import { Button, CarCard, CarItemStyle, DescriptItem, DescriptList, DescriptListWrap, DescriptionWrap, Heart, Img, ImgWrap, Span, TitleH3, TitleWrap } from "./CarItem.styled";
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCar, deleteFavoriteCar } from "redux/favoriteCarsSlice/favoriteCarsSlice";
import { selectFavoriteCars } from "redux/selectors";


export const CarItem = ({ car, index }) => {
    const dispatch = useDispatch();
    const favoriteCarsId = useSelector(selectFavoriteCars);

    const { id, make, model, year, img, rentalPrice, rentalCompany, type, functionalities, address } = car;
    const cityCountry = address?.split(', ').slice(-2);
    
    const [isCarFavorite, setIsCarFavorite] = useState(false);

    useEffect(() => {
        if (favoriteCarsId?.some(car => car.id === id)) {
            setIsCarFavorite(true);
        } else { setIsCarFavorite(false) }
    }, [favoriteCarsId, id]);

    const onClickHeart = () => {
        isCarFavorite ? dispatch(deleteFavoriteCar(id)) : dispatch(addFavoriteCar(car));
    }

    return (
        <CarItemStyle key={id}>
            <CarCard>
                <ImgWrap>
                    <Img src={img ?
                        img :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={make} />
                    <Heart onClick={onClickHeart}
                        fill={isCarFavorite ? "var(--color-button)" : 'none'}
                        stroke={isCarFavorite ? "var(--color-button)" : "var(--color-text-button-and-back)"}
                    >
                        <use href={`${sprite}#icon-heart`} />
                    </Heart>
                </ImgWrap>
                <DescriptionWrap>
                    <TitleWrap>
                        <TitleH3>
                            {make}
                            {(index < 3) && <Span> {model}</Span>}, {year}
                        </TitleH3>
                        <p>{rentalPrice}</p>
                    </TitleWrap>
                    <DescriptListWrap>
                        <DescriptList>
                            <DescriptItem>{cityCountry[0]}</DescriptItem>
                            <DescriptItem>{cityCountry[1]}</DescriptItem>
                            <DescriptItem>{rentalCompany}</DescriptItem>
                            {/* <DescriptItem>Premium</DescriptItem> */}
                        </DescriptList>
                        <DescriptList>
                            <DescriptItem>{type}</DescriptItem>
                            {/* Подумати як вдесятый машині вивести майк на екран */}
                            <DescriptItem> {(index === 0 || index > 4 || index !== 10) ? model : make}</DescriptItem>
                            <DescriptItem>{id}</DescriptItem>
                            <DescriptItem>{functionalities[0]}</DescriptItem>
                        </DescriptList>
                    </DescriptListWrap>
                </DescriptionWrap>
            </CarCard>
            <Button>Learn more</Button>
        </CarItemStyle>
    )
};