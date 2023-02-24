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


export const CardButtonStyle = styled(ButtonStyle)`
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 10px;
    margin: 7px 5px;

    .link{
        text-decoration-line: none;
    }

`;

export const StyledImgDiv = styled.div`
    .img{
        width: 28vw;
        max-width: 150px;
        height: 80px;
        background-color: #F8F8F8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
    }

`;

export const StyledContentDiv = styled.div`
    width: 28vw;
    max-width: 150px;
    height: 43px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const StyledTitleFont = styled.div`
    font-size: 16px;
    color: #414141;
    padding: 13px 0px 0px 5px;
    text-align: left;
    text-decoration: none;
`;

