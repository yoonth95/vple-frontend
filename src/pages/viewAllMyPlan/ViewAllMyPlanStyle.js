import styled from "styled-components";

export const WrapHeader = styled.div`  
    display: flex;

    padding-top: 20px;
    padding-bottom: 10px;

    img {
        width: 30px;
        padding-right: 15px;
    }
`;
export const WrapDeleteMode = styled.div`
    position: relative;
    z-index: 3;

    .mode-background {
        position: absolute;
        right: 20px;

        display: flex;
        flex-direction: column;
        gap: 3px;

        background-color: white;
        padding: 10px 10px;
        box-shadow: 0px 0px 3px #C5C5C5;
        border-radius: 8px;

        text-align: center;
        
        .line {
            border-bottom: 1px solid lightgrey;
            margin-bottom: 4px;
        }
    }
`;

export const CardContainer = styled.section`
    display: flex;
    width: 100%;
    background-color: white;
    padding-bottom: 20%;

    position: relative;
`;
export const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  margin: 20px 20px;

`;
export const WrapCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 30%;
    margin-bottom: 20px;

    box-shadow: 0px 0px 3px #C5C5C5;
    border-radius: 10px;

    position: relative;

    .img-photo {
        display: inline-flex;
        height: 100px;
        background-color: #F8F8F8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .delete-btn {
        position: absolute;
        top: 12px;
        right: 12px;
        
        width: 16px;

    }
    .div-content {
        display: inline-flex;
        height: 39px;
        background-color: #FFFFFF;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .div-content span {
        font-size: 13px;
        color: #414141;
        padding: 8px 0px 0px 7px;
        text-align: left;
        text-decoration: none;
    }
`;

export const WrapModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-background{
        position: absolute;
        top: 30vh;

        display: flex;
        flex-direction: column;
        gap: 15px;

        width: 200px;
        height: 180px;
        padding: 0px 20px;

        background-color: white;
        box-shadow: 0px 0px 3px #C5C5C5;
        border-radius: 8px;

        .text {
            text-align: center;
            margin-top: 40px;
            line-height: 30px;
        }
        .line {
            border-bottom: 1px solid lightgrey;
            margin-bottom: 4px;
        }
        .button {
            display: flex;
            justify-content: space-around;
        }
        .between-btn {
            color: lightgrey;
        }
    }
    
`;