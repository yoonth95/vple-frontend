import styled from "styled-components";
import Sheet from 'react-modal-sheet';

const ButtonStyle = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B
`;

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

export const WrapMoreButton = styled.div`
  display: flex;
  justify-content: center;
  
  width: 52%;
  height: 47px;
  background-color: #758B6F;
  border-radius: 50px;

  position: absolute;
  z-index: 1;
  top: 78%;
  left: 24%;

  .button {
    font-size: 16px;
    color: white;
    letter-spacing: 0.1em;
    line-height: 47px;
  }
`;







