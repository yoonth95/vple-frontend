import styled from "styled-components";
import IconUp from '../../asset/restaurant/IconUp.png';

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
    flex-wrap: wrap;
    gap: 1%;
    width: 100%;
    padding-bottom: 20%;
    justify-content: center;

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

  position: sticky;
  bottom: 110px;
  left: 85%;

`;