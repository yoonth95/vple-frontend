import DetailHeader from '../../components/titleHeader/TitleHeader'
import React, { useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
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

export default function GuideDetail() {

    //const location = useLocation();

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

    //스크롤
    const scrollRef = useRef(null);
    const scrollToUp = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [visible, setVisible] = useState(false);

    return (
        <>
            <DetailHeader title="식당" />

            <ImageContainer ref={scrollRef}>
                <img className='guide-image' />
            </ImageContainer>

            <WrapInfo>
                <div className="titleWrap">{"연회바루"}</div>
                <ClipDiv
                    onClick={() => setClip(!isClip)}>
                    {isClip ? <ClipButtonG /> : <ClipButtonW />}
                </ClipDiv>
                <TagContainer>
                    <div className='tag'>비건</div>
                    <div className='tag'>락토</div>
                </TagContainer>
                <div className="writerWrap">{"위샐러듀는 그리스, 이스라엘, 레바논등의 가정식 전문점으로 한끼 건강한 지중해 가정식을 제공하기 위해 노력합니다. 위샐러듀는 그리스, 이스라엘, 레바논등의 가정식 전문점입니다."}</div>
                <div className="partition" />

                <WrapIconText>
                    <img src={IconMapPointer} className="icon" />
                    <div className="text">서울 서대문구 이화여대길 52-31</div>
                </WrapIconText>
                <WrapIconText>
                    <img src={IconClock} className="icon" />
                    <div className="text">영업시간</div>
                    <WrapRunTime>
                        <p className="day">월 - 토</p><p className="hour">10:00 - 20:00</p>
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
                        cards.map((value, index) => {
                            return (
                                <WrapCard>
                                    <img className='img-photo' />
                                    <div className='div-content'>
                                        <span className='plan-title'>{value.menu}</span>
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
                        <p className='number'>(14)</p>
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