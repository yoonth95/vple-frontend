import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/cardButton/CardButton';
import {UlStyle} from '../../styles/UlStyle';

export default function ViewAllRestaurant() {

    const cards = [
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
    ];


    return(
        <>
            <DetailHeader title="추천 식당 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <CardButton
                        title={card.name}
                    />

                ))}
            </UlStyle>
        </>
    );
}
