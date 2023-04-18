import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './GuideCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function GuideCardButton({ title, onClick}) {

    const click = onClick;

    return (
        <CardButtonStyle>
            <div onClick={click}>

                <StyledImgDiv />
                <StyledContentDiv>
                    <StyledTitleFont>{title}</StyledTitleFont>
                </StyledContentDiv>

            </div>
        </CardButtonStyle>

    );
}