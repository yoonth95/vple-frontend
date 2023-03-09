import { transform } from 'framer-motion';
import React, { useState } from 'react';

// import {
//   ContainerSheet,
//   SheetHeader,

// } from './BottomSheetStyle';
import styled, { keyframes } from "styled-components";


const BottomSheet = (props) => {

  const slideDown = keyframes`
    from {
      transform: translateY(80vh);
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

  const [height, setHeight] = useState(40);
  const [isHigh, setIsHigh] = useState(false);
  const setHeightHigher = () => {
    setHeight(80);
    setIsHigh(true);
  }
  const setHeightLower = () => {
    setHeight(40);
    setIsHigh(false);
  }

  const ContainerSheet = styled.div`
    width: 100%;
    height: ${height}vh;
    background-color: white;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 15px 15px 0 0;

    z-index: 4;

    position: fixed;
    bottom: 0;

    transition: all 0.2;

    animation-name: ${slideUp};
    animation-duration: 0.2s;
  `;

  const SheetHeader = styled.div`
    height: 40px;
    border-bottom: 0.5px solid #C5C5C5;
  
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  
    text-align: center;
    line-height: 45px;
    font-size: 13px;
  `;

  return (
    <>
      <ContainerSheet>
        <SheetHeader>
          <span onClick={props.closeSheet}>❎</span>
          <span className="title">{props.title}</span>
          <span onClick={isHigh ? setHeightLower : setHeightHigher}>👆</span>
        </SheetHeader>

      </ContainerSheet>
    </>
  )
}

export default BottomSheet;