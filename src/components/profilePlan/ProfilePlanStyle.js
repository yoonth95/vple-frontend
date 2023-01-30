import styled from "styled-components";

import { ButtonStyle } from "../../styles/ButtonStyle";

export const CardImgButton = styled(ButtonStyle)`
width: 128.72px;
height: 160px;
background-color: #EDEDED;
background-size: 128.72px 125.62px;
box-shadow: 0px 0px 7px #C5C5C5;
display: inline-block;
margin: 0px 8px 17px 8px;

.card-image{
    width: 128.72px;
    height: 125.62px;
    object-fit: cover;
}

`;

export const WrapPlanTitle = styled.div`
width: 128.72px;
height: 33px;
background-color: white;
background-size: 128.72px 35.81px;
margin-top: -3px;

.plan-title{
    font-size: 12px;
    color: black;
    line-height: 34px;
    
    //margin-left: 15px;
    //float: left;
}
`;