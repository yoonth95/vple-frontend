import styled from "styled-components";

const ButtonStyle = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B5;
`;

export const ReviewButton = styled(ButtonStyle)`
    display: flex;
    width: 100%;
    height: 150px;
    align-items: center;

    text-align: left;
    background-color: #F8F8F8;
    border-bottom: solid 1px #C9C9C9;

    .text-div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 20px;
    }

    h4{
        display: inlie-flex;
        color: black;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
    }

    .content{
        height: 5vh;
        display: inline-flex;
        overflow: hidden;

        font-size: 12px;
        color: #7C7C7C;
    }

    .writer-date{
        display: inline-flex;
        margin-top: 5px;
        font-size: 10px;
        margin-left: auto;
        color: #7C7C7C;
    }
`;

export const ImgDiv = styled.div`
    display: inline-block;
    width: 200px;
    // width: 93.59px;
    // height: 93.59px;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 8px;

    .review-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        display: inline-block;
    }
`;