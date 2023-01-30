import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

import {
    BoardContainer,
    BoardHeaderWrap, BoardList,
    BoardListWrap,
    Container,
    PloggingCardWrap,
    PloggingTitleWrap
} from "./PloggingStyle";
import Header from '../header/Header';
import Image5 from '../../asset/image5.jpg';
import SearchIcon from '../../asset/search.png';
import ArrowUp from '../../asset/arrow_up.png';
import TabContent from "../TabContent";
//import PloggingJoin from "../ploggingJoin/PloggingJoin";
//import PloggingCheck from "../ploggingCheck/PloggingCheck";


const Plogging = () => {

    const ploggingItems = ['플로깅 모집 제목', '플로깅 모집 제목2', '플로깅 모집 제목3', '플로깅 모집 제목4'];
    const navTabItems = ['모집 게시판', '인증 게시판'];

    const [tab, setTab] = useState(0);

    const onTap = (index) => {
        setTab(index);
    }

    let navigate = useNavigate();
    const onClickRoute = () => {
        navigate('/plogging/detail');
    }
    const onClickRouteBoard = () => {
        navigate('/plogging/writing');
    }


    return (
        <>
            <Header/>
            <Container>
                <PloggingTitleWrap>
                    <h2>플로깅 공고</h2>
                </PloggingTitleWrap>
                <PloggingCardWrap>
                    {ploggingItems.map((obj, index) => {
                        return (
                            <div className='card-wrap' onClick={onClickRoute}>
                                <img src={Image5} className='card-image'/>
                                <span>{obj}</span>
                                <p>asdfasdf</p>
                            </div>
                        )
                    })}
                </PloggingCardWrap>
            </Container>
            <BoardContainer>
                <BoardHeaderWrap>
                    <div className='board-title-wrap'>
                        <h3 >게시판</h3>
                        <div className='board-btn' onClick={onClickRouteBoard}>작성하기</div>
                    </div>
                    <div  className='switch-btn-wrap'>
                    {navTabItems.map( (item,index) => {
                            return(
                                <span className='get-board' onClick={() => onTap(index)}>{item}</span>
                            )
                        })}
                    </div>
                    <div className='input-wrap'>
                        <input className='search-plogging' placeholder='찾으시는 내용이 있으신가요?'/>
                        <img src={SearchIcon} className='search-icon'/>
                    </div>
                </BoardHeaderWrap>
                <div className='list-hr'/>
                <TabContent tab={tab}/>
                <div className='list-hr'/>
                <footer className='footer-btn'>
                    <img src={ArrowUp} className='arrow-up'/>
                    맨위로
                </footer>
            </BoardContainer>
        </>
    )
}

export default Plogging;