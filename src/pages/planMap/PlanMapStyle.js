import styled from "styled-components";
import Sheet from 'react-modal-sheet';
import { ButtonStyle } from "../../styles/ButtonStyle";

export const ContainerMap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  position: relative;
  
  .map-container{
    position: relative;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 20px;
  z-index: 2;
  width: 68%;
  
  .search-btn {
    width: 100px;
    height: 30px;
    position: relative;
    border: none;
    border-radius: 20px;
    background-color: #758B6F;
    color: #ffffff;
    left: 200px;
    top: 20px;
  }
  
  .search-location{
    padding-left: 10px;
    width: 447px;
    @media screen and (max-width: 500px) {
      width: 81vw;
    }
    margin-left: 20px;
    height: 32px;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  };
`;

export const ShowMoreButton = styled(ButtonStyle)`
  width: 100px;
  height: 30px;
  background-color: #758B6F;
  background-size: 300px 50px;
  color: white;
  font-size: 14px;
  border-radius: 20px;
  z-index: 2;
  position: absolute;
  top: 780px;
  left: 200px;
`;

export const CustomSheet = styled(Sheet)`
    width: 500px;
    height: 400px;
    margin: auto;
    margin-bottom: 0px;

    
    .react-modal-sheet-container {
   
    }

    .react-modal-sheet-header {

    }

    .react-modal-sheet-drag-indicator {
      padding: 0px 10px;
    }

    .react-modal-sheet-content {

        padding: 0px 20px;

        .list{
            font-size: 16px;
            margin: 15px 0px;
        }

    }
    .react-modal-sheet-backdrop {
      width: 500px;
    }
`;

export const WrapTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .prev_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
    .day{
      color: #758B6F;
      font-weight: 700;

      display: inline-block;
      margin: 0px 18px;
    }
    .next_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
`;


export const PlanDiv = styled.div`
    padding: 0px 40px 40px 20px;
    background-color: white;

    margin-top: 10px;

    display: inline-block;
    
    .start_time{
      color: #848484;
      font-size: 14px;

      display: inline-block;
    }

    .icon_lock{
      width: 15.86px;
      height: 21.82px;

      float: right;

      display: inline-block;
    }
`;
export const SaveButton = styled(ButtonStyle)`
    width: 68px;
    height: 27px;
    border-radius: 6px;
    background-color: #758B6F;


    color: white;
    font-size: 14px;

    float: right;
    margin-left: 15px;
    margin-bottom: 10px;
`;
export const TimeButton = styled(ButtonStyle)`
    color: #758B6F;
    font-size: 14px;
    border-bottom: solid 1px #758B6F;
    margin-left: 4px;
    line-height: 14px;
`;

export const DeleteAllButton = styled(ButtonStyle)`
    width: 420px;
    height: 46px;
    display: inline-block;
    border-radius: 5px;
    border: solid 1px #DEDEDE;
    font-size: 14px;
    color: #727272;
`;



