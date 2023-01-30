import React, {useState} from 'react';
import Calendar from 'react-calendar';
import Header from '../header/Header'
import {
    CalendarWrap,
    CountContainer,
    CountWrap,
    PlanContainer,
    SelectLocationOption,
    SetLocationWrap, SubmitButton,
} from "./PlanStyle";
import 'react-calendar/dist/Calendar.css';
import './CalendarCustom.css';
import {useNavigate} from "react-router-dom";
const Plan = () => {
    const [date, setDate] = useState(new Date);
    let [count, setCount] = useState(1);
    const onClickPlus = () => {
        setCount(prevCount => prevCount+1);
    }
    const onClickMinus = () => {
        if( count <= 1){
            return null
        } else {
            setCount(prevCount => prevCount-1);
        }
    }

    let navigate = useNavigate();
    const onClickRouteMap = () => {
        navigate('/plan/map')
    }
    const provinceList = ['서울','경기도','인천','충청북도','충청남도','전라북도','전라남도,','강원도','경상북도','경상남도'];
    const locationList = ['김포시','의정부시','인천광역시','부산','목포시','강릉시','대구광역시'];
    return(
        <>
            <Header/>
            <PlanContainer>
                <p className='basic-setting'>기본 설정</p>
                <SetLocationWrap>
                    <p className='trip-location'>여행지</p>
                    <SelectLocationOption>
                        <select className='select-box'>
                            {provinceList.map( (province,index) => {
                                return <option className='option'>{province}</option>
                            })}
                        </select>
                        <select className='select-box'>
                            {locationList.map( (city,index) => {
                                return <option className='option'>{city}</option>
                            })}
                        </select>
                    </SelectLocationOption>
                </SetLocationWrap>
                <CalendarWrap>
                    <Calendar onChange={setDate} value={date}  defaultValue={date} selectRange={true}/>
                </CalendarWrap>
                {/*{date.length > 0 ? (*/}
                {/*    <p className='text-center'>*/}
                {/*        <span className='bold'>Start:</span>{' '}*/}
                {/*        {date[0].toDateString()}*/}
                {/*        &nbsp;|&nbsp;*/}
                {/*        <span className='bold'>End:</span> {date[1].toDateString()}*/}
                {/*    </p>*/}
                {/*) : (*/}
                {/*    <p className='text-center'>*/}
                {/*        <span className='bold'>Default selected date:</span>{' '}*/}
                {/*        {date.toDateString()}*/}
                {/*    </p>*/}
                {/*)}*/}
                <CountWrap>
                    <span className='people'>인원</span>
                    <CountContainer>
                        <div className='set-btn' onClick={onClickMinus}>-</div>
                        <span className='count' >{count}명</span>
                        <div className='set-btn' onClick={onClickPlus}>+</div>
                    </CountContainer>
                </CountWrap>
                <SubmitButton onClick={onClickRouteMap}>
                    <span>확인</span>
                </SubmitButton>
            </PlanContainer>
        </>
    )
}

export default Plan