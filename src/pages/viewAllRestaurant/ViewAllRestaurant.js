import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton2 from '../../components/cardButton2/CardButton2';
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
                    <CardButton2
                        name={card.name}
                    />

                ))}
            </UlStyle>
        </>
    );
}
