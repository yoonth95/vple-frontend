import styled from "styled-components";

export const Container = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  background-color: #FFFFFF;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  .search-community{
    width: 100%;
    height: 34px;
    border-radius: 20px;
    padding-left: 10px;
    border: solid 1px #E7E7E7;
    outline: none;
  }
`;

export const TitleForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title-header{
    display: flex;
    .all-text{
      margin-top: 2px;
      margin-left: 8px;
    }
    .view-all-btn{
      width: 19px;
      height: 16px;
      margin-top: 3.5px;
    }
    
  }
  
  
  .create-text{
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    width: 84px;
    height: 29px;
    border-radius: 10px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    cursor: pointer;
  }
`;

export const TextForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  .hash-tag-btn{
    //margin-right: 20px;
    text-align: center;
    line-height: 34px;
    width: 63px;
    height: 30px;
    font-size: 14px;
    color: #5E5E5E;
    border: solid 1px #758B6F;
    border-radius: 20px;
    cursor: pointer;
  }
`;














