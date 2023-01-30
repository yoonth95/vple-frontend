import styled from "styled-components";

export const CardImg = styled.div`
width: 128.72px;
height: 155.62px;
background-color: #EDEDED;
background-size: 128.72px 125.62px;
box-shadow: 0px 0px 7px #C5C5C5;
display: inline-block;
margin: 0px 8px 17px 8px;
position: relative;

.card-image{
    width: 128.72px;
    height: 125.62px;
    object-fit: cover;
    margin-bottom: -4px;
    opacity: 0.6;
    display: inline;
}

.icon-delete{
    width: 10px;
    height: 10px;
    padding: 5px 5px;
    position: absolute;
    display: inline;
    top: 5px;
    left: 105px;
}
`;

export const WrapPlanTitle = styled.div`
width: 128.72px;
height: 30px;
background-color: white;
background-size: 128.72px 35.81px;


.plan-title{
    font-size: 12px;
    color: black;
    line-height: 30px;
    
    //margin-left: 15px;
    //float: left;
}
`;