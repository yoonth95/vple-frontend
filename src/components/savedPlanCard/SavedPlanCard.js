import { useState } from 'react';

import {
    CardDiv,
    WrapImage,
} from './SavedPlanCardStyle'

import tempImg from '../../asset/profile/tempProfile.jpeg';
import iconRedDelete from '../../asset/IconRedDelete.png';

export default function SavedPlanCard({ card, onClick, onDelete }) {

    const cardClickEvent = onClick;

    return (
        <CardDiv onClick={cardClickEvent}>
            <WrapImage>
                <img src={card.image} className='plan_img1'/>
                <img src={card.image} className='plan_img2'/>
            </WrapImage>

            <div className='container'>
                <div className='wrap-title-line'>
                    <p className='spot_name'>{card.title}</p>
                    <img src={iconRedDelete} className='delete_button'/>
                </div>

                <div className='wrap-time-line'>
                    <p className='day'>2023.01.17</p>
                </div>
            </div>
            

                
        </CardDiv>
    );

}