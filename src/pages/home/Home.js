import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import {
    ResponsiveDiv,
    SearchContainer,
    ButtonWrap,
    ItemsBtn,
    CardSection,
    TitleWrap,
    WrapBackButton,
    CardContainer,
    CardWrap,
    RecommendContainer,
    RecommendTitleWrap,
} from "./HomeStyle";
import arrow from '../../asset/arrow.png'
import GuideCardButton from '../../components/guideCardButton/GuideCardButton';
import RestaurantCardButton from '../../components/restaurantCardButton/RestaurantCardButton';
import axios from 'axios'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getAllRecommandRestaurantUrl } from '../../recoil/state';
import { useState, useEffect } from 'react';

const Home = () => {

    const [myInfo, setMyInfo] = useState([]);
    const token = localStorage.getItem('token');

    const [recommendGuideList, setRecommendGuide] = useState([]);
    const restaurantInfo = useRecoilValue(getAllRecommandRestaurantUrl);

    useEffect(() => {
        console.log("토큰", token);

        if (token != "null") {
            axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/me', {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    setMyInfo(response.data);
                    //console.log(myInfo);
                }).catch(err => {
                    console.log(err);
                  });

            axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/plan/like', {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    setRecommendGuide(response.data);
                }).catch(err => {
                    console.log(err);
                  });

        }

    }, []);

    //확인용===================================
    useEffect(()=> {
        console.log(recommendGuideList);
    },[recommendGuideList])


    let navigate = useNavigate();
    const routerPlan = () => {
        navigate('/plan')
        window.scrollTo(0, 0)
    }
    const routerGuide = () => {
        navigate('/view/guide', {
            state: {
                recommandGuideList: recommendGuideList,
                token: token,
            }
        })
        window.scrollTo(0, 0)
    }
    const routerFood = () => {
        navigate('/view/restaurant')
        window.scrollTo(0, 0)
    }
    const routerGuideDetail = (id) => {
        navigate('/guide/detail', {
            state: {
                id: id,
                token: token,
                title: '추천 가이드',
            }
        })
        window.scrollTo(0, 0)
    }
    const routerRestaurantDetail = (id) => {
        navigate('/restaurant/detail', {
            state: {
                id: id,
            }
        });
        window.scrollTo(0, 0)
    }

    // const move = () => {
    //     navigate('/guide/detail');
    //     window.scrollTo(0, 0)
    // }

    return (
        <>
            <Header />

            <SearchContainer>
                <p className='userWrap'>
                    <span>{myInfo.nickname}</span> 님,
                </p>
                <p className='textWrap'>비플 함께 친환경 여행을 떠나보세요!</p>
            </SearchContainer>

            <ButtonWrap>
                <ItemsBtn onClick={routerPlan}>🌱&nbsp;&nbsp;나만의 비건 여행 플랜 세우기</ItemsBtn>
            </ButtonWrap>

            <CardSection>
                <TitleWrap>
                    <div className='titleDeco' />
                    <h3 className='recommendGuide'>추천 가이드</h3>
                    <WrapBackButton onClick={routerGuide}>
                        <img src={arrow} className='arrow' />
                    </WrapBackButton>
                </TitleWrap>

                <CardContainer className="card-container">
                    {recommendGuideList.content && recommendGuideList.content.map(card => (
                        <CardWrap>
                            <GuideCardButton
                                title={card.title}
                                image={card.image}
                                onClick={() => routerGuideDetail(card.id)}
                            />
                        </CardWrap>

                    ))}
                </CardContainer>

            </CardSection>

            <RecommendContainer>
                <RecommendTitleWrap>
                    <div className='titleDeco' />
                    <h3 className='recommendTitle'>추천 식당</h3>
                    <WrapBackButton onClick={routerFood}>
                        <img src={arrow} className='arrow' />
                    </WrapBackButton>
                </RecommendTitleWrap>

                <CardContainer className="card-container">
                    {restaurantInfo.content.map(card => (
                        <CardWrap>
                            <RestaurantCardButton
                                id={card.id}
                                title={card.name}
                                image={card.image}
                                onClick={() => routerRestaurantDetail(card.id)}
                            />
                        </CardWrap>

                    ))}
                </CardContainer>
            </RecommendContainer>

            <ResponsiveDiv />
        </>
    )
}

export default Home;