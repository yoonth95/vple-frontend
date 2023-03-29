import { useState } from 'react';

import {
    CardDiv,
    WrapImage,
} from './SavedPlanCardStyle'

import tempImg from '../../asset/profile/tempProfile.jpeg';
import iconRedDelete from '../../asset/IconRedDelete.png';

export default function SavedPlanCard({ card, onRemove }) {

    const onDelete = () => onRemove(card.id);

    return (
        <CardDiv>
            <WrapImage>
                <img src={tempImg} className='plan_img1'/>
                <img src={tempImg} className='plan_img2'/>
            </WrapImage>
            

            <div className='container'>
                <div className='wrap-title-line'>
                    <p className='spot_name'>{card.title}</p>
                    <img src={iconRedDelete} className='delete_button' onClick={onDelete} />
                </div>

                <div className='wrap-time-line'>
                    <p className='day'>2023.01.17</p>
                </div>
            </div>
            

                
        </CardDiv>
    );

}