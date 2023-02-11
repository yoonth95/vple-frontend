import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    margin-top: 20px;
    background-color: white;
    align-items: center;
    position: relative;

    div {
        flex-direction: column;
    }

    .user-name{
        font-size: 24px;
        font-weight: 500;
        margin-left: 25px;
    }

    .tag-div {
        width: 78px;
        height: 30px;
        background-color: white;
        background-size: 65px 22px;
        color: #758B6F;
        border: solid 1px #758B6F;
        border-radius: 23px;

        display: inline-flex;
        margin-top: 10px;
        margin-left: 20px;
        justify-content: center;

        font-size: 20px;
        text-align: center;
        line-height: 30px;
    }

    .setting-btn {
        position: absolute;
        right: 0;
        top: 5px;
        margin-right: 20px;
        width: 45px;
    }
`;


export const WrapProfilePhoto = styled.div`
    width: 87px;
    height: 87px;
    border-radius: 100%;
    display: inline-block;
    margin-left: 20px;

    .photo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    };
`;

export const MyPlanContainer = styled.section`
    margin-top: 40px;

    .wrap-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .wrap-title > span {
        display: inline-flex;
        align-items: center;
        margin-right: 20px;
        color: #6C6C6C;
        font-size: 15px;
    }

    .arrow-btn {
        width: 9px;
        height: 13px;
        margin-left: 5px;
        margin-bottom: 2px;
    }


`;

export const SmallTitle = styled.div`
    display: inline-flex;
    font-size: 20px;
    font-weight: 400;
    margin-left: 20px;
`;