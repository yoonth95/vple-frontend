import styled from "styled-components";
import IconUp from '../../asset/restaurant/IconUp.png';

export const WrapSearchContainer = styled.div`

  .sticky {
    position: sticky;
    top: 0px;
  }
  .fixed {
    position: fixed;
    top: 0px;
  }

`;

export const SearchContainer = styled.section`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height: 75px;
  background-color: #F8F8F8;
  z-index: 3;

  
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
    // size: "5";

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

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1%;
    padding: 0 3% 30% 3%;
    background-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UpButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${IconUp});
  background-size: 24px 23px;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 0px 5px #C5C5C5;

  position: fixed;
  bottom: 14%;
  left: 85%;

`;