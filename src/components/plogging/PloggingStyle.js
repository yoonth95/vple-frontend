import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 335px;
  background-color: #F8F8F8;
`;

export const PloggingTitleWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  height: 20px;
  margin-top: 40px;
  margin-left: 29px;
`;

export const PloggingCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  align-items: center;
  width: 100%;
  height: 100%;
  
  .card-wrap {
    cursor: pointer;
    flex: 0 0 auto;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-left: 29px;
    margin-bottom: 50px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    
    .card-image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;

export const BoardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 760px;
  background-color: #FFFFFF;
  //border: solid 1px red;
  .list-hr{
    width: 92%;
    height: 1px;
    background-color: #C9C9C9;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .footer-btn {
    margin-top: 10px;
    width: 99%;
    height: 60px;
    text-align: center;
    cursor: pointer;
    //border: solid 1px red;
    .arrow-up {
      margin-right: 10px;
      width: 12px;
      height: 12px;
    }
  }
`;

export const BoardHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .input-wrap {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    .search-plogging{
      width: 92%;
      height: 34px;
      border-radius: 15px;
      border: solid 1px #E7E7E7;
      outline: none;
      padding-left: 10px;
      margin-left: 20px;
    }
    .search-icon{
      position: relative;
      right: 7%;
      top: 8px;
      width: 19px;
      height: 20px;
    }
  }
  .board-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:87%;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
    //border: solid 1px green;
    
    
    .board-btn{
      margin-top: 4px;
      text-align: center;
      width: 84px;
      height: 29px;
      border-radius: 10px;
      line-height: 34px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
  };
  
  .switch-btn-wrap {
    //display: flex;
    width: 90%;
    margin-left: 20px;
    margin-bottom: 20px;
    
    .get-board {
      cursor: pointer;
      margin-left: 10px;
      color: #758B6F; // true값일때 색깔 변함 
    }
    
    .check-board {
      margin-left: 20px;
      color: black;
    }
  }
`;

export const BoardListWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  
  .list-hr{
    width: 92%;
    height: 1px;
    background-color: #C9C9C9;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

export const BoardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
  
  .board-list-info{
    margin-left: 24px;
    .wrapper{
      margin-top: 33px;
      //border: solid 1px red;
    }
  }
  
  .list-image-image{
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    margin-right: 24px;
    border-radius: 10px;
    
    .image-wrap{
      width: 93px;
      height: 93px;
      border-radius: 10px;
      //box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      //rgba(90, 125, 188, 0.05) 0px 0.25em 1em;;
      
      .item-image{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
`;