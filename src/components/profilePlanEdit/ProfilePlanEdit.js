import { useState } from 'react';
import {
    CardImg,
    WrapPlanTitle,
    
} from './ProfilePlanEditStyle';
import IconDelete from '../../asset/IconDelete.png';

export default function ProfilePlanEdit() {

    const [menu, setMenu] = useState(0);

    return (
        <>
            <CardImg>
                <img className='card-image' />
                <button>
                    <img src={IconDelete} className='icon-delete'/>
                </button>
                <WrapPlanTitle>
                    <span className='plan-title'>뚜벅이 경주 맛집</span>
                </WrapPlanTitle>
            </CardImg>
        </>
    );
}