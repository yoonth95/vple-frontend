import { useState } from 'react';

import {
    CardDiv,
    DeleteButton,
    WrapImage,
} from './SavedPlanCardStyle'

import tempImg from '../../asset/profile/tempProfile.jpeg';
import iconRedDelete from '../../asset/IconRedDelete.png';

export default function SavedPlanCard({ card, onClick, showModal }) {

    const cardClickEvent = onClick;
    const cardDeleteModal = showModal;

    return (
        <CardDiv>
            <DeleteButton src={iconRedDelete} className='delete_button' onClick={cardDeleteModal}/>
            <WrapImage>
                <img src={card.image} className='plan_img1'/>
                <img src={card.image} className='plan_img2'/>
            </WrapImage>

            <div className='container' onClick={cardClickEvent}>
                <div className='wrap-title-line'>
                    <p className='spot_name'>{card.title}</p>
                    
                </div>

                <div className='wrap-time-line'>
                    <p className='day'>2023.01.17</p>
                </div>
            </div>
            

                
        </CardDiv>
    );

}