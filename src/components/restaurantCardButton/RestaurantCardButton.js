
import React, { useState } from "react";
import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './RestaurantCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function RestaurantCardButton({ id, title, image, onClick }) {

    const click = onClick;

    return (
        <CardButtonStyle>
            <div onClick={click}>
                <StyledImgDiv>
                    <img className="img" src={image}/>
                </StyledImgDiv>
                <StyledContentDiv>
                    <StyledTitleFont>{title}</StyledTitleFont>
                </StyledContentDiv>
            </div>
        </CardButtonStyle>

    );
}