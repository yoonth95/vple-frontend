import React from 'react';
import {UserInfoWrap} from "../../pages/ploggingCheckDetail/PlogCheckDetailStyle";
import {ListWrap, MateInfo, ProfileImgBox} from "../../pages/mate/FindMateStyle";
import Image from "../../asset/logo.png";
import {DetailInfoTextWrap, DetailPlogInfo} from "../navDetail/NavBarDetailStyle";

const PlogCheckPost = () => {
    return(
        <>
            <UserInfoWrap>
                <ListWrap>
                    <ProfileImgBox>
                        <img src={Image} className='user-image'/>
                    </ProfileImgBox>
                    <MateInfo>
                        <span>메이트</span>
                        <span className='user-date'>자기소개/한줄소개</span>
                    </MateInfo>
                </ListWrap>
            </UserInfoWrap>
            <DetailPlogInfo>
                <DetailInfoTextWrap>
                    <p>모집 공고 자유롭게 작성</p>
                    <div className='post-text'>
                        <p>* 플로깅 모집 내용</p>
                        <p>플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 </p>
                    </div>
                </DetailInfoTextWrap>
            </DetailPlogInfo>
        </>
    )
}

export default PlogCheckPost;

