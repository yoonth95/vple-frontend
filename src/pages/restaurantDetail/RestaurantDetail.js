import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import React, { useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import Review from '../../components/review/Review';

import {
    ImageWrap,
    InfoDiv,
    TagContainer,
    ClipDiv,
    ClipButtonW,
    ClipButtonG,
    WrapInformation,
    WrapRunTime,
    MenuDiv,
    MenuTitle,
    MoreButton,
    ReviewDiv,
    ReviewTitle,
    WriteReviewBtn,
    ReviewBar,
    PercentBar,
    TagDiv,
    UpButton,


} from '../../pages/restaurantDetail/RestaurantDetailStyle';
import { ButtonStyle } from '../../styles/ButtonStyle';
import IconMapPointer from '../../asset/IconMapPointer.png';
import IconClock from '../../asset/IconClock.png';
import MenuCardButton from '../../components/menuCardButton/MenuCardButton';
import IconMore from '../../asset/IconMore.png';
import IconUp from '../../asset/IconUp.png';

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
        { review2: 4 },
        { review1: 5 },
        { review2: 6 },
    ];

    //스크롤
    const reviewRef = useRef(null);
    const scrollToUp = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <DetailHeader title="식당" />
            <ImageWrap>
                <img src={tempGuide} className='guide-image' />
            </ImageWrap>
            <InfoDiv>
                <div className="titleWrap">{"[위샐러듀]"}</div>
                <ClipDiv>
                    <ButtonStyle onClick={() => setClip(!isClip)}>
                        {isClip ? <ClipButtonG /> : <ClipButtonW />}
                    </ButtonStyle>
                </ClipDiv>
                <TagContainer>
                    <TagDiv>비건</TagDiv>
                    <TagDiv>락토</TagDiv>
                </TagContainer>
                <div className="writerWrap">{"위샐러듀는 그리스, 이스라엘, 레바논등의 가정식 전문점으로 한끼 건강한 지중해 가정식을 제공하기 위해 노력합니다. 위샐러듀는 그리스, 이스라엘, 레바논등의 가정식 전문점입니다."}</div>
                <div className="partition" />

                <WrapInformation>
                    <img src={IconMapPointer} className="icon" />
                    <div className="info">서울 서대문구 이화여대길 52-31</div>
                </WrapInformation>
                <WrapInformation>
                    <img src={IconClock} className="icon" />
                    <div className="info">영업시간</div>
                    <WrapRunTime>
                        <p className="day">월 - 토</p><p className="hour">10:00 - 20:00</p>
                    </WrapRunTime>
                    <WrapRunTime>
                        <p className="day">일요일</p><p className="hour">휴무</p>
                    </WrapRunTime>
                </WrapInformation>
            </InfoDiv>


            <MenuDiv>
                <MenuTitle>
                    <div className='titleDeco' />
                    <h3 className='recommendTitle'>메뉴</h3>
                </MenuTitle>
                <ul>
                    {cards.map(card => (
                        <MenuCardButton
                            menu={card.menu}
                            price={card.price}
                        />
                    ))}
                </ul>
                <MoreButton><img src={IconMore} className="iconMore" />더보기</MoreButton>
            </MenuDiv>

            <ReviewDiv ref={reviewRef}>
                <div className='container'>
                    <ReviewTitle>
                        <div className='titleDeco' />
                        <h3 className='recommendTitle'>후기</h3>
                        <p className='number'>(14)</p>
                    </ReviewTitle>
                    <div className='align-right'>
                        
                    <WriteReviewBtn>작성하기</WriteReviewBtn>
                    </div>
                </div>

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

                <div className="partition" />
                {reviews.map(review => (
                    <Review />
                ))}

                <UpButton onClick={scrollToUp}>
                    <img src={IconUp} className='icon' /> 맨 위로
                </UpButton>


            </ReviewDiv>


        </>
    );
}