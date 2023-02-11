import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/guideCardButton/GuideCardButton';

import {
    SearchContainer,
    WrapSelection,
    CardContainer,
    WrapCards,
    WrapCard,

} from './ViewAllGuideStyle';

function ViewAllGuide() {

    const cards = [
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
        '경주 여행 추천',
    ];

    const provinceList = ['서울', '경기도', '인천', '충청북도', '충청남도', '전라북도', '전라남도,', '강원도', '경상북도', '경상남도'];
    const locationList = ['김포시', '의정부시', '인천광역시', '부산', '목포시', '강릉시', '대구광역시'];

    return (
        <>
            <DetailHeader title="추천 가이드 전체 보기" />

            <SearchContainer>
                <WrapSelection>
                    <select className='select-box'>
                        {provinceList.map((province, index) => {
                            return <option className='option'>{province}</option>
                        })}
                    </select>
                    <select className='select-box'>
                        {locationList.map((city, index) => {
                            return <option className='option'>{city}</option>
                        })}
                    </select>
                </WrapSelection>
            </SearchContainer>

            <CardContainer>
                <WrapCards>
                    {
                        cards.map((value, index) => {
                            return (
                                <WrapCard>
                                    <img className='img-photo' />
                                    <div className='div-content'>
                                        <span className='plan-title'>{value}</span>
                                    </div>
                                </WrapCard>
                            )
                        })
                    }
                </WrapCards>
            </CardContainer>
        </>
    );
}

export default ViewAllGuide
