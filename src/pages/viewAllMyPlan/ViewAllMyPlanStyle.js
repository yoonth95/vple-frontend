import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    width: 100%;
    background-color: white;
    padding-bottom: 20%;
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