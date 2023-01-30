import React from 'react'
import {
    DetailContainer,
    DetailInfoContainer, DetailInfoTextWrap,
    DetailPlogInfo,
    NeededPersons,
    NoticeContainer, PostSubmitBtn
} from "./NavBarDetailStyle";
import Units from '../../asset/units.png';

const NavBarDetail = () => {
    return(
        <>
            <DetailContainer>
                <NoticeContainer>
                    <div className='title-of-plog'>플로깅 모집 제목</div>
                    <DetailInfoContainer>
                        <span className='left-day'>D-7</span>
                        <span className='location-tag'>경기도 의정부</span>
                    </DetailInfoContainer>
                    <NeededPersons>
                        <img src={Units} className='unit-icon'/>
                        <span className='count-people'>5인</span>
                    </NeededPersons>
                </NoticeContainer>
            </DetailContainer>
            <DetailPlogInfo>
                <DetailInfoTextWrap>
                    <p>모집 공고 자유롭게 작성</p>
                    <div className='post-text'>
                        <p>* 플로깅 모집 내용</p>
                        <p>플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 플로깅 모집 내용 </p>
                    </div>
                </DetailInfoTextWrap>
                <PostSubmitBtn>
                    <div className='apply-btn'>신청하기</div>
                </PostSubmitBtn>
            </DetailPlogInfo>
        </>
    )
}

export default NavBarDetail;