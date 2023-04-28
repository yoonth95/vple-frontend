import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
    ProfileContainer,
    WrapProfilePhoto,
    MyPlanContainer,
    SmallTitle,
    WrapCards,
    WrapCard,
    WrapMenuContainer,

} from './MyProfileStyle';
import TitleHeader from '../../components/titleHeader/TitleHeader';

import tempProfile from '../../asset/profile/tempProfile.jpeg';
import settingButton from '../../asset/profile/setting.png';
import arrow from '../../asset/arrow.png';
import longArrow from '../../asset/profile/longArrow.png';

export default function MyProfile() {

    const [myInfo, setMyInfo] = useState([]);
    let [planList, setPlanList] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {

        if (token !== "null") {
            
            axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/me', {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    setMyInfo(response.data);

                });
        }

    }, []);

    useEffect (() => {


        // console.log(myInfo);

        if(myInfo.length !== 0) {

            let list = [];
            let index = myInfo.myPlans.length - 1;
        
            while(myInfo.myPlans[index] && list.length <3) {
                list.push(myInfo.myPlans[index]);
                index--;
            }
            setPlanList(list);
        }

    }, [myInfo])
    

    const navigate = useNavigate();
    const routerMyPlan = () => {
        navigate('/view/myplan', {
            // state: {
            //     list: myInfo.myPlans.reverse(),
            // }
        });
        window.scrollTo(0, 0)
    }
    const routerLogin = () => {
        navigate('/login')
        window.scrollTo(0, 0)
    }

    const logout = () => {

        localStorage.setItem('token', null);
        window.location.href = "/";
    }

    const logInOut = [
        {
            content:
                <div>
                    <ProfileContainer>
                        <WrapProfilePhoto>
                            <img className='photo' src={myInfo.image} />
                        </WrapProfilePhoto>
                        <div>
                            <h4 className='user-name'>{myInfo.nickname}</h4>
                            {/* <div className="tag-div">페스코</div> */}
                        </div>
                        {/* <img className='setting-btn' src={settingButton} /> */}
                    </ProfileContainer>

                    <MyPlanContainer>
                        <div className="wrap-title">
                            <SmallTitle>나의 플랜</SmallTitle>
                            <span onClick={routerMyPlan}>
                                <span>플랜 전체보기</span>
                                <img src={arrow} className='arrow-btn' />
                            </span>
                        </div>

                        <WrapCards>
                            {
                                planList.map((plan) => {
                                    return (
                                        <WrapCard>
                                            <img className='img-photo' />
                                            <div className='div-content'>
                                                <span className='plan-title'>{plan.title}</span>
                                            </div>
                                        </WrapCard>
                                    )
                                })
                            }
                        </WrapCards>
                    </MyPlanContainer>
                </div>

        },
        {
            content:
                <div>
                    <ProfileContainer>
                        <WrapProfilePhoto>
                            <img className='photo' src={tempProfile} />
                        </WrapProfilePhoto>
                        <div>
                            <h4 className='user-name-logout'>로그인이 필요합니다.</h4>
                            <div className="tag-div-logout" onClick={routerLogin}>로그인하기</div>
                        </div>
                        
                    </ProfileContainer>

                    <MyPlanContainer>
                        <div className="wrap-title">
                            <SmallTitle>나의 플랜</SmallTitle>
                            <span>
                                <span>플랜 전체보기</span>
                                <img src={arrow} className='arrow-btn' />
                            </span>
                        </div>

                        <WrapCards>
                            <div className="my-plan-logout">
                                <div className="arrow-btn">
                                    <img src={longArrow} className='arrow-img'/>
                                </div>
                                <div className="text">플랜 만들기</div>
                            </div>
                            
                        </WrapCards>
                    </MyPlanContainer>
                </div>

        }

    ]
    return (
        <>
            <TitleHeader title="마이페이지" />

            {token !== "null" ?
                logInOut[0].content
                : logInOut[1].content}

            <WrapMenuContainer>
                {/* <div className='menu'>최근 본 가이드<img src={arrow} className='arrow-btn' /></div>
                <div className='menu'>최근 본 식당<img src={arrow} className='arrow-btn' /></div>
                <div className='menu'>작성한 후기<img src={arrow} className='arrow-btn' /></div> */}
                <div className='menu' onClick={logout}>로그아웃<img src={arrow} className='arrow-btn' /></div>
                <div className='menu'>탈퇴하기<img src={arrow} className='arrow-btn' /></div>
                <div className='menu'>버전<span>1.0.0</span></div>
            </WrapMenuContainer>

        </>
    );
}