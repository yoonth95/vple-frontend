import DetailHeader from '../titleHeader/TitleHeader'
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAllRecommandRestaurantUrl } from '../../recoil/state';
import restaurantId from '../../recoil/state';
import axios from 'axios';
import Review from '../review/Review';
import ReviewBoard from '../reviewBoard/ReviewBoard';

import {
    WrapView,
    
    HeaderContainer,
    HeaderTitleContainer,
    IconContainer,
    TitleContainer,

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
    WrapWriting,
    WriteReviewBtn,
    WrapReviewBars,
    ReviewBar,
    PercentBar,
    WrapReviews,
    TagDiv,
    UpButton,

} from './RestaurantDetailComStyle';
import IconMapPointer from '../../asset/IconMapPointer.png';
import IconClock from '../../asset/IconClock.png';

import IconMore from '../../asset/restaurant/IconMore.png';
import IconUp from '../../asset/restaurant/IconUp.png';
import arrow from '../../asset/arrow.png';
import camera from '../../asset/camera.png';
import BackArrow from '../../asset/back_arrow.png';

export default function RestaurantDetailCom(props) {

    const [isClip, setClip] = useState(false);

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

    const [detailRestaurant, setDetailRestaurant] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {

        axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant/' + props.id)
            .then(response => {
                setDetailRestaurant(response.data);
                setMenu(response.data.menus);

                console.log(response.data);
                
            });
    }, []);

    return (
        <WrapView>
            <HeaderContainer>
                <HeaderTitleContainer>
                    <IconContainer onClick={props.hide}>
                        <img src={BackArrow} className='back-arrow'/>
                    </IconContainer>
                    <TitleContainer>
                        <h3>추천 식당</h3>
                    </TitleContainer>
                </HeaderTitleContainer>
            </HeaderContainer>

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

                {visible && 
                    <WrapWriting>
                        <div className='review-content'>
                            <div className='camera'>
                                <img src={camera}/>
                            </div>
                            <div className='wrap-text'>
                                <input className='title' placeholder='제목을 입력해 주세요'></input>
                                <textarea className='text' placeholder='내용을 입력해 주세요'></textarea>
                            </div>
                        </div>

                        <div className='wrap-button'>
                            <div className='review-button'>"음식이 맛있어요"</div>
                            <div className='review-button'>"재료가 신선해요"</div>
                            <div className='review-button'>"직원이 친절해요"</div>
                        </div>
                        <div className='submit'>등록하기</div>
                        
                    </WrapWriting>
                }

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
        </WrapView>
    );
}