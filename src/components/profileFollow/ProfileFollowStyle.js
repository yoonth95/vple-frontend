import styled from "styled-components";

import { ButtonStyle } from "../../styles/ButtonStyle";

export const WrapLine = styled.div`
    margin: 0px 40px;
`;

export const ImgDiv = styled.div`
width: 58.31px;
height: 58.31px;
padding-top: 10px;
display: inline-block;

.mate-photo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    display: inline-block;
}
`;

export const EditButton = styled(ButtonStyle)`
    background-color: #ECECEC;
    width: 105.04px;
    height: 32px;
    background-size: 105.04px 32px;
    border-radius: 6.05px;
    color: black;
    font-size: 14px;
    float: right;
    margin-top: 30px;
`;

export const MateButton = styled(ButtonStyle)`
text-align: left;
margin: 5px 0px;

.text-div{
    display: inline-block;
    margin-left: 15px;
    margin-top: 23px;
    position: absolute;
}

h4{
    color: black;
    font-size: 16px;
    font-weight: 500;
}
p{
    padding-top: 5px;
    font-size: 12px;
    color: #999999;
}
`;
