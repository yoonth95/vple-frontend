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
    margin: 5px;

    .link{
        text-decoration-line: none;
    }

`;

export const StyledImgDiv = styled.div`
    width : 150px;
    height: 80px;
    //background-size: 35vw;, 141.16px;
    background-color: #F8F8F8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

export const StyledContentDiv = styled.div`
    width: 150px;
    height: 43px;
    //background-size: 132.76px, 42.02px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const StyledTitleFont = styled.div`
    font-size: 16px;
    color: #414141;
    padding: 13px 0px 0px 10px;
    text-align: left;
    text-decoration: none;
`;

