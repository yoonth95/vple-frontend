import { useState, useEffect } from 'react';
import TitleHeader from '../../components/titleHeader/TitleHeader'
import ProfilePlan from '../../components/profilePlan/ProfilePlan';
import ProfileFollow from '../../components/profileFollow/ProfileFollow';
import { useNavigate } from 'react-router-dom';

import {
    ProfileContainer,
    WrapProfilePhoto,
    MyPlanContainer,
    SmallTitle,



} from './MyProfileStyle';

import tempProfile from '../../asset/temp/tempProfile.jpeg';
import settingButton from '../../asset/profile/setting.png';
import arrow from '../../asset/arrow.png';

export default function MyProfile() {


    const planCards = [
        '뚜벅이 경주 맛집',
        '뚜벅이 경주 맛집',
        '뚜벅이 경주 맛집',
        '뚜벅이 경주 맛집',
        '뚜벅이 경주 맛집',
        '뚜벅이 경주 맛집',
    ]
    const follows = [
        { name: "팔로우", greeting: "자기소개/한줄소개" },
        { name: "팔로우", greeting: "자기소개/한줄소개" },
        { name: "팔로우", greeting: "자기소개/한줄소개" },
        { name: "팔로우", greeting: "자기소개/한줄소개" },
    ]
    const followings = [
        { name: "팔로잉", greeting: "자기소개/한줄소개" },
        { name: "팔로잉", greeting: "자기소개/한줄소개" },
        { name: "팔로잉", greeting: "자기소개/한줄소개" },
        { name: "팔로잉", greeting: "자기소개/한줄소개" },
    ]

    //메뉴 리스트
    const menuList = [
        {
            content:
                <div className='plan'>
                    {planCards.map((title) => {
                        return (
                            <ProfilePlan />
                        )
                    }
                    )}
                </div>
        },
        {
            content:
                <div className='follow'>
                    {followings.map((mate) => {
                        return (
                            <ProfileFollow mate={mate} editMode={false}/>
                        )
                    }
                    )}
                </div>
        },
        {
            content:
                <div className='follow'>
                    {follows.map((mate) => {
                        return (
                            <ProfileFollow mate={mate} editMode={false}/>
                        )
                    }
                    )}
                </div>
        },
    ]
    //메뉴
    const [menu, setMenu] = useState(0);
    const changeMenu = (menuIndex) => {
        setMenu(menuIndex)
    }

    //프로필 편집
    const navigate = useNavigate();
    const moveEditPage = () => {
        navigate('/myProfile/edit', {
            state: {
                
            }
        });
    }

    return (
        <>
            <TitleHeader title="마이페이지" />

            <ProfileContainer>
                <WrapProfilePhoto>
                    <img className='photo' src={tempProfile} />
                </WrapProfilePhoto>
                <div>
                    <h4 className='user-name'>김비플</h4>
                    <div className="tag-div">페스코</div>
                </div>
                <img className='setting-btn' src={settingButton} />
            </ProfileContainer>

            <MyPlanContainer>
                <div className="wrap-title">
                    <SmallTitle>나의 플랜</SmallTitle>
                    <span>
                        <span>플랜 전체보기</span>
                        <img src={arrow} className='arrow-btn'/>
                    </span>
                </div>

                
                
            </MyPlanContainer>

            
        </>
    );
}