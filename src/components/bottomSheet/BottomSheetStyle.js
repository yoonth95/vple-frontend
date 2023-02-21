import styled, { keyframes } from "styled-components";


const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40vh);
  }
`;
const slideUp = keyframes`
  from {
    transform: translateY(40vh);
  }
  to {
    transform: translateY(0);
  }
`;

export const ContainerSheet = styled.div`
  width: 100%;
  height: 40vh;
  background-color: white;
  box-shadow: 0px 0px 5px #C5C5C5;
  border-radius: 15px 15px 0 0;

  z-index: 4;

  position: fixed;
  bottom: 0;

  animation-name: ${slideUp};
  animation-duration: 0.2s;

  // .open-sheet {
  //   // transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);

  // }
  // .close-sheet {
  //   animation-name: ${slideDown};
  //   animation-duration: 0.2s;
  // }
`;

export const SheetHeader = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 0.5px solid #C5C5C5; 

  text-align: center;
  line-height: 45px;
  font-size: 13px;

  .btn {
    float: left;
    margin-left: 20px;
    margin-right: -20px;
  }
`;
