import React from 'react';
import {BoardList, BoardListWrap} from "../plogging/PloggingStyle";
import Image5 from "../../asset/image5.jpg";


const PloggingJoin = () => {

    const ploggingBoard = ['플로깅 모집 제목', '플로깅 모집 제목', '플로깅 모집 제목','플로깅 모집 제목', '플로깅 모집 제목', '플로깅 모집 제목'];

    return(
        <>
            <BoardListWrap>
                {ploggingBoard.map( (obj,index) => {
                    return(
                        <>
                            <BoardList>
                                <div className='board-list-info'>
                                    <h4>{obj}</h4>
                                    <p>글내용 글내용 글내용 글내용 글내용 글내용</p>
                                    <div className='wrapper'>
                                        <span>D - 7</span>
                                        <span>경기도 의정부</span>
                                    </div>
                                </div>
                                <div className='list-image-image'>
                                    <div className='image-wrap'>
                                        <img src={Image5} className='item-image' />
                                    </div>
                                </div>
                            </BoardList>
                            <div className='list-hr'/>
                        </>
                    )
                })}
            </BoardListWrap>
        </>
    )
}

export default PloggingJoin;