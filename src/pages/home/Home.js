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
import arrow from '../../asset/arrow.png'
import DefaultButton from '../../components/DefaultButton';
import GuideCardButton from '../../components/guideCardButton/GuideCardButton';
import RestaurantCardButton from '../../components/restaurantCardButton/RestaurantCardButton';

const Home = () => {

    const bestGuide = [
        { guideTitle: '2박 3일 경주 여행' },
        { guideTitle: '1박 2일 부산 여행' },
        { guideTitle: '2박 3일 경주 여행' },
        { guideTitle: '1박 2일 부산 여행' },];
    const bestRestaurant = [
        { restaurantTitle: '연화바루' },
        { restaurantTitle: '비건버거' },
        { restaurantTitle: '비건포차' },];

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



                <CardContainer className="card-container">

                    {bestGuide.map(card => (
                        <CardWrap>
                            <GuideCardButton
                                title={card.guideTitle}
                            />
                        </CardWrap>

                    ))}


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

                <CardContainer className="card-container">
                    {bestRestaurant.map(card => (
                        <CardWrap>
                            <RestaurantCardButton
                                title={card.restaurantTitle}
                            />
                        </CardWrap>

                    ))}
                </CardContainer>
            </RecommendContainer>

        </>
    )
}

export default Home;