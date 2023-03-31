import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/guideCardButton/GuideCardButton';
import { useLocation } from 'react-router-dom';

import {
    CardContainer,
    WrapCards,
    WrapCard,

} from './ViewAllMyPlanStyle';

function ViewAllMyPlan() {

    const location = useLocation();
    const myPlans = location.state.list;

    return (
        <>
            <DetailHeader title="나의 플랜" />

            <CardContainer>
                <WrapCards>
                    {
                        myPlans.map((value, index) => {
                            return (
                                <WrapCard>
                                    <img className='img-photo' src={value.image} />
                                    <div className='div-content'>
                                        <span className='plan-title'>{value.title}</span>
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
