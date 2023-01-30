import React from 'react';
import Header from '../header/Header';
import {
    AdContainer,
    FundingSection,
    FundingImg,
    MoreBtn,
    StoreContainer,
    StoreCardContainer,
    LiveRankContainer, RankTitleWrap, RankItemsContainer
} from "./FundingStyle";
import image1 from '../../asset/page2.jpg';
import image2 from '../../asset/page1.jpg';
import reload from '../../asset/union.png';
import image3 from '../../asset/image3.jpg';
import image4 from '../../asset/image4.jpg';
import {useNavigate} from "react-router-dom";

const Funding = () => {
    const fundingTitle = ['펀딩 제목1', '펀딩 제목2', '펀딩 제목3', '펀딩 제목4'];
    const storeTitle = ['펀딩 제목5', '펀딩 제목6', '펀딩 제목7', '펀딩 제목8'];
    const liveRank = ['펀딩 제목9','펀딩 제목10','펀딩 제목11','펀딩 제목12','펀딩 제목13','펀딩 제목14']

    let navigate = useNavigate();

    const onClickRouter = () => {
        navigate('/funding/detail');
    }

    return (
        <>
            <Header/>
            <AdContainer>
                <img src={image1} className='ad-image'/>
            </AdContainer>
            <FundingSection>
                <div className='title-wrap'>
                    <h3 className='funding-title'>취향 맞춤 펀딩</h3>
                </div>

                {fundingTitle.map((value, index) => {
                    return (
                        <FundingImg onClick={onClickRouter}>
                            <img src={image2} className='card-img'/>
                            <span>펀딩제목</span>
                        </FundingImg>
                    )
                })}
                <MoreBtn>
                    <img src={reload} className='reload-icon'/>
                    더보기 3/1
                </MoreBtn>
            </FundingSection>

            <StoreContainer>
                <div className='store-product-wrap'>
                    <h3 className='store-title'>스토어 추천 제품</h3>
                </div>

                <StoreCardContainer>
                    {
                        storeTitle.map(() => {
                            return (
                                <div className='store-card'>
                                    <img src={image3} className='store-image'/>
                                    <span className='store-title'>펀딩 제목</span>
                                </div>
                            )
                        })
                    }

                </StoreCardContainer>
            </StoreContainer>

            <LiveRankContainer>
                <RankTitleWrap>
                    <h3>실시간 랭킹</h3>
                </RankTitleWrap>
                {liveRank.map( (obj, index) => {
                    return(
                        <RankItemsContainer>
                            <div className='title-wrap'>
                                <h3 className='ranking'>{index + 1} </h3>
                                <span className='ranking-title'>{obj}</span>
                            </div>
                            <div className='rank-image-wrap'>
                                <img src={image4} className='rank-image'/>
                            </div>
                        </RankItemsContainer>
                    )
                })}
            </LiveRankContainer>
        </>
    );
}

export default Funding;