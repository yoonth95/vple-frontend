import React from 'react';
import {ListWrap, MateInfo, ProfileImgBox} from "../../pages/mate/FindMateStyle";
import Image from "../../asset/logo.png";
import {JoinListContainer} from "./JoinListStyle";

const JoinList = () => {

    const participantList = ['User1','User1','User1',];

    return(
        <>
            <JoinListContainer>
                <p className='currently-list'>현재 총 3명이 참가중입니다.</p>
                {participantList.map( (obj,index) => {
                    return (
                        <ListWrap>
                            <ProfileImgBox>
                                <img src={Image} className='user-image'/>
                            </ProfileImgBox>
                            <MateInfo>
                                <span>메이트</span>
                                <span className='user-date'>자기소개/한줄소개</span>
                            </MateInfo>
                        </ListWrap>
                    )
                })}
            </JoinListContainer>

        </>
    )
}

export default JoinList;