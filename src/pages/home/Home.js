import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import {
    SearchContainer,
    ButtonWrap,
    ItemsBtn,
    CardSection,
    TitleWrap,
    CardContainer,
    CardWrap,
    RecommendContainer,
    RecommendTitleWrap,
    RecommendImageWrap,
    ContainerItemsWrap,
    RecommendItemsWrap
} from "./HomeStyle";
import IconClipW from '../../asset/IconClipW.png';
import image from '../../asset/temp/page1.jpg';
import image2 from '../../asset/temp/page2.jpg';
import arrow from '../../asset/arrow.png'
import { DefaultButton } from '../../components/DefaultButton';

const Home = () => {

    const bestGuide = ['2박 3일 경주 여행', '1박 2일 부산 여행', '1박 2일 부산 여행', '1박 2일 부산 여행'];
    const bestRestaurant = ['연화바루', '비건버거', '비건포차'];

    let navigate = useNavigate();
    const routerPlan = () => {
        navigate('/plan')
        window.scrollTo(0, 0)
    }
    const routerGuide = () => {
        navigate('/view/guide')
        window.scrollTo(0, 0)
    }
    const routerFood = () => {
        navigate('/view/restaurant')
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Header />
            <SearchContainer>
                <p className='userWrap'>
                    <span>김비플</span> 님,
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
                    <DefaultButton onClick={routerGuide}>
                        <img src={arrow} className='arrow' />
                    </DefaultButton>
                </TitleWrap>

                <CardContainer>
                    {bestGuide.map((value, index) => {
                        return (
                            <CardWrap onClick={routerGuide} >
                                <img src={image} className='tourImage' />
                                <div className='cardInfoWrap'>
                                    <p className='cardTitle'>{value}</p>
                                    <span className='cardRecommend'>vple 추천</span>
                                </div>
                            </CardWrap>
                        )
                    })}
                </CardContainer>
            </CardSection>

            <RecommendContainer>
                <RecommendTitleWrap>
                        <div className='titleDeco' />
                        <h3 className='recommendTitle'>추천 식당</h3>
                        <DefaultButton onClick={routerFood}>
                            <img src={arrow} className='arrow' />
                        </DefaultButton>
                </RecommendTitleWrap>

                <ContainerItemsWrap>
                    <RecommendItemsWrap>
                        {
                            bestRestaurant.map((value, index) => {
                                return (
                                    <RecommendImageWrap onClick={routerFood}>
                                        <img src={image2} className='itemImage' />
                                        <img src={IconClipW} className='flagIcon' />
                                        <span className='itemsName'>{value}</span>
                                    </RecommendImageWrap>
                                )
                            })
                        }
                    </RecommendItemsWrap>
                </ContainerItemsWrap>
            </RecommendContainer>
        </>
    )
}

export default Home;