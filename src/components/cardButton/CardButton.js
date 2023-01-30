
import React, { useState } from "react";
import { ButtonStyle } from '../../styles/ButtonStyle';
import {
    CardButtonStyle, WrapImg, StyledImgDiv, ClipButtonG, ClipButtonW,
    StyledContentDiv, StyledTitleFont, StyledContentFont
} from './CardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function CardButton({ guideTitle, content }) {

    const [isClip, setClip] = useState(false);

    const navigate = useNavigate();
    const move = () => {
        navigate('/guide/detail', {
            state: {
                guideTitle: guideTitle,
                content: content
            }
        });
    }

    return (
        <CardButtonStyle>

            <ButtonStyle onClick={() => setClip(!isClip)}>
                {isClip ? <ClipButtonG /> : <ClipButtonW />}

                <div onClick={move}>

                    <StyledImgDiv />
                    <StyledContentDiv>
                        <StyledTitleFont>{guideTitle}</StyledTitleFont>
                        <StyledContentFont>{content}</StyledContentFont>
                    </StyledContentDiv>

                </div>

            </ButtonStyle>

        </CardButtonStyle>

    );
}