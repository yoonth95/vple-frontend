import { useState } from 'react';

import {
    CardDiv,
    TimeButton,
} from './PlanCardStyle'
import RunTimePicker from '../runTimePicker/RunTimePicker';

import tempImg from '../../asset/temp/tempImg.jpeg';
import more from '../../asset/more.png';
import iconRedDelete from '../../asset/IconRedDelete.png';
import { ButtonStyle } from '../../styles/ButtonStyle';

export default function PlanCard({ card, onRemove }) {

    const onDelete = () => onRemove(card.id);

    //runtimepicker
    const [isRPModalOpen, setIsRPModalOpen] = useState(false)
    const closeRPModal = () => {
        setIsRPModalOpen(false);
    }
    const openRPModal = () => {
        setIsRPModalOpen(true);
    }

    return (
        <CardDiv>
            <img src={tempImg} className='plan_img' />
            <div>
                <p className='spot_name'>{card.title}</p>
                <p className='time'>소요 시간 |
                    <TimeButton onClick={openRPModal}>{card.time}</TimeButton></p>
                {isRPModalOpen === true ? <RunTimePicker open={isRPModalOpen} close={closeRPModal} /> : null}
            </div>
            <img src={more} className='more_button' />
            <img src={iconRedDelete} className='delete_button' onClick={onDelete} />
        </CardDiv>
    );

}