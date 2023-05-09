import styled from "styled-components";

export const TimeButton = styled.div`
display: inline-flex;

color: #758B6F;
font-size: 14px;
border-bottom: solid 1px #758B6F;
margin-left: 8px;
line-height: 14px;
`;

export const CardDiv = styled.div`
width: 100%;
height: 92px;
box-shadow: 0px 0px 5px #C5C5C5;

border-radius: 10px;
margin-top: 15px;

display: flex;
align-items: center;

.plan_img{
    min-width: 62.82px;
    width: 62.82px;
    height: 62.82px;
    border-radius: 8px;
    object-fit: cover;
    margin-left: 16px;
}

.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .wrap-title-line{
        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    
        .spot_name{
            font-size: 14px;
        }
        .delete_button{
            width: 11.54px;
            height: 11.54px;
            margin-right: 7%;
        }
        
    }
    
    .wrap-time-line{
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        .time{
            color: #848484;
            font-size: 14px;
        }
    }
}


`;