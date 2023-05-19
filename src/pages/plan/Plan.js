import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import TitleHeader from '../../components/titleHeader/TitleHeader';

import {
    LoginWindow,
    CalendarWrap,
    CountContainer,
    CountWrap,
    PlanContainer,
    SelectLocationOption,
    SetLocationWrap,
    SubmitButtonActive,
    SubmitButton,
} from "./PlanStyle";
import 'react-calendar/dist/Calendar.css';
import './CalendarCustom.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { planDataState, locationListState } from '../../recoil/state';

import lock from '../../asset/lock.png';

const Plan = () => {

    const token = localStorage.getItem('token');

    const [isAllChecked, setIsAllChecked] = useState(false);
    const [date, setDate] = useState(new Date, new Date);

    let [countPeople, setCountPeople] = useState(1);
    const plusPeopleNum = () => {
        setCountPeople(prevCount => prevCount + 1);
    }
    const minusPeopleNum = () => {
        if (countPeople > 1) {
            setCountPeople(prevCount => prevCount - 1);
        }
    }

    const [planData, setPlanData] = useRecoilState(planDataState);
    
    const locationList = useRecoilValue(locationListState);
    const [cityList, setCityList] = useState(['전체']);

    const getList = () => {
        var index = locationList.findIndex((prop) => {
            if (prop.district == document.getElementById('selected_district').value) return true;
        })
        setCityList(locationList[index].city);

        setPlanData(plan => ({
            ...plan,
            district: document.getElementById('selected_district').value,
            city: document.getElementById('selected_city').value, 
        }))
    }

    const formatDate = (dateStr) => {
        if (typeof (dateStr) !== "undefined") {
            let str = dateStr.toString();
            let words = str.split(' ');

            let year = "";
            let month = "";
            let day = "";

            year = words[3];
            switch (words[1]) {
                case "Jan": month = "01"; break;
                case "Feb": month = "02"; break;
                case "Mar": month = "03"; break;
                case "Apr": month = "04"; break;
                case "May": month = "05"; break;
                case "Jun": month = "06"; break;
                case "Jul": month = "07"; break;
                case "Aug": month = "08"; break;
                case "Sep": month = "09"; break;
                case "Oct": month = "10"; break;
                case "Nov": month = "11"; break;
                case "Dec": month = "12"; break;
                default: console.log("error");
            }
            day = words[2];

            return (year + "-" + month + "-" + day);
        }

    }
    const planSetting = {
        // "title": `${selectedCity} ${selectedProvince} 여행`,
        // "startDate": formatDate(date[0]),
        // "endDate": formatDate(date[1]),
        // "district": selectedCity,
        // "city": selectedProvince,
        // "peopleNum": countPeople,
    }

    useEffect(() => {
        console.log("planData", planData);
    }, [planData])


    useEffect(() => {

        if (date.length > 1) {

            setPlanData(plan => ({
                ...plan,
                startDate: formatDate(date[0]),
                endDate: formatDate(date[1]),
            }))
            setIsAllChecked(true);
        }

    }, [date])

    const navigate = useNavigate();
    const onClickRouteMap = () => {
        navigate('/plan/map');
    }
    const routerLogin = () => {
        navigate('/login')
        window.scrollTo(0, 0)
    }


    return (
        <>
            {token==="null" && <LoginWindow>
                <div className='modal-background'>
                    <img src={lock}/>
                    <div className='text-bold'>로그인이 필요합니다.</div>
                    <div className="text">해당 기능 사용을 위해 <br/> 계정을 로그인 해주세요.</div>
                    <div className='line' />
                    <div className='button'>
                        <span onClick={routerLogin}>확인</span>
                    </div>
                </div>
            </LoginWindow> }

            <TitleHeader title="플랜 기본 설정" />
            <PlanContainer>
                <SetLocationWrap>
                    <p className='trip-location'>여행지</p>
                    <SelectLocationOption>
                        <select className='select-box' id="selected_district" onChange={getList}>
                            {locationList.map((region) => {
                                return <option className='option'>{region.district}</option>
                            })}
                        </select>
                        <select className='select-box' id="selected_city" onChange={getList}>
                            {cityList.map((location) => {
                                return <option className='option'>{location}</option>
                            })}
                        </select>
                    </SelectLocationOption>
                </SetLocationWrap>
                <CalendarWrap>
                    <Calendar onChange={setDate} value={date} defaultValue={date} selectRange={true} />
                </CalendarWrap>
                <CountWrap>
                    <span className='people'>인원</span>
                    <CountContainer>
                        <div className='set-btn' onClick={minusPeopleNum}>-</div>
                        <span className='count-people' >{countPeople}명</span>
                        <div className='set-btn' onClick={plusPeopleNum}>+</div>
                    </CountContainer>
                </CountWrap>

                {isAllChecked ?
                    <SubmitButtonActive
                        onClick={onClickRouteMap}>
                        <span>확인</span>
                    </SubmitButtonActive>
                    :
                    <SubmitButton>
                        <span>확인</span>
                    </SubmitButton>
                }

            </PlanContainer>
        </>
    )
}

export default Plan