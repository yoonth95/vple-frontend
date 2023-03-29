import styled from "styled-components";

export const CardDiv = styled.div`
width: 100%;
height: 92px;
box-shadow: 0px 0px 5px #C5C5C5;

border-radius: 10px;
margin-top: 15px;

display: flex;
align-items: center;

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

        .day{
            color: #848484;
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
}
`;

export const WrapImage = styled.div`
width: 80px;
height: 62.82px;
margin-left: 16px;

position: relative;

.plan_img1{
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;

    position: absolute;
    top: 0;
    right: 0;

}
.plan_img2{
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;

    position: absolute;
    bottom: 0;
    left: 0;
}
`;