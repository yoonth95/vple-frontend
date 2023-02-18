import styled from "styled-components";
import { ButtonStyle } from "../../styles/ButtonStyle";

export const SelectOption = styled.div`

  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 80px;

  background-color: white;
  border: solid 1px #CDCDCD;
  border-radius: 20px;

  z-index: 2;
  position: absolute;
  top: 55px;
  left: 90px;

  // top: 120px;
  // left: 130px;

  .Wrap{
    width: 250px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: -8px;
    
    .select-box{
        color: black;
        font-size: 13px;
        padding-left: 15px;
        width: 20%;
        height: 36px;
        outline: none;
        appearance:none;
        border: none;
    
        .option{
          color: #858585;
        }
    
  }
  
  h{
    font-size: 14px;
  }
  
  };
`;

export const OkButton = styled(ButtonStyle)`
  color: white;
  font-size: 12px;

  background-color: #758B6F;
  padding: 5px 15px;
  border-radius: 20px

`;

export const CancelButton = styled(ButtonStyle)`
  color: black;
  font-size: 12px;
  
  margin-left: 20px;
  background-color: #CDCDCD;
  padding: 5px 15px;
  border-radius: 20px

`;