import { transform } from 'framer-motion';
import React, { useState } from 'react';
import IconBreif from '../../asset/IconBreif.png';
import IconClose from '../../asset/IconClose.png';
import IconSpread from '../../asset/IconSpread.png';
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLineLock from '../../asset/IconLineLock.png';

import {
  WrapContent,
  EditBtn,
  NewBtn,
  WrapCard,
  WrapTop,
  WrapTitle,
  PlanDiv,
  WrapLine,
  WrapTime,
  WrapSelect,
  WrapTimeButton,
  WrapBtn,
  TimeButton,
  DeleteAllButton,



} from './BottomSheetStyle';
import PlanCard from '../../components/planCard/PlanCard';
import SavedPlanCard from '../../components/savedPlanCard/SavedPlanCard';

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
    max-width: 500px;
    height: ${height}vh;
    background-color: white;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 15px 15px 0 0;

    z-index: 4;

    position: fixed;
    bottom: 0;

    transition: all 0.2s;

    // animation-name: ${slideUp};
    // animation-duration: 0.2s;
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
    setStep(index);
  }

  const [cards, setCards] = useState([
    { id: 1, title: "장", time: "1시간 0분" },
    { id: 2, title: "장소", time: "2시간 0분" },
    { id: 3, title: "장소이름", time: "3시간 0분" },
    { id: 4, title: "장소이름", time: "4시간 0분" },
    { id: 5, title: "장소이름", time: "5시간 0분" },
  ]);

  //deleteButton
  const onRemove = id => {
    setCards(cards.filter(card => card.id !== id));
  }
  const removeAll = () => {
    const empty = [];
    setCards(empty);
  }


  const contents = [
    {
      content:
        <div>
          <span
            className='edit-plan'> ✔️ 저장한 플랜이 있어요!</span>
          <EditBtn onClick={() => changeContent(1)}>기존 플랜 수정하기</EditBtn>
          <span
            className='make-plan'> ✨ 플랜을 만들래요!</span>
          <NewBtn onClick={() => changeContent(2)}>새롭게 플랜 세우기</NewBtn>
        </div>
    },
    {
      content:
        <div>
          <WrapTop>
            <p className='saved-plan'>저장된 나의 플랜</p>
          </WrapTop>
          <span
            className='edit-plan-small'>수정할 플랜을 선택해주세요.</span>
          <WrapCard>
            {cards.map(card => (
              <SavedPlanCard card={card} onRemove={onRemove} />
            ))}
          </WrapCard>
        </div>
    },
    {
      content:
        <div>
          <WrapTop>
            <img src={prevBtn} className='prev_button' />
            <p className='day'>DAY 1</p>
            <img src={nextBtn} className='next_button' />
          </WrapTop>
          <WrapTitle>
            <input type="text" name="title" placeholder='플랜 제목을 입력해주세요.' className="title-input" />
            <p>2023.02.25 ~ 02.28</p>
          </WrapTitle>
          <PlanDiv className="plan-div">
            <WrapLine>
              <WrapTime>
                <p className='start_time'>일정 시작 |
                  <TimeButton onClick={() => changeContent(3)}>오전 10:00</TimeButton></p>
              </WrapTime>
              <WrapBtn>
                <img src={iconLineLock} className='icon_lock' />
                <div className='save-btn'>저장</div>
              </WrapBtn>
            </WrapLine>

            {cards.map(card => (
              <PlanCard card={card} onRemove={onRemove} />
            ))}
            <DeleteAllButton onClick={removeAll}>전체 삭제</DeleteAllButton>
          </PlanDiv>
        </div>
    },
    {
      content:
        <div>
          <WrapTop>
            <img src={prevBtn} className='prev_button' />
            <p className='day'>DAY 1</p>
            <img src={nextBtn} className='next_button' />
          </WrapTop>
          <WrapTitle>
            <p className='title-p'>일정 시작</p>
            <div className='save-btn'>저장</div>
          </WrapTitle>

          <WrapTimeButton>
            <WrapSelect>
              <p className="time-head">오전 / 오후</p>
              <div className="long-box">오전</div>
              <div className="long-box">오후</div>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head">시</p>
              <div className="short-box">1</div>
              <div className="short-box">2</div>
              <div className="short-box">3</div>
              <div className="short-box">4</div>
              <div className="short-box">5</div>
              <div className="short-box">6</div>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head"></p>
              <div className="short-box">7</div>
              <div className="short-box">8</div>
              <div className="short-box">9</div>
              <div className="short-box">10</div>
              <div className="short-box">11</div>
              <div className="short-box">12</div>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head">분</p>
              <div className="short-box">00</div>
              <div className="short-box">05</div>
              <div className="short-box">10</div>
              <div className="short-box">15</div>
              <div className="short-box">20</div>
              <div className="short-box">25</div>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head"></p>
              <div className="short-box">30</div>
              <div className="short-box">35</div>
              <div className="short-box">40</div>
              <div className="short-box">45</div>
              <div className="short-box">50</div>
              <div className="short-box">55</div>
            </WrapSelect>
          </WrapTimeButton>

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
          {contents[step].content}
        </WrapContent>

      </ContainerSheet>
    </>
  )
}

export default BottomSheet;