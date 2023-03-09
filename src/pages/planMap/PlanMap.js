import React, { useEffect, useState } from 'react';
import { getMapItems } from '../../recoil/state';
import Header from '../../components/header/Header';
import TitleHeader from '../../components/titleHeader/TitleHeader';
import {
    ContainerMap,
    WrapMoreButton,
    InputContainer,
} from "./PlanMapStyle";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLineLock from '../../asset/IconLineLock.png';
import BottomSheet from '../../components/bottomSheet/BottomSheet';

import { keyframes } from 'styled-components';
// import Axios from 'axios';


// class ApiClient {

//     async searchApi(keyword) {
//         return await Axios.get(`https://vple-backend.all.gagark.shop/api/map/search?keyword=${keyword}`)
//     }
// }

// const client = new ApiClient()
const PlanMap = () => {

    //시트
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const openSheet = () => setIsSheetOpen(true);
    const closeSheet = () => setIsSheetOpen(false);


    const [searchItem, setSearchItem] = useState('');

    //플랜
    const [cards, setCards] = useState([
        { id: 1, title: "장", time: "1시간 0분" },
        { id: 2, title: "장소", time: "2시간 0분" },
        { id: 3, title: "장소이름", time: "3시간 0분" },
        { id: 4, title: "장소이름", time: "4시간 0분" },
        { id: 5, title: "장소이름", time: "5시간 0분" },
    ]);

    // places
    const [centerCoordinate, setCenterCoordinate] = useState({
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
    })
    const [places, setPlaces] = useState([])

    //timepicker
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const closeModal = () => {
    //     setIsModalOpen(false);
    // }
    // const openModal = () => {
    //     setIsModalOpen(true);
    // }
    // const [isRequesting, setIsRequesting] = useState(false)

    // //일정 시작 시간 설정
    const [time, setTime] = useState('오전')
    const [hour, setHour] = useState('10')
    const [minute, setMinute] = useState('00')

    //deleteButton
    const onRemove = id => {
        setCards(cards.filter(card => card.id !== id));
    }
    const removeAll = () => {
        const empty = [];
        setCards(empty);
    }

    const onChangeSearch = (e) => {
        setSearchItem(e.target.value);
    }

    // const onClickListener = () => {
    //     if (!isRequesting) {
    //         if (searchItem != '') {
    //             setIsRequesting(true)
    //             client.searchApi(searchItem).then((res) => {
    //                 const places = res.data
    //                 setPlaces(places);
    //                 const lates = places.map((place) => Number(place.latitude))
    //                 const lat = (lates.reduce((a, b) => a + b, 0)) / lates.length
    //                 const longs = places.map((place) => Number(place.longitude))
    //                 const lng = (longs.reduce((a, b) => a + b, 0)) / longs.length


    //                 setCenterCoordinate(
    //                     {
    //                         lat: lng,
    //                         lng: lat,
    //                     }
    //                 )
    //                 setIsRequesting(false)
    //             })
    //         }
    //     }
    // }


    return (
        <>
            <TitleHeader title="플랜 세우기" />
            <ContainerMap className='map-container'>
                <InputContainer>
                    <input type='text' placeholder='일정에 추가할 장소를 검색하세요' className='search-location'
                        onChange={onChangeSearch} />
                    <button className='search-btn'
                    // onClick={() => onClickListener()}
                    >검색</button>
                </InputContainer>
                <Map // 지도를 표시할 Container
                    center={centerCoordinate}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "100vh",
                    }}
                    level={8} // 지도의 확대 레벨
                >
                    {
                        places.map((place) => (
                            <MapMarker position={{
                                lat: place.longitude,
                                lng: place.latitude,
                            }}
                            />
                        ))
                    }

                </Map>

                <WrapMoreButton>
                    <div className='button' onClick={openSheet}>🌱 비건 여행 플랜 시작</div>
                </WrapMoreButton>

                {isSheetOpen && 
                    <BottomSheet
                        title="플랜 작성하기"
                        closeSheet={() => setIsSheetOpen(false)}
                        />
                }

            </ContainerMap>




        </>
    )
}
export default PlanMap;