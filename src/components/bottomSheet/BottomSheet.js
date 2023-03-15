import { transform } from 'framer-motion';
import React, { useState } from 'react';
import IconBreif from '../../asset/IconBreif.png';
import IconClose from '../../asset/IconClose.png';
import IconSpread from '../../asset/IconSpread.png';

import {
  WrapContent,
  EditBtn,
  NewBtn,

} from './BottomSheetStyle';

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

    transition: all 0.2s;

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

    .spread-btn {
      width: 25px;
      height: 18px;
      margin: auto 0;
    }
    .close-btn {
      width: 18px;
      height: 18px;
      margin: auto 0;
    }
  `;


  const [step, setStep] = useState(0);
  const changeContent = (index) => {
    setStep(index)
  }
  const contents = [
    {
      content:
        <div>
          <span
            className='edit-plan'
            onClick={changeContent(1)}> ✔️ 저장한 플랜이 있어요!</span>
          <EditBtn>기존 플랜 수정하기</EditBtn>
          <span
            className='make-plan'
            onClick={changeContent(2)}> ✨ 플랜을 만들래요!</span>
          <NewBtn>새롭게 플랜 세우기</NewBtn>
        </div>
    },
    {
      content:
        <div>
          <span
            className='edit-plan'> ✔️ 저장한 플랜이 있어요!</span>
          <EditBtn>기존 플랜 수정하기</EditBtn>
          
        </div>
    },
  ]

  return (
    <>
      <ContainerSheet id="sheet">
        <SheetHeader>
          <img
            className='spread-btn'
            onClick={isHigh ? setHeightLower : setHeightHigher}
            src={isHigh ? IconBreif : IconSpread} />
          {/* <span className="title">{props.title}</span> */}
          <img
            className='close-btn'
            onClick={props.closeSheet}
            src={IconClose} />
        </SheetHeader>

        <WrapContent>
          {contents[0].content}
        </WrapContent>

      </ContainerSheet>
    </>
  )
}

export default BottomSheet;