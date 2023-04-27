import styled from "styled-components";

export const WrapButton = styled.div`

  display: flex;
  justify-content: space-between;
  margin: 10px 20px;

  text-align: center;

  .active {
    width: 47%;
    height: 35px;
    border: solid 1px #758B6F;
    border-radius: 5px;
    
    color: #758B6F;
    line-height: 35px;
  }

  .inactive {
    width: 47%;
    height: 35px;
    border: solid 1px #DEDEDE;
    border-radius: 5px;
    
    color: #727272;
    line-height: 35px;
  }
`;