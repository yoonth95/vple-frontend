import styled from "styled-components";

import { ButtonStyle } from "../../styles/ButtonStyle";

export const ReviewButton = styled(ButtonStyle)`
    text-align: left;
    width: 438px;
    height: 150px;
    background-color: #F8F8F8;
    border-bottom: solid 1px #C9C9C9;
    position: relative;

    .text-div{
        display: inline-block;
        margin-left: 30px;
        position: absolute;
    }

    h4{
        color: black;
        font-size: 14px;
        font-weight: 500;
    }

    .content{
        padding-top: 5px;
        font-size: 12px;
        color: #7C7C7C;

        width: 300px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .writer-date{
        padding-top: 45px;
        font-size: 10px;
        color: #7C7C7C;
    }

`;


export const ImgDiv = styled.div`
    width: 93.59px;
    height: 93.59px;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 8px;
    display: inline-block;

    .review-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        display: inline-block;
    }
`;