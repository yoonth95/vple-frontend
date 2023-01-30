import { useState, useEffect } from 'react';
import DetailHeader from '../../components/detailHeader/DetailHeader'
import ProfilePlan from '../../components/profilePlan/ProfilePlan';
import ProfileFollow from '../../components/profileFollow/ProfileFollow';
import { useNavigate } from 'react-router-dom';

import {
    ProfileContainer,
    TagContainer,
    TagDiv,
    WrapProfilePhoto,
    WrapButton,
    EditButton,
    SettingButton,
    StateContainer,
    ContainButton,
    ContentsContainer,


} from './MyProfileStyle';

import tempProfile from '../../asset/temp/tempProfile.jpeg';

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
            <DetailHeader title="" />
            <ProfileContainer>
                <WrapProfilePhoto>
                    <img className='photo' src={tempProfile} />
                </WrapProfilePhoto>
                <h4 className='mate-name'>메이트</h4>
                <p className='greeting'>자기소개/한줄소개</p>
                <TagContainer>
                    <TagDiv>페스코</TagDiv>
                </TagContainer>
            </ProfileContainer>
            <WrapButton>
                <EditButton onClick={moveEditPage}>프로필 편집</EditButton>
                <SettingButton>개인정보 설정</SettingButton>
            </WrapButton>
            <StateContainer>
                <ContainButton onClick={()=>changeMenu(0)}>
                    <div className='number'>24</div>
                    <div className='name'>플랜</div>
                </ContainButton>

                <ContainButton onClick={() => changeMenu(1)}>
                    <div className='number'>15</div>
                    <div className='name'>팔로잉</div>
                </ContainButton>

                <ContainButton onClick={() => changeMenu(2)}>
                    <div className='number'>34</div>
                    <div className='name'>팔로우</div>
                </ContainButton>
                <div className="partition" />
            </StateContainer>

            <ContentsContainer className='contentArea'>
                {menuList[menu].content}
            </ContentsContainer>

        </>
    );
}