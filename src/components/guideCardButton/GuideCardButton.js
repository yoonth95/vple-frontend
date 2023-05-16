import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './GuideCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function GuideCardButton({ title, image, onClick}) {

    const click = onClick;

    return (
        <CardButtonStyle>
            <div onClick={click}>

                <img className='image' src={image}></img>
                <StyledContentDiv>
                    <StyledTitleFont>{title}</StyledTitleFont>
                </StyledContentDiv>

            </div>
        </CardButtonStyle>

    );
}