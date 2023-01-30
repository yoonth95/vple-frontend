import React from 'react';
import {CommentTextWrap, CommentWrap, Container, UserWrap, WritingCommentWrap} from "./CommentStyle";
import Image from "../../asset/logo.png";
import CommentMark from '../../asset/comment_mark.png';
import SubmitBtn from '../../asset/submit_btn.png';



const Comment = () => {

    const commentUser = ['이상해씨','이상해꽃','이상해풀'];
   return (
        <>
            <Container>
                {commentUser.map( (obj,index) => {
                    return(
                        <CommentWrap>
                            <UserWrap>
                                <div className='user-profile'>
                                    <img src={Image} className='user-image'/>
                                </div>
                                <div className='user-info-state'>
                                    <p className='nickname'>{obj}</p>
                                    <span className='update-time'>2022.08.21 19:52</span>
                                </div>
                            </UserWrap>
                            <CommentTextWrap>
                                <div className='comment-text-wrap'>
                                    <p className='comment-text'>정말 좋은 프로젝트네요!</p>
                                </div>
                                <div className='comment-wrap'>
                                    <img src={CommentMark} className='comment-icon'/>
                                    <input type='text' className='recomment-input' placeholder='대댓글을 입력하세요'/>
                                    <img src={SubmitBtn} className='submit-btn' />
                                </div>
                            </CommentTextWrap>
                        </CommentWrap>
                    )
                })}
            </Container>
            <WritingCommentWrap>
                <input type='text' placeholder='댓글을 입력해주세요' className='comment-input'/>
                <div className='submit'>등록</div>
            </WritingCommentWrap>
        </>
    )
}

export default Comment;