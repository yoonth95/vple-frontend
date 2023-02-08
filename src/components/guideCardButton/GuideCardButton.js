
import React, { useState } from "react";
import DefaultButton from '../DefaultButton';
import {
    CardButtonStyle, 
    StyledImgDiv, 
    ClipButtonG, 
    ClipButtonW,
    StyledContentDiv, 
    StyledTitleFont,
} from './GuideCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function GuideCardButton({ title }) {

    // const [isClip, setClip] = useState(false);

    const navigate = useNavigate();
    const move = () => {
        navigate('/guide/detail', {
            state: {
                title: title,
            }
        });
    }

    return (
        <CardButtonStyle>

            {/* <DefaultButton onClick={() => setClip(!isClip)}>
                {isClip ? <ClipButtonG /> : <ClipButtonW />} */}

                <div onClick={move}>

                    <StyledImgDiv />
                    <StyledContentDiv>
                        <StyledTitleFont>{title}</StyledTitleFont>
                    </StyledContentDiv>

                </div>

            {/* </DefaultButton> */}


        </CardButtonStyle>

    );
}