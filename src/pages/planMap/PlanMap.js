import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dayPageContentState, getMapItems, planDayState, planIdState } from '../../recoil/state';
import Header from '../../components/header/Header';
import TitleHeader from '../../components/titleHeader/TitleHeader';
import {
    ContainerMap,
    WrapSavedButton,
    WrapMoreButton,
    InputContainer,
    MapModal,
} from "./PlanMapStyle";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLock from '../../asset/IconLock.png';
import IconClipG from '../../asset/IconClipG.png';
import IconMark from "../../asset/IconMark.png";

import BottomSheet from '../../components/bottomSheet/BottomSheet';

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Url} from '../Url';

import { keyframes } from 'styled-components';
import RestaurantDetailCom from '../../components/restaurantDetailComponent/RestaurantDetailCom'


const PlanMap = () => {
    
    const token = localStorage.getItem('token');
    const [searchWord, setSearchWord] = useState('');
    const [searchedRestaurantList, setSearchedRestaurantList] = useState([]);

    const searchEvent = () => {

        if (searchWord !== '') {

            axios.get(`${Url}/api/map/search?keyword=${searchWord}`, {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    setSearchedRestaurantList(response.data);
                });

        }
        else {
            setSearchedRestaurantList([]);
            console.log("검색어가 없습니다.");
        }
    }

    const planId = useRecoilState(planIdState);
    const planDay = useRecoilState(planDayState);
    const setDayPageContent = useSetRecoilState(dayPageContentState);
    const addPlace = (place) => {

        axios.post(`${Url}/api/plan_travel`,
            {
                "name": place.name,
                "planId": planId[0].toString(),
                "image": place.image,
                "longitude": place.longitude,
                "latitude": place.latitude,
                "day": planDay[0].toString(),
                "startTime": "07:30:00",
            },
            // {
            //     headers: {
            //         Authorization: token
            //     }
            // }
            ).then(response => {
                console.log(place);
                console.log(response);

                axios.get(`${Url}/api/plan/${planId[0]}`
                ).then(res => {
                    console.log("새로 get한 데이터", res);
                    setDayPageContent(res.data.planTravels);
                })


            });
    }

    useEffect(() => {

        if (searchedRestaurantList.length !== 0) {
            setCenterCoordinate({
                lat: searchedRestaurantList[3].latitude,
                lng: searchedRestaurantList[3].longitude
            });

            console.log(searchedRestaurantList[3]);
            console.log(searchedRestaurantList[3].latitude, searchedRestaurantList[3].longitude);
            setLevel(7);
        }

    }, [searchedRestaurantList])

    //시트
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const openSheet = () => setIsSheetOpen(true);
    const closeSheet = () => setIsSheetOpen(false);

    // places
    const [centerCoordinate, setCenterCoordinate] = useState({
        // 지도의 중심좌표
        lat: 35.466826,
        lng: 127.8186567,
    })
    const [level, setLevel] = useState(13);

    const onChangeSearch = (e) => {
        setSearchWord(e.target.value);
    }

    const [isDetailView, setIsDetailView] = useState(false);
    const [restaurantId, setRestaurantId] = useState(-1);
    const showDetailView = (id) => {
        setIsDetailView(true);
        setRestaurantId(id);
        console.log("지도 식당", id);
    }
    const hideDetailView = () => {
        setIsDetailView(false);
    }


    return (
        <>
            {isDetailView ? <RestaurantDetailCom id={restaurantId} hide={hideDetailView}/> : <></>}
            <TitleHeader title="플랜 세우기" />
            <ContainerMap className='map-container'>


                <InputContainer>
                    <input type='text' placeholder='일정에 추가할 장소나 식당을 검색하세요' className='search-location'
                        onChange={onChangeSearch}
                    />
                    <button className='search-btn'
                        onClick={searchEvent}
                    >검색</button>
                </InputContainer>

                {isSheetOpen ?
                    <WrapSavedButton>
                        <div className='background-circle'>
                            <img src={IconClipG} alt="저장 목록 보기 버튼" className='clip-img' />
                        </div>
                    </WrapSavedButton>
                    :
                    <></>
                }

                <Map // 지도를 표시할 Container
                    center={centerCoordinate}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "100vh",
                    }}
                    level={level} // 지도의 확대 레벨
                >
                    {
                        searchedRestaurantList.map((place) => (
                            <>
                                <MapMarker
                                    position={{
                                        lat: place.latitude,
                                        lng: place.longitude,
                                    }}
                                // image={{
                                //     src: {IconMark},
                                //     size: {width: 22, height: 26},

                                // }}
                                // onClick={ }
                                >
                                </MapMarker>

                                <CustomOverlayMap
                                    position={{
                                        lat: place.latitude,
                                        lng: place.longitude,
                                    }}
                                    yAnchor={1.9}
                                >

                                    <MapModal>
                                        <div className='map-modal-detail'
                                            onClick={() => showDetailView(place.id)}
                                        >{place.name}</div>
                                        <div 
                                        className='map-modal-add' onClick={() => addPlace(place)}>추가</div>
                                    </MapModal>

                                </CustomOverlayMap>
                            </>

                        ))
                    }

                </Map>

                <WrapMoreButton>
                    <div className='button' onClick={openSheet}>🌱 비건 여행 플랜 시작</div>
                </WrapMoreButton>

                {isSheetOpen &&
                    <BottomSheet
                        title="플랜 작성하기"
                        closeSheet={() => closeSheet()}
                    />
                }

            </ContainerMap>




        </>
    )
}
export default PlanMap;

