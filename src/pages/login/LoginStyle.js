
import styled from 'styled-components';
import LogoImg from '../../asset/logo.png';
import IconEmail from '../../asset/IconEmail.png';
import IconLock from '../../asset/IconLock.png';
import IconKakao from '../../asset/IconKakao.png';
import IconNaver from '../../asset/IconNaver.png';
import IconGoogle from '../../asset/IconGoogle.png';
import IconReveal from '../../asset/IconReveal.png';
import IconHide from '../../asset/IconHide.png';

import { ButtonStyle } from '../../styles/ButtonStyle';

export const StyledTopMargin = styled.div `
    padding-top: 7rem;
    text-align: center;
    background-color: white;

    .logoIcon {
        width: 102px;
        height: 61px;
      }
`;

export const StyledDiv = styled.div`
    margin-top: 1.5rem;
    font-size:15px;
`;

export const StyledIconEmail = styled.img.attrs({
    src: `${IconEmail}`,
})`
    width: 17px;
    height: 13px;
`;
export const StyledInputEmail = styled.input`
    width: 200px;
    height: 8px;
    border: none;
    padding: 10px 10px;
    color: #758B6F;
`;
export const StyledInputPassword = styled.input`
    width: 170px;
    height: 8px;
    border: none;
    padding: 10px 10px;
    color: #758B6F;
`;


export const StyledIconLock = styled.img.attrs({
    src: `${IconLock}`,
})`
    width: 17px;
    height: 20px;
    vertical-align: middle;
    margin-bottom: 4px;
`;

export const Interval = styled.div`
    margin-top: 3rem;
`;

export const InputDiv = styled.div`
    padding-top: 1rem;
    margin:auto;
    width: 250px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BDBDBD;
`;


export const StyledFilledButton = styled.button`
    &:hover{
        opacity:0.8;
    }
    margin-top: 3rem;
    width: 270px;
    height: 33px;
    border-radius: 8px;
    color: white;
    background-color: #758B6F;
    border: none;
`;

export const LoginOptionButton = styled(ButtonStyle) `
    padding-left: 10px;
    padding-right: 4px;
    margin-top: 1rem;
`;

export const RevealButton = styled(ButtonStyle)`
    background-image: url(${IconReveal});
    width: 17px;
    height: 17px;
    margin-bottom: 5px;
    margin-left: 10px;
    vertical-align: middle;
    margin-bottom: 4px;
`;
export const HideButton = styled(ButtonStyle)`
    background-image: url(${IconHide});
    width: 17px;
    height: 17px;
    margin-left: 10px;
    vertical-align: middle;
    margin-bottom: 4px;
`;

export const StyledButtonG = styled(ButtonStyle) `
    &:hover{
        opacity:0.8;
    }
    color: #758B6F; 
    font-weight: bold;
    padding-left: 10px;
    padding-right: 4px;
    margin-top: 1rem;
`;

export const StyledKaKaoButton = styled(ButtonStyle)`
    background-image: url(${IconKakao});
    width: 31px;
    height: 31px;
    margin-right: 7px;
    margin-left: 7px;
    margin-top: 1rem;
    margin-bottom: 160px;
`;
export const StyledNaverButton = styled(ButtonStyle)`
    background-image: url(${IconNaver});
    width: 31px;
    height: 31px;
    margin-right: 7px;
    margin-left: 7px;
    margin-top: 1rem;
`;
export const StyledGoogleButton = styled(ButtonStyle)`
    background-image: url(${IconGoogle});
    width: 31px;
    height: 31px;
    margin-right: 7px;
    margin-left: 7px;
    margin-top: 1rem;
`;

export const StyledBar = styled.span`
    color: #B5B5B5;
    font-size: 11px;
`;