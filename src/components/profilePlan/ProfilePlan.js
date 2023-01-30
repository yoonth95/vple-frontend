import { useState } from 'react';
import {
    CardImgButton,
    WrapPlanTitle,
} from './ProfilePlanStyle';

import TempImg from '../../asset/temp/tempImg.jpeg';

export default function ProfilePlan() {

    const [menu, setMenu] = useState(0);

    return (
        <>
            <CardImgButton>
                <img src={TempImg} className='card-image' />
                <WrapPlanTitle>
                    <span className='plan-title'>뚜벅이 경주 맛집</span>
                </WrapPlanTitle>
            </CardImgButton>
        </>
    );
}