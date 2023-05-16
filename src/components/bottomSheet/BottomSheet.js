import { transform } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import IconBack from '../../asset/IconBack.png';
import IconClose from '../../asset/IconClose.png';
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLock from '../../asset/IconLock.png';
import iconUnlock from '../../asset/IconUnlock.png';

import {
  SheetHeader,
  WrapContent,
  EditBtn,
  NewBtn,
  WrapCard,
  WrapTop,
  WrapTitle,
  PlanDiv,
  WrapLine,
  WrapDate,
  WrapSelect,
  WrapTimeButton,
  WrapBtn,
  DeleteAllButton,
  WrapModal,

} from './BottomSheetStyle';
import PlanCard from '../../components/planCard/PlanCard';
import SavedPlanCard from '../../components/savedPlanCard/SavedPlanCard';

import styled, { keyframes } from "styled-components";
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { dayPageContentState, planDayState, planIdState, } from '../../recoil/state';


const BottomSheet = (props) => {

  // const slideDown = keyframes`
  //   from {
  //     transform: translateY(80vh);
  //   }
  //   to {
  //     transform: translateY(40vh);
  //   }
  // `;
  // const slideUp = keyframes`
  //   from {
  //     transform: translateY(40vh);
  //   }
  //   to {
  //     transform: translateY(0);
  //   }
  // `;

  const [height, setHeight] = useState(43);
  const [isHigh, setIsHigh] = useState(false);
  const setHeightHigher = () => {
    setHeight(80);
    setIsHigh(true);
  }
  const setHeightLower = () => {
    setHeight(43);
    setIsHigh(false);
  }

  const ContainerSheet = styled.div`
    width: 100%;
    max-width: 500px;
    height: ${height}vh;
    background-color: white;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 15px 15px 0 0;

    z-index: 3;

    position: fixed;
    bottom: 0;

    transition: all 1s;
  `;

  const closeSheet = () => {
    setHeight(0);
    props.closeSheet();
  }


  const [step, setStep] = useState(0);
  const changeContent = (index) => {
    setStep(index);
  }
  const goBack = () => {
    setStep(prev=> {
      if(prev>0) return prev-1;
      else return prev;
    });
  }


  const [myPlansInfo, setMyPlansInfo] = useState([]);
  const getMyPlansInfo = () => {

    axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan', {
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        setMyPlansInfo(response.data);
        changeContent(1);
      });
  }

  const location = useLocation();
  const planSetting = location.state.planSetting;
  const [planData, setPlanData] = useState(planSetting);

  const planId = useRecoilState(planIdState);
  const setPlanId = useSetRecoilState(planIdState);

  const token = localStorage.getItem('token');
  const postPlanData = () => {
    axios.post("http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan", planSetting,
      {
        headers: {
          Authorization: token
        },
      })
      .then(res => {
        // console.log(res.data);
        setPlanId(res.data.split(' ')[0]);
        changeContent(2);

      }).catch(err => {
        console.log(err);
      });

  }





  //확인용------------------------------------------------------------
  useEffect(() => {

    console.log("myPlansInfo", myPlansInfo);
    console.log("planId", planId[0]);
    console.log("planData", planData);

    console.log("planDay", planDayNum);

  }, [planId])


  const removeAll = () => {

  }
  //----------------------------------------------------------------





  const getPlanData = (card) => {

    const plan = myPlansInfo.find((plan) => plan.id === card.id);

    axios.get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${plan.id}`, {
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        setPlanId(plan.id);
        setPlanData(response.data);
        planData.likesCount = response.data.likesCount;
        planData.opened = response.data.opened;
        planData.planTravels = response.data.planTravels;

        setDayPageContent(planData.planTravels);
      });

    changeContent(2);
  }

  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = (card) => {

    setIsShowModal(true);

    setDeleteTitle(card.title);
    setDeleteId(card.id);
  }
  const hideModal = () => {
    setIsShowModal(false);
  }

  const [deleteTitle, setDeleteTitle] = useState("무제");
  const [deleteId, setDeleteId] = useState(-1);
  const updateMyPlansInfo = () => {
    axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        setMyPlansInfo(response.data);
      });
  }
  const deletePlanCard = () => {

    const deleteUrl = `http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${deleteId}`;

    axios.delete(deleteUrl,
      {
        headers: {
          Authorization: token
        },
      })
      .then(res => {
        console.log(res.data);
        updateMyPlansInfo();
        hideModal();

      }).catch(err => {
        console.log(err);
      });

    setIsShowModal(false);
  }





  const setTitle = () => {
    let newTitle = document.querySelector('.title-input').value;

    if (newTitle === "") {
      newTitle = "(제목없음)";
    }

    planData.title = newTitle;
  }

  const savePlanData = () => {

    setTitle();

    console.log(

      {
        "title": planData.title,
        "isOpened": planData.opened,
      }
    )
    axios.patch(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${planId[0]}`, {
      "title": planData.title,
      "isOpened": planData.opened,
    },
      {
        headers: {
          Authorization: token,
        }
      })
      .then(response => {
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    planData.planTravels = [];
    // console.log("propsCard", props.card);
  }, [])
  





  useEffect(() => {
    countDays();
    setIsOpen(planData.opened);

    console.log("planData변경됨", planData);
  }, [planData])

  const [isOpen, setIsOpen] = useState(planData.opened);
  const setPlanOpen = () => {
    setIsOpen(true);
    planData.opened = true;
  }
  const setPlanNotOpen = () => {
    setIsOpen(false);
    planData.opened = false;
  }

  const [dayPageNum, setDayPageNum] = useState(1);  const [planDayNum, setPlanDayNum] = useRecoilState(planDayState);
  const goNextDayPage = () => {
    if (dayPageNum < planData.days) {
      setDayPageNum((prev) => prev + 1);
    }
  }
  const goPrevDayPage = () => {
    if (dayPageNum > 1) {
      setDayPageNum((prev) => prev - 1);
    }
  }
  useEffect(() => {
    setPlanDayNum(dayPageNum);
  }, [dayPageNum]);

  
  const [dayPageContent, setDayPageContent] = useRecoilState(dayPageContentState);
  const [specificDayContent, setSpecificDayContent] = useState([]);

  useEffect(() => {
    console.log("현재 모든 컨텐츠", dayPageContent);
    setSpecificDayContent(dayPageContent.filter((travel) => travel.day === dayPageNum));
  }, [dayPageNum, dayPageContent])

  const onTravelRemove = (id) => {
    
    axios.delete(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/plan_travel/${id}`,
      {
        headers: {
          Authorization: token
        },
      })
      .then(res => {
        console.log(res.data);
        setDayPageContent(dayPageContent.filter((card)=> card.id !== id));
      }).catch(err => {
        console.log(err);
      });
  }

  const [planTravelId, setPlanTravelId] = useState(-1);
  const [checkedTime, setCheckedTime] = useState("00:00:00");
  const onClickTime = (card) => {
    setPlanTravelId(card.id);
    setCheckedTime(card.startTime);
    changeContent(3);

    // const amPmElement = document.getElementsByName('ampm');

    // amPmElement.addEventListener('change', )
  }

  useEffect(()=> {
    const prevTimeString = checkedTime.split(":");
    if(prevTimeString[0] < 12) {
      document.getElementsByName('ampm').forEach((node)=> {
        if(node.value === '오전') node.checked=true;
      })
    } else {
      document.getElementsByName('ampm').forEach((node)=> {
        if(node.value === '오후') node.checked=true;
      })
    }
    document.getElementsByName('hour').forEach((node)=> {
      if(node.value === prevTimeString[0]) node.checked=true;
    })
    document.getElementsByName('minute').forEach((node)=> {
      if(node.value === prevTimeString[1]) node.checked=true;
    })
  },[onClickTime, checkedTime, height])

  const saveTime = () => {

    let tempPlanTravelTime = {};
    document.getElementsByName('ampm').forEach((node) => {
      if(node.checked) {
        tempPlanTravelTime.ampm= node.value;
      }
    })
    document.getElementsByName('hour').forEach((node) => {
      // if(node.checked) {
      //   tempPlanTravelTime.hour= node.value;
      // }
      if(node.checked && tempPlanTravelTime.ampm==='오전') {
        tempPlanTravelTime.hour= node.value;
      } else {
        tempPlanTravelTime.hour= (node.value);
      }
    })
    document.getElementsByName('minute').forEach((node) => {
      if(node.checked) {
        tempPlanTravelTime.minute= node.value;
      }
    })

    axios.patch(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/plan_travel/${planTravelId}`,
    {
      "startTime" : `${tempPlanTravelTime.hour.toString()}:${tempPlanTravelTime.minute.toString()}:00`,
    },
    {
      headers: {
        Authorization: token
      },
    })
    .then(res=> {
      
      axios.get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${planId[0]}`, {
        headers: {
          Authorization: token
        }
      })
        .then(response => {
          setDayPageContent(response.data.planTravels);
          console.log(tempPlanTravelTime);
        });
      changeContent(2);
    }).catch(err => {
      console.log(`${tempPlanTravelTime.hour.toString()}:${tempPlanTravelTime.minute.toString()}:00`);
      console.log(err);
    })

  }

  useEffect(()=> {

    axios.get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${planId[0]}`, {
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        planData.planTravels = response.data.planTravels;

        setDayPageContent(planData.planTravels);
      });
    
  }, [planTravelId])

  const countDays = () => {

    const startDate = planData.startDate.split('-');
    const endDate = planData.endDate.split('-');

    if (startDate[0] === endDate[0]
      && startDate[1] === endDate[1]) {
      planData.days = parseInt(endDate[2]) - parseInt(startDate[2]) + 1;
    }
    else {

      let monthDay = 0;
      
      switch (startDate[1]) {
        case "01": case "03": case "05": case "07": case "08": case "10": case "12": monthDay = 31; break;
        case "04": case "06": case "09": case "11": monthDay = 30; break;
        case "02": monthDay = 28; break;
        default: console.log("error");
      }

      planData.days = (monthDay - parseInt(startDate[2])) + parseInt(endDate[2]) + 1;
    }
  }

  const contents = [
    {
      content:
        <div>
          <span
            className='edit-plan'> ✔️ 저장한 플랜이 있어요!</span>
          <EditBtn onClick={getMyPlansInfo}>기존 플랜 수정하기</EditBtn>
          <span
            className='make-plan'> ✨ 플랜을 만들래요!</span>
          <NewBtn onClick={() => postPlanData()}>새롭게 플랜 세우기</NewBtn>
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
            {myPlansInfo && myPlansInfo.slice(0).reverse().map(card => (
              <SavedPlanCard card={card} onClick={() => getPlanData(card)} showModal={() => showModal(card)} />
            ))}
          </WrapCard>
          {isShowModal &&
            <WrapModal>
              <div className='modal-background'>
                <div className='text'>{deleteTitle} 플랜을 <br />삭제하시겠습니까?</div>
                <div className='line' />
                <div className='button'>
                  <span onClick={hideModal}>취소</span><span className='between-btn'>|</span><span onClick={deletePlanCard}>확인</span>
                </div>

              </div>
            </WrapModal>
          }


        </div>
    },
    {
      content:
        <div>
          <WrapTop>
            <img src={prevBtn} className='prev_button' onClick={goPrevDayPage} />
            <p className='day'>DAY {dayPageNum}</p>
            <img src={nextBtn} className='next_button' onClick={goNextDayPage} />
          </WrapTop>
          <WrapTitle>
            <input type="text" name="title" placeholder='플랜 제목을 입력해주세요.' className="title-input" defaultValue={planData.title} />
          </WrapTitle>
          <PlanDiv className="plan-div">
            <WrapLine>
              <WrapDate>
                <p>{planData.startDate} ~ {planData.endDate}</p>
              </WrapDate>
              <WrapBtn>
                {
                  isOpen ?
                    <img
                      src={iconUnlock}
                      className='icon_unlock'
                      onClick={setPlanNotOpen}
                    /> :
                    <img
                      src={iconLock}
                      className='icon_lock'
                      onClick={setPlanOpen}
                    />
                }
                <div
                  className='save-btn'
                  onClick={savePlanData}
                >저장</div>
              </WrapBtn>
            </WrapLine>

            {specificDayContent && specificDayContent.map(card => (
              <PlanCard 
                card={card}
                onRemove={()=>onTravelRemove(card.id)}
                onClickTime={()=>onClickTime(card)}
                />
            ))}
            {specificDayContent.length === 0 ? null : <DeleteAllButton onClick={removeAll}>전체 삭제</DeleteAllButton>}
          </PlanDiv>
        </div>
    },
    {
      content:
        <div>
          <WrapTitle>
            <p className='title-p'>일정 시작</p>
            <div className='save-btn' onClick={saveTime}>저장</div>
          </WrapTitle>

          <WrapTimeButton>
            <WrapSelect>
              <p className="time-head">오전 / 오후</p>
              <label className="long-box">
                <input type="radio" name="ampm" value="오전"/>
                <div>오전</div>
              </label>
              <label className="long-box">
                <input type="radio" name="ampm" value="오후"/>
                <div>오후</div>
              </label>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head">시</p>
              <label className="short-box">
                <input type="radio" name="hour" value="01"/>
                <div>1</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="02"/>
                <div>2</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="03"/>
                <div>3</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="04"/>
                <div>4</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="05"/>
                <div>5</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="06"/>
                <div>6</div>
              </label>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head"></p>
              <label className="short-box">
                <input type="radio" name="hour" value="07"/>
                <div>7</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="08"/>
                <div>8</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="09"/>
                <div>9</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="10"/>
                <div>10</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="11"/>
                <div>11</div>
              </label>
              <label className="short-box">
                <input type="radio" name="hour" value="12"/>
                <div>12</div>
              </label>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head">분</p>
              <label className="short-box">
                <input type="radio" name="minute" value="00"/>
                <div>00</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="05"/>
                <div>05</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="10"/>
                <div>10</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="15"/>
                <div>15</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="20"/>
                <div>20</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="25"/>
                <div>25</div>
              </label>
            </WrapSelect>
            <WrapSelect>
              <p className="time-head"></p>
              <label className="short-box">
                <input type="radio" name="minute" value="30"/>
                <div>30</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="35"/>
                <div>35</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="40"/>
                <div>40</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="45"/>
                <div>45</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="50"/>
                <div>50</div>
              </label>
              <label className="short-box">
                <input type="radio" name="minute" value="55"/>
                <div>55</div>
              </label>
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
            className='back-btn'
            onClick={goBack}
            src={IconBack} />
          <span
            className='spread-btn'
            onClick={isHigh ? setHeightLower : setHeightHigher}
            >
              {isHigh ? "내리기" : "펼치기"}
            </span>
          {/* <span className="title">{props.title}</span> */}
          <img
            className='close-btn'
            onClick={closeSheet}
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