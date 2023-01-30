import styled from "styled-components";

export const ContainerMap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 120px;
  z-index: 2;
  width: 68%;
  
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


