
import React, { useState } from "react";
import DefaultButton from '../DefaultButton';
import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './RestaurantCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function RestaurantCardButton({ title }) {

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
                <StyledImgDiv />
                <StyledContentDiv>
                    <StyledTitleFont>{title}</StyledTitleFont>
                </StyledContentDiv>
            </div>
        </CardButtonStyle>

    );
}