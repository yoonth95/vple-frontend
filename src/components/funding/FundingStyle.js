import styled from "styled-components";


export const AdContainer = styled.div`
  display: flex;
  width: 100%;
  height: 256px;
  .ad-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const FundingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 500px; // width 값이 375px 이면 -> 800px 
  background-color: #ffffff;
  
  .title-wrap{
    display: flex;
    justify-content: start; // width 값이 375px 이면 start -> center 
    align-items: center;
    width: 93%;
    height: 20px;
    margin-top: 30px;
  }
`;

export const FundingImg = styled.div`
  width: 214px;
  height: 119px;
  border: solid 1px #DEDEDE;
  margin-bottom: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25)
  0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
  0px 1px 3px -1px;
  .card-img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const MoreBtn = styled.div`
  width: 93%;
  height: 48px;
  text-align: center;
  line-height: 50px;
  background-color: #FFFFFF;
  border: solid 1px #DEDEDE;
  border-radius: 10px;
  cursor: pointer;
  
  .reload-icon{
    width: 13px;
    height: 13px;
    padding-right: 12px;
  }
`;


export const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFFF;
  
  .store-product-wrap{
    display: flex;
    justify-content: start; // width 값이 375px 이면 start -> center 
    align-items: center;
    width: 90%;
    height: 20px;
    margin-top: 20px;
    margin-left: 26px;
    margin-bottom: 20px;
  }
`;

export const StoreCardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  width: 100%;
  height: 220px;
  
  .store-image{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  
  .store-card{
    width: 146px;
    height: 146px;
    margin-left: 26px;
    flex: 0 0 auto;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25)
    0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
    0px 1px 3px -1px;
  }
`;

export const LiveRankContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 74%;
  background-color: #F8F8F8;
`;

export const RankTitleWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 20px;
  margin-top: 30px;
  margin-left: 26px;
  
`;

export const RankItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //border: solid 1px red;
  
  .title-wrap {
    display: flex;
    align-items: center;
    //border: solid 1px red;
    margin: 26px;
    width: 200px;
    height: 50px;
    padding-top: 10px;
    
    .ranking {
      text-align: center;
      height: 100%;
      margin-right: 10px;
    }
    
    
    .ranking-title {
      width: 100%;
      height: 100%;
    }
  }
  
  .rank-image-wrap {
    width: 132px;
    height: 79px;
    border-radius: 10px;
    margin-right: 26px;
    margin-top: 24px;
    //border: solid 1px red;
    
    .rank-image{
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    
  }
`;

