import React from 'react';
import {CheckImageContainer} from "./PloggingCheckStyle";
import CheckImage from '../../asset/check_image.jpg';
import {useNavigate} from "react-router-dom";


const PloggingCheck = () => {

    const checkImage = ['asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf',];
    let navigate = useNavigate();
    const onClickRouteChecked = () => {
        navigate('/plogging/check/detail');
    }

    return(
        <>
            <CheckImageContainer>
                {checkImage.map( (obj,index) => {
                    return (
                        <div className='check-image-wrap' onClick={onClickRouteChecked}>
                            <img src={CheckImage} className='check-item'/>
                        </div>
                    )
                })}
            </CheckImageContainer>
        </>
    )
}

export default PloggingCheck;