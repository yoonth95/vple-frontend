import styled from "styled-components";
import { ButtonStyle } from "../../styles/ButtonStyle";

export const TimeButton = styled(ButtonStyle)`
color: #758B6F;
font-size: 14px;
border-bottom: solid 1px #758B6F;
margin-left: 4px;
line-height: 14px;
`;
export const CardDiv = styled.div`
width: 420.51px;
height: 92.31px;
background-size: 420.51px, 92.31px;
box-shadow: 0px 0px 5px #C5C5C5;

border-radius: 10px;
margin-top: 15px;

display: flex;
align-items: center;

position: relative;

.plan_img{
    width: 62.82px;
    height: 62.82px;
    border-radius: 8px;
    object-fit: cover;

    display: inline-block;
    margin-left: 16.67px;
}

.spot_name{
    font-size: 14px;
    display: block;
    margin-left: 15px;
}

.time{
    color: #848484;
    font-size: 14px;
    display: inline-block;
    margin-left: 15px;
    margin-top: 20px;
}

.more_button{
    width: 3.85px;
    height: 15.38px;
    display: inline-block;
    
    position: absolute;
    top: 20px;
    left: 395px;
}

.delete_button{
  width: 11.54px;
  height: 11.54px;
  display: inline-block;

  position: absolute;
  top: 60px;
  left: 391px;
}

`;