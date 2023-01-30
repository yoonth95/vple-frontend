import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Logo from '../../asset/logo.png';
import {
    StyledTopMargin, StyledLogo, StyledDiv, Interval, InputDiv, StyledIconEmail, StyledInputEmail,
    StyledIconLock, StyledInputPassword, RevealButton, StyledFilledButton, LoginOptionButton, StyledButtonG, StyledBar,
    StyledKaKaoButton, StyledNaverButton, StyledGoogleButton, HideButton
} from './LoginStyle';
import { ButtonStyle } from '../../styles/ButtonStyle';

export default function Login() {

    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/') 
        window.scrollTo(0, 0)
    };

    const [showPassword, setShowPassword] = useState(false)
    const changeShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <StyledTopMargin>

            <img src={Logo} className='logoIcon' onClick={onClickBackHome}/>
            <StyledDiv>플랜부터 플래그까지, 비건 여행을 위한 VPLE</StyledDiv>

            <Interval>
                <InputDiv>
                    <StyledIconEmail /> <StyledInputEmail placeholder="이메일"></StyledInputEmail>
                </InputDiv>
                <InputDiv>
                    <StyledIconLock /> <StyledInputPassword placeholder="비밀번호"
                        type={showPassword ? "text" : "password"}></StyledInputPassword>
                    <ButtonStyle
                        onClick={changeShowPassword}
                    > {showPassword ? <HideButton /> : <RevealButton />}
                    </ButtonStyle>
                </InputDiv>
            </Interval>


            <StyledFilledButton>로그인</StyledFilledButton>

            <br />
            <LoginOptionButton>아이디 찾기</LoginOptionButton>
            <StyledBar>|</StyledBar>
            <LoginOptionButton>비밀번호 찾기</LoginOptionButton>
            <StyledBar>|</StyledBar>
            <StyledButtonG>회원가입</StyledButtonG>

            <br />
            <StyledKaKaoButton /><StyledNaverButton /><StyledGoogleButton />

        </StyledTopMargin>
    );


}