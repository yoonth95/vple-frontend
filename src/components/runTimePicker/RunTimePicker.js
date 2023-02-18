import { useState } from 'react';
import {
    SelectOption,
    OkButton,
    CancelButton,

} from './RunTimePickerStyle'

export default function RunTimePicker(props) {

    const { open, close } = props;

    //시간
    const time = ['오전', '오후'];
    const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    return (
        <SelectOption>
            <div className='Wrap'>
                
                <select className='select-box'>
                    {hours.map((hour, index) => {
                        return <option className='option'>{hour}</option>
                    })}
                </select>
                <h>시간 </h>
                <select className='select-box'>
                    {minutes.map((minute, index) => {
                        return <option className='option'>{minute}</option>
                    })}
                </select>
                <h>분</h>
            </div>

            <OkButton onClick={close}>확인</OkButton>
            <CancelButton onClick={close}>취소</CancelButton>

        </SelectOption>
    );
}