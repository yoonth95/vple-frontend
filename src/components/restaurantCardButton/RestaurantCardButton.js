
import React, { useState } from "react";
import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './RestaurantCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function RestaurantCardButton({ title, image }) {

    const navigate = useNavigate();
    const move = () => {
        navigate('/restaurant/detail', {
            state: {
                title: title,
            }
        });
    }

    return (
        <CardButtonStyle>
            <div onClick={move}>
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