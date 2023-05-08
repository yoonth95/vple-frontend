import DetailHeader from '../../components/titleHeader/TitleHeader'
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

import {
    ImageContainer,
    ContentContainer,
    WrapClip,
    ClipButtonW,
    ClipButtonG,
    EditButton,
    WrapTop,
    CardSection,
    WrapCard,

} from '../../pages/guideDetail/GuideDetailStyle';

import Delete from '../../asset/IconRedDelete.png';
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';


export default function GuideDetail() {

    const location = useLocation();
    const id = location.state.id;
    const token = location.state.token;
    const title = location.state.title;

    const [guideData, setGuideData] = useState([]);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {

        axios.get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/plan/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setGuideData(response.data);
                response.data.planTravels.map(e => {
                    console.log(e.day);
                    if (e.day > maxPage) setMaxPage(e.day)
                });
                console.log(guideData);
            });
    }, [id])

    const [isClip, setClip] = useState(false);

    const [dayPageNum, setDayPageNum] = useState(1);
    const [dayPageContent, setDayPageContent] = useState([]);
    const goNextDayPage = () => {
        if (dayPageNum < maxPage) {
            setDayPageNum((prev) => prev + 1);
        }
    }
    const goPrevDayPage = () => {
        if (dayPageNum > 1) {
            setDayPageNum((prev) => prev - 1);
        }
    }
    useEffect(() => {
        if (guideData.planTravels) {
            console.log("현재 모든 컨텐츠", dayPageContent);
            setDayPageContent(guideData.planTravels.filter((travel) => travel.day === dayPageNum));
        }

    }, [guideData, dayPageNum])

    return (
        <>
            <DetailHeader title={title} />

            <ImageContainer>
                <img className='guide-image' />
            </ImageContainer>

            <ContentContainer>
                <div className="titleWrap">{guideData.title}</div>
                <WrapClip
                    onClick={() => setClip(!isClip)}>
                    {isClip ? <ClipButtonG /> : <ClipButtonW />}
                </WrapClip>
                <div className="writerWrap">{guideData.district}  {guideData.city}</div>
                <EditButton>플랜 수정</EditButton>

                <WrapTop>
                    <img src={prevBtn} className='prev_button' onClick={goPrevDayPage} />
                    <p className='day'>DAY {dayPageNum}</p>
                    <img src={nextBtn} className='next_button' onClick={goNextDayPage} />
                </WrapTop>
                <CardSection>
                    {dayPageContent && dayPageContent.map(card => (
                        <WrapCard>
                            <img src={card.image} className='plan-img' />
                            <div>
                                <p className='spot-name'>{card.name}</p>
                                <p className='time'>소요 시간 |
                                    <span className='time-btn'>
                                        {card.startTime.split(":")[0] < 12 ?
                                            `오전 ${card.startTime.split(":")[0]}:${card.startTime.split(":")[1]}`
                                            : `오후 ${card.startTime.split(":")[0]}:${card.startTime.split(":")[1]}`
                                        }</span></p>
                            </div>
                            <img src={Delete} className='delete-btn' />
                        </WrapCard>
                    ))}
                </CardSection>
            </ContentContainer>
        </>
    );
}