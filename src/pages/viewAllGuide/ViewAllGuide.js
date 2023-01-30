import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/cardButton/CardButton';

import {UlStyle} from '../../styles/UlStyle';

function ViewAllGuide() {

    const cards = [
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.01.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.02.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.03.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.04.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.05.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.06.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.07.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.08.30' },
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.09.30' },
    ];

    return (
        <>
            <DetailHeader title="추천 가이드 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <CardButton
                        guideTitle={card.guideTitle}
                        content={card.content}
                    />

                ))}
            </UlStyle>

        </>
    );
}

export default ViewAllGuide
