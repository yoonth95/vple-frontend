import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import { useLocation } from 'react-router-dom';
import React, { useState } from "react";

import {
    ImageWrap,
    ContentDiv,
    ClipButtonW,
    ClipButtonG,
    EditButton,
    ClipDiv,

} from '../../pages/guideDetail/GuideDetailStyle';
import { ButtonStyle } from '../../styles/ButtonStyle';

export default function GuideDetail() {

    const location = useLocation();

    const detailTitle = location.state.guideTitle;
    const detailContent = location.state.content;

    const [isClip, setClip] = useState(false);

    return (
        <>
            <DetailHeader title="추천 가이드" />
            <ImageWrap>
                <img src={tempGuide} className='guide-image' />
            </ImageWrap>
            <ContentDiv>
                <div className="titleWrap">{detailTitle}</div>
                <ClipDiv>
                    <ButtonStyle onClick={() => setClip(!isClip)}>
                        {isClip ? <ClipButtonG /> : <ClipButtonW />}
                    </ButtonStyle>
                </ClipDiv>
                <div className="writerWrap">{detailContent}</div>
                <EditButton>플랜 수정</EditButton>
            </ContentDiv>

        </>
    );
}