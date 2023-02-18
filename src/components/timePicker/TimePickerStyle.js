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
  left: 90px;

  .Wrap{
    width: 250px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align:center;
    
    .select-box{
        color: black;
        font-size: 13px;
        padding-left: 15px;
        width: 20%;
        height: 36px;
        outline: none;
        appearance:none;
        border: none;
        margin: 0px 5px;
    
        .option{
          color: #858585;
        }
    
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