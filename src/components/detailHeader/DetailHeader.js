import React from 'react'
import {useNavigate} from "react-router-dom";
import Profile from "../../asset/Profile.png";
import Alert from "../../asset/Alert.png";
import Logo from "../../asset/logo.png";
import BackArrow from '../../asset/back_arrow.png';
import {
    HeaderContainer,
    HeaderIconsWrap,
    HeaderTitleContainer,
    IconContainer,
    IconsWrap,
    LogoWrap, TitleContainer
} from "./DetailHeaderStyle";


const DetailHeader = (props) => {
    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/')
        window.scrollTo(0,0)
    };
    const onClickRouteBack = () => {
        navigate(-1)
    }
    const onClickProfile = () => {
        navigate('/login')
        window.scrollTo(0,0)
    };

    return (
        <>
            <HeaderContainer>
                <HeaderIconsWrap>
                    <LogoWrap>
                        <img src={Logo} className='logo-image' onClick={onClickBackHome}/>
                    </LogoWrap>
                    <IconsWrap className='iconsWrap'>
                        <img src={Profile} className='profileIcon' onClick={onClickProfile}/>
                        <img src={Alert} className='alertIcon'/>
                    </IconsWrap>
                </HeaderIconsWrap>
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