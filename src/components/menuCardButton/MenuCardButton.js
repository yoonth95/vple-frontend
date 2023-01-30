import {
    CardButtonStyle,
    WrapImg,
    StyledContentDiv,

} from './MenuCardButtonStyle';

import tempFood from '../../asset/temp/tempFood.jpeg'

export default function MenuCardButton({menu, price}) {
    return (
        <CardButtonStyle>
            <WrapImg>
                <img src={tempFood} className="food-image" />
            </WrapImg>
            <StyledContentDiv>
                <p className="menu">{menu}</p>
                <p className="price">{price} 원</p>
            </StyledContentDiv>
        </CardButtonStyle>
    );
}