import React from 'react';
import {
    CommunityForm,
    CommunityWrap,
    IconWrap,
    ProfileForm,
    ShowHashTagWrap,
    TextWrap
} from "../textBlock/TextBlockStyle";
import Flag from "../../asset/flag.png";
import More from "../../asset/more4.png";
import heart from "../../asset/hart.png";
import Bubble from "../../asset/buble.png";

const TextBlock = () => {

    const boardItems = ['홍길동', '짱구', '철수', '흰둥이'];

    return(
        <>
            {boardItems.map( (obj,index) => {
                return(
                    <CommunityForm>
                        <CommunityWrap>
                            <div className='hr-bar'/>
                            <ProfileForm>
                                <div className='profile-image-wrap'></div>
                                <div className='user-name-wrap'>
                                    <h4 className='user-name'>{obj}</h4>
                                    <span className='up-load-state'>17분 전체공개</span>
                                </div>
                                <div className='save-btn'>
                                    <img src={Flag} className='book-mark-icon'/>
                                    <img src={More} className='more-btn'/>
                                </div>
                            </ProfileForm>
                            <TextWrap>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eum maxime nobis perspiciatis praesentium ullam? At ducimus laudantium nostrum, quae repellendus repudiandae sint soluta vitae! In odio reiciendis reprehenderit.</p>
                            </TextWrap>
                            <ShowHashTagWrap>
                                <div className='show-hash-tag'># 여행</div>
                                <div className='show-hash-tag'># 관광지</div>
                            </ShowHashTagWrap>
                            <div className='hr-bar'/>
                            <IconWrap>
                                <div className='heart-icon-wrap'>
                                    <img src={heart} className='heart-icon'/>
                                    <div className='count-num'>13</div>
                                </div>
                                <div className='bubble-icon-wrap'>
                                    <img src={Bubble} className='bubble-icon'/>
                                    <div className='count-num'>7</div>
                                </div>
                            </IconWrap>
                        </CommunityWrap>
                    </CommunityForm>
                )
            })}

        </>
    )
}

export default TextBlock;