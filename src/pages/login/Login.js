import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../asset/logo.png';
import kakao from '../../asset/kakao.png';
import {
    Container,
    WrapLogin,
} from './LoginStyle';

// import {KAKAO_AUTH_URL} from '../../kakaoAuth';

export default function Login() {

    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/')
        window.scrollTo(0, 0)
    };

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id={9bace5ab316d4073d7412f542dd4f2c8}&redirect_uri={http://localhost:3000/user/kakao/callback}&response_type=code`;
    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <>
            <Container>
                <span className='no-login'>둘러보기</span>

                <WrapLogin>
                    <img src={Logo} className='logo-icon' onClick={onClickBackHome} />
                    <div className='catchphrase'>플랜부터 플래그까지, 비건 여행을 위한 VPLE</div>
                    <div className='login-btn' onClick={kakaoLogin}>
                        <img src={kakao} className='kakao' /><span>카카오톡으로 로그인</span>
                    </div>
                </WrapLogin>
            </Container>
        </>
    );


}