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
    .user-name-logout{
        font-size: 22px;
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
    .tag-div-logout {
        width: 88px;
        height: 30px;
        background-color: #758B6F;
        background-size: 65px 22px;
        color: white;
        border: solid 1px #758B6F;
        border-radius: 23px;

        display: inline-flex;
        margin-top: 12px;
        margin-left: 20px;
        justify-content: center;

        font-size: 15px;
        text-align: center;
        line-height: 30px;
        letter-spacing: 1px;
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
export const WrapCards = styled.div`
    display: flex;
    gap: 2vw;
    margin: 20px 20px;

    .my-plan-logout {

        margin-left: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
        
        .arrow-btn {
            width: 50px;
            height: 50px;
            box-shadow: 0px 0px 3px #C5C5C5;
            border-radius: 50%;

            text-align: center;
            line-height: 55px;

            .arrow-img {
                width: 20px;
                
                
            }
        }
        .text {
            font-size: 13px;
            color: #6C6C6C;
            margin-top: 15px;
        }
    }
    
`;
export const WrapCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex: 1;

    box-shadow: 0px 0px 3px #C5C5C5;
    border-radius: 10px;

    .img-photo {
        display: inline-flex;
        height: 100px;
        background-color: #F8F8F8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .div-content {
        display: inline-flex;
        height: 38px;
        background-color: #FFFFFF;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .div-content span {
        font-size: 13px;
        color: #414141;
        padding: 13px 0px 0px 7px;
        text-align: left;
        text-decoration: none;
    }
`;

export const WrapMenuContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    background-color: #F8F8F8;
    margin-top: 30px;
    padding-bottom: 10vh;

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1em;
        margin: 25px 25px;
    }
    .menu .arrow-btn {
        width: 10px;
        height: 17px;
    }
    .menu span {
        color: #989898;
    }

`;