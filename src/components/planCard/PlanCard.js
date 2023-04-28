import { useState } from 'react';

import {
    CardDiv,
    TimeButton,
} from './PlanCardStyle'

import tempImg from '../../asset/profile/tempProfile.jpeg';
import more from '../../asset/more.png';
import iconRedDelete from '../../asset/IconRedDelete.png';

export default function PlanCard({ card, onRemove }) {

    const onDelete = () => onRemove(card.id);

    return (
        <CardDiv>
            <img src={card.image} className='plan_img' />

            <div className='container'>
                <div className='wrap-title-line'>
                    <p className='spot_name'>{card.name}</p>
                    <img src={iconRedDelete} className='delete_button' onClick={onDelete} />
                </div>

                <div className='wrap-time-line'>
                    <p className='time'>예상 시간 |
                    <TimeButton>{card.startTime}</TimeButton></p>
                </div>
            </div>
            

                
        </CardDiv>
    );

}