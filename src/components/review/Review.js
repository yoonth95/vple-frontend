import {
    ReviewButton,
    ImgDiv,



} from './ReviewStyle';

import tempProfile from '../../asset/temp/tempProfile.jpeg';

export default function Review() {
    return (
        <ReviewButton>
            <ImgDiv>
                <img src={tempProfile} className='review-img' />
            </ImgDiv>
            <div className='text-div'>
                <h4>후기 제목</h4>
                <p className='content'>글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용</p> 
                <p className='writer-date'>작성자ㅣ닉네임ㅣ2022.08.27</p>
            </div>
        </ReviewButton>
    );
}