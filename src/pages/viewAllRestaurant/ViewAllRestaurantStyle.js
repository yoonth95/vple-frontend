import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height: 75px;
  background-color: #F8F8F8;
`;
export const WrapSelection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 0 20px;

  .select-box{
    margin-top: 6px;
    width: 47%;
    height: 36px;

    color: #A5A5A5;
    font-size: 13px;
    padding-left: 20px;
    
    border-radius: 10px;
    outline: none;
    border: solid 0.5px #858585;
    appearance:none;
    
    .option{
      padding-left: 10px;
      color: #858585;
    }
`;

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
        height: 80px;
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