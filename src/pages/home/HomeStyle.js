import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 11vh;
  background-color: #F8F8F8;

  .userWrap {
    font-size: 18px;
    width: 90%;
    padding-bottom: 5px;
  }
  span {
    font-weight: bold;
    font-size: 18px;
  }
  .textWrap {
    width: 90%;
    font-size: 18px;
  }
`;

export const ButtonWrap = styled.article`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ItemsBtn = styled.div`
  text-align: center;
  line-height: 45px;
  background-color: #758B6F;
  color: white;
  width: 85%;
  height: 48.52px;
  margin: 20px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25)
  0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
  0px 1px 3px -1px;
  cursor: pointer;
  font-size: 14px;
`;

export const CardSection = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 270px;
  background-color: #F8F8F8;
  //border: solid 1px red;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-top: 25px;
  margin-left: 10px;
  
  .titleDeco {
    width: 6px;
    height: 21px;
    background-color: #C9C9C9;
    margin-right: 10px;
  }

  .recommendGuide {
    font-weight: initial;
  }

  .arrow{
    margin-left: 5px;
    width: 10px;
    height: 15px;
  }
`;

export const CardContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: auto hidden;
`;

export const CardWrap = styled.div`
  width: 167px;
  height: 229px;
  flex: 0 0 auto;
  margin-left: 26px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25)
  0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
  0px 1px 3px -1px;
  
  .tourImage {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 77%;
    background-color: gainsboro;
  }

  .cardInfoWrap {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    .cardTitle {
      margin: 4px;
    }
    .cardRecommend {
      margin: 4px;
      color: #ababab;
      font-size: 4px;
    }
  }
`;

export const RecommendContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 213px;
  background-color: white;
`;

export const RecommendTitleWrap = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  margin-top: 25px;
  margin-left: 10px;
  //border: solid 1px red;
  
  .recommendTitle {
    font-weight: initial;
  }

  .titleDeco {
    width: 6px;
    height: 21px;
    background-color: #C9C9C9;
    margin-right: 10px;
  }

  .arrow{
    margin-left: 5px;
    width: 10px;
    height: 15px;
  }
`;

export const ContainerItemsWrap = styled.div`
  width: 100%;
  background-color: white;
  
`;

export const RecommendItemsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  width: 100%;
  height: 180px;
  //border: solid 1px red;
`;

export const RecommendImageWrap = styled.div`
  flex: 0 0 auto;
  margin-left: 26px;
  width: 167px;
  height: 134px;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  
  .itemImage {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px 10px 10px 10px;
  }

  .flagIcon {
    position: relative;
    bottom: 95%;
    left: 86%;
    right: 15%;
    width: 12px;
    height: 14px;
  }

  .itemsName {
    z-index: 0;
    position: relative;
    bottom: 24%;
    color: white;
    font-size: 13px;
  }
`;
