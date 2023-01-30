import styled from "styled-components";
import { ButtonStyle } from '../../styles/ButtonStyle';

export const CardButtonStyle = styled(ButtonStyle)`
    box-shadow: 0px 0px 2px #C5C5C5;
    border-radius: 10px;
    margin: 10px;
`;

export const WrapImg = styled.div`
    width: 132.76px;
    height: 101px;
    background-size: 132.76px, 101px;
    background-color: #F7F7F7;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .food-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    };

`;

export const StyledContentDiv = styled.div`
    width: 132.76px;
    height: 42.02px;
    background-size: 132.76px, 42.02px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    .menu{ 
        font-size: 14px;
        color: black;
        padding: 7px 0px 0px 9px;
        text-align: left;
        //text-decoration: none;
    }
    .price{
        font-size: 7px;
        color: #758B6F;
        padding: 0px 0px 0px 9px;
        text-align: left;
        //textDecoration: none;
    }
`;