import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/cardButton/CardButton';

import {UlStyle} from '../../styles/UlStyle';

function ViewAllGuide() {

    const cards = [
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
        { guideTitle: '경주 여행 추천' },
    ];

    return (
        <>
            <DetailHeader title="추천 가이드 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <CardButton
                        title={card.guideTitle}
                    />

                ))}
            </UlStyle>

        </>
    );
}

export default ViewAllGuide
