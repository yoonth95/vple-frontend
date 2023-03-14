import DetailHeader from '../../components/titleHeader/TitleHeader'
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAllRecommandRestaurantUrl } from '../../recoil/state';
import restaurantId from '../../recoil/state';
import axios from 'axios';
import Review from '../../components/review/Review';
import ReviewBoard from '../../components/reviewBoard/ReviewBoard';

import {
    ImageContainer,
    WrapInfo,
    TagContainer,
    ClipDiv,
    ClipButtonW,
    ClipButtonG,
    WrapIconText,
    WrapRunTime,
    WrapMenu,
    MenuTitle,
    WrapCards,
    WrapCard,
    WrapButton,
    ReviewContainer,
    ReviewTitle,
    WriteReviewBtn,
    WrapReviewBars,
    ReviewBar,
    PercentBar,
    WrapReviews,
    TagDiv,
    UpButton,

} from '../../pages/restaurantDetail/RestaurantDetailStyle';
import IconMapPointer from '../../asset/IconMapPointer.png';
import IconClock from '../../asset/IconClock.png';

import IconMore from '../../asset/restaurant/IconMore.png';
import IconUp from '../../asset/restaurant/IconUp.png';
import arrow from '../../asset/arrow.png';

export default function RestaurantDetail() {

    const [isClip, setClip] = useState(false);

    const cards = [
        { menu: '징거', price: '165000' },
        { menu: '뽀빠이', price: '13000' },
        { menu: '레드풀', price: '12500' },
    ];

    const reviews = [
        { review1: 1 },
        { review2: 2 },
        { review1: 3 },
    ];

    const scrollToUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    const [visible, setVisible] = useState(false);

    //식당 상세 정보 url 받아오기
    const location = useLocation();
    const id = location.state.id;

    const [detailRestaurant, setDetailRestaurant] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant/' + id)
            .then(response => {
                setDetailRestaurant(response.data);
                setMenu(response.data.menus);
            });
    }, []);

    return (
        <>
            <DetailHeader title="식당" />

            <ImageContainer>
                <img className='guide-image' src={detailRestaurant.image}/>
            </ImageContainer>

            <WrapInfo>
                <div className="titleWrap">{detailRestaurant.name}</div>
                <ClipDiv
                    onClick={() => setClip(!isClip)}>
                    {isClip ? <ClipButtonG /> : <ClipButtonW />}
                </ClipDiv>
                <TagContainer>
                    {
                        detailRestaurant.veganTypes && detailRestaurant.veganTypes.map((type, index) => {
                            return (
                                <div className='tag'>{type}</div>
                            )
                        })
                    }
                </TagContainer>
                <div className="writerWrap">{detailRestaurant.introduction}</div>
                <div className="partition" />

                <WrapIconText>
                    <img src={IconMapPointer} className="icon" />
                    <div className="text">{detailRestaurant.address}</div>
                </WrapIconText>
                <WrapIconText>
                    <img src={IconClock} className="icon" />
                    <div className="text">영업시간</div>
                    <WrapRunTime>
                        <p className="day">{detailRestaurant.openTime}</p><p className="hour">10:00 - 20:00</p>
                    </WrapRunTime>
                    <WrapRunTime>
                        <p className="day">일요일</p><p className="hour">휴무</p>
                    </WrapRunTime>
                </WrapIconText>
            </WrapInfo>

            <WrapMenu>
                <MenuTitle>
                    <div className='titleDeco' />
                    <h3 className='recommendTitle'>메뉴</h3>
                    <img src={arrow} className='arrow-btn' />
                </MenuTitle>
                <WrapCards>
                    {
                        menu.map((value, index) => {
                            return (
                                <WrapCard>
                                    <img className='img-photo' src={value.image} />
                                    <div className='div-content'>
                                        <span className='plan-title'>{value.name}</span>
                                    </div>
                                </WrapCard>
                            )
                        })
                    }
                </WrapCards>
                <WrapButton>
                    <img src={IconMore} className="iconMore" />더보기
                </WrapButton>
            </WrapMenu>

            <ReviewContainer>
                <div className='container'>
                    <ReviewTitle>
                        <div className='titleDeco' />
                        <h3 className='recommendTitle'>후기</h3>
                        <p className='number'>({detailRestaurant.rating})</p>
                    </ReviewTitle>
                    <div className='write-btn'>
                        <WriteReviewBtn onClick={() => {
                            setVisible(!visible);
                        }}> {visible ? "취소하기" : "작성하기"}</WriteReviewBtn>
                    </div>
                </div>

                {visible && <ReviewBoard />}

                <WrapReviewBars>

                    <ReviewBar>
                        <PercentBar count={80}>
                            <div className='review'> 😊 "음식이 맛있어요"</div>
                        </PercentBar>
                    </ReviewBar>
                    <ReviewBar>
                        <PercentBar count={60}>
                            <div className='review'> 🌿 “재료가 신선해요”</div>
                        </PercentBar>
                    </ReviewBar>
                    <ReviewBar>
                        <PercentBar count={30}>
                            <div className='review'> 💖 “친절해요”</div>
                        </PercentBar>
                    </ReviewBar>

                </WrapReviewBars>

                {reviews.map(review => (
                    <Review />
                ))}

                <UpButton onClick={scrollToUp}>
                    <img src={IconUp} className='icon' /> 맨 위로
                </UpButton>

            </ReviewContainer>
        </>
    );
}