import React from 'react'
import {useNavigate} from "react-router-dom";
import BackArrow from '../../asset/back_arrow.png';
import {
    HeaderContainer,
    HeaderTitleContainer,
    IconContainer,
    TitleContainer
} from "./TitleHeaderStyle";


const DetailHeader = (props) => {
    let navigate = useNavigate();
    const onClickRouteBack = () => {
        navigate(-1)
    }

    return (
        <>
            <HeaderContainer>
                <HeaderTitleContainer>
                    <IconContainer onClick={onClickRouteBack}>
                        <img src={BackArrow} className='back-arrow'/>
                    </IconContainer>
                    <TitleContainer>
                        <h3>{props.title}</h3>
                    </TitleContainer>
                </HeaderTitleContainer>
            </HeaderContainer>
        </>
    )
}

export default DetailHeader;