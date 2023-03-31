import styled from "styled-components";

export const ResponsiveDiv = styled.footer`

  width: 100%;
  height: 90px;

  @media (max-height: 740px) {
    display: inline-flex;
    padding-bottom: 10px;
    background-color: white;

  }
`;

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

export const WrapBackButton = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B
`;

export const CardContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: auto;
  gap: 5px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrap = styled.div`

  width: 167px;
  flex: auto;
  
  :first-child{
    margin-left: 20px;
  }
  :last-child {
    margin-right: 20px;
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
    margin-bottom: 5px;
    width: 10px;
    height: 15px;
  }
`;



