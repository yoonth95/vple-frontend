
import React, { useState } from "react";
import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './RestaurantCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function RestaurantCardButton({ id, title, image,  }) {

    const navigate = useNavigate();
    const move = () => {
        navigate('/restaurant/detail', {
            state: {
                id: id,
            }
        });
        window.scrollTo(0,0)
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