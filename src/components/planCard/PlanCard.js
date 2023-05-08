import { useState } from 'react';

import {
    CardDiv,
    TimeButton,
} from './PlanCardStyle'

import tempImg from '../../asset/profile/tempProfile.jpeg';
import more from '../../asset/more.png';
import iconRedDelete from '../../asset/IconRedDelete.png';

export default function PlanCard({ card, time, onRemove, onClickTime }) {

    const onDelete = () => onRemove(card.id);
    const onClickTimeBtn = () => onClickTime(card.id);
    
    const prevTimeString = card.startTime.split(":");

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
                    <TimeButton 
                        onClick={onClickTimeBtn}>{
                        prevTimeString[0] < 12 ? 
                        `오전 ${prevTimeString[0]}:${prevTimeString[1]}`
                        : `오후 : ${prevTimeString[0]}:${prevTimeString[1]}`}
                        {/* {
                            `${time.ampm} ${time.hour}:${time.minute}`
                        } */}
                    </TimeButton>
                    </p>
                </div>
            </div>
            
        </CardDiv>
    );

}