import React, {useState} from "react";
import { ButtonStyle } from '../../styles/ButtonStyle';
import {CardButtonStyle, StyledImgDiv, ClipButtonG, ClipButtonW,
    StyledContentDiv, StyledTitleFont} from '../cardButton2/CardButton2Style';

export default function CardButton2({name}) {

    const [isClip, setClip] = useState(false);

    return (
        <CardButtonStyle>
            <StyledImgDiv>
                <ButtonStyle onClick={() => setClip(!isClip)}>
                    { isClip ? <ClipButtonG/> : <ClipButtonW/> }
                </ButtonStyle>
            </StyledImgDiv>
            <StyledContentDiv>
                <StyledTitleFont>{name}</StyledTitleFont>
            </StyledContentDiv>
        </CardButtonStyle>

    );
}