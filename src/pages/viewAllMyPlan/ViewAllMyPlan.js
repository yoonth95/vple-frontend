import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/guideCardButton/GuideCardButton';

import {
    CardContainer,
    WrapCards,
    WrapCard,

} from './ViewAllMyPlanStyle';

function ViewAllMyPlan() {

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

    return (
        <>
            <DetailHeader title="나의 플랜" />

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

export default ViewAllMyPlan
