import styled from "styled-components";

import { ButtonStyle } from '../../styles/ButtonStyle';

export const ProfileContainer = styled.div`
    text-align: center;
    background-color: white;

    .mate-name{
        margin-top: 5px;
        font-size: 16.94px;
        font-weight: 500;
    }

    .greeting{
        margin-top: 3px;
        font-size: 12px;
        color #7D7D7D;
    }
`;

export const WrapProfilePhoto = styled.div`
    width: 93.05px;
    height: 93.05px;
    border-radius: 100%;
    display: inline-block;

    .photo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    };
`;

export const TagContainer = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
`;
export const TagDiv = styled.div`
    width: 65px;
    height: 22px;
    background-color: white;
    background-size: 65px 22px;
    color: #758B6F;
    border: solid 1px #758B6F;
    border-radius: 23px;


    font-size: 14px;
    text-align: center;
    line-height: 25px;
`;

export const WrapButton = styled.div`
    background-color: white;
    justify-content: center;
    padding: 20px 0px;
    display: flex;
`;

export const EditButton = styled(ButtonStyle)`
    width: 156.64px;
    height: 38.77px;
    background-color: #EDEDED;
    border-radius: 6.05px;
    margin-right: 15px;

    color: black;
    font-size: 16px;

`;

export const SettingButton = styled(ButtonStyle)`
    width: 156.64px;
    height: 38.77px;
    background-color: #EDEDED;
    border-radius: 6.05px;

    color: black;
    font-size: 16px;

`;

export const StateContainer = styled.div`
    padding: 20px 40px 20px 40px;
    background-color: white;
    text-align: center;



    .partition{
        border-top: solid 1px #737373;
    }
`;
export const ContainButton = styled(ButtonStyle)`
    padding-bottom: 20px;
    margin: 0px 53px;
    display: inline-block;

    .number{
        font-size: 16px;
        color: black;

    }
    .name{
        padding-top: 7px;
        font-size: 14px;
        color: #7D7D7D;
    }

`;

export const ContentsContainer = styled.div`
    background-color: white;

    .plan{
        padding-bottom: 300px;
        padding: 10px 30px;
        text-align: center;
    }
    .follow{
        padding-bottom: 30px;
        inline: inline-block;
        position: relative;
    }
`;