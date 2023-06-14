import styled from "styled-components";


export const LoginWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-background{
    position: absolute;
    top: 35vh;

    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 200px;
    padding: 30px 20px 20px 20px;

    background-color: white;
    box-shadow: 0px 0px 3px #C5C5C5;
    border-radius: 8px;

    img {
      width: 35px;
      margin: 0 auto;
    }
    .text-bold {
      color: #758B6F;
      font-weight: bold;
      text-align: center;
    }
    .text {
        text-align: center;
        font-size: 12px;
    }
    .line {
        border-bottom: 1px solid lightgrey;
    }
    .button {
        text-align: center;
        color: #B5B5B5;
        
    }
}
`;

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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  overflow: auto;
  gap: 3px;
  margin: 0 18px;
  overflow: hidden;
`;

export const CardWrap = styled.div`
  margin: 0 -2px;
`;