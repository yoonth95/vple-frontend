import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailHeader from '../../components/detailHeader/DetailHeader'
import ProfilePlanEdit from '../../components/profilePlanEdit/ProfilePlanEdit';
import ProfileFollow from '../../components/profileFollow/ProfileFollow';

import {
    ProfileContainer,
    TagContainer,
    TagDiv,
    WrapProfilePhoto,
    WrapButton,
    SaveButton,
    StateContainer,
    ContainButton,
    ContentsContainer,

    CustomTypeSheet,
    CustomPhotoSheet,

} from './MyProfileEditStyle';
import IconEdit from '../../asset/IconEdit.png';
import IconPhoto from '../../asset/IconPhoto.png';

import tempProfile from '../../asset/temp/tempProfile.jpeg';
import { ButtonStyle } from '../../styles/ButtonStyle';

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

    const editMode = true;

    //메뉴 리스트
    const menuList = [
        {
            content:
                <div className='plan'>
                    {planCards.map((title) => {
                        return (
                            <ProfilePlanEdit />
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
                            <ProfileFollow mate={mate} editMode={true} btnMsg={"팔로잉"} />
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
                            <ProfileFollow mate={mate} editMode={true} btnMsg={"취소"} />
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

    //프로필 편집 버튼 정보 받기
    //const location = useLocation();

    //저장하기 버튼 -> 프로필 페이지 이동
    const navigate = useNavigate();
    const moveProfilePage = () => {
        navigate('/myProfile', {
            state: {

            }
        });
    }

    //바텀시트
    //프로필 사진 변경
    const [isPhotoSheetOpen, setIsPhotoSheetOpen] = useState(false);
    const openPhotoSheet = () => setIsPhotoSheetOpen(true);
    const closePhotoSheet = () => setIsPhotoSheetOpen(false);
    //타입
    const [isTypeSheetOpen, setIsTypeSheetOpen] = useState(false);
    const openTypeSheet = () => setIsTypeSheetOpen(true);
    const closeTypeSheet = () => setIsTypeSheetOpen(false);



    //사용자 태그
    const [userTag, setUserTag] = useState("비건");
    const changeTag = (newTag) => {
        setUserTag(newTag);
        closeTypeSheet();
    }

    return (
        <>
            <DetailHeader title="" />
            <ProfileContainer>
                <WrapProfilePhoto>
                    <img className='photo' src={tempProfile} />
                    <img className='edit-photo' src={IconPhoto} onClick={openPhotoSheet}/>
                </WrapProfilePhoto>
                <h4 className='mate-name'>메이트</h4>
                <input className='greeting' placeholder='자기소개/한줄소개' />
                <img src={IconEdit} className='edit-icon' />

                <TagContainer>
                    <ButtonStyle onClick={openTypeSheet}>
                        <TagDiv>{userTag}</TagDiv>
                    </ButtonStyle>
                </TagContainer>

            </ProfileContainer>
            <WrapButton>
                <SaveButton onClick={moveProfilePage}>저장하기</SaveButton>
            </WrapButton>
            <StateContainer>
                <ContainButton onClick={() => changeMenu(0)}>
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

            <ContentsContainer>
                {menuList[menu].content}
            </ContentsContainer>

            <CustomPhotoSheet isOpen={isPhotoSheetOpen} onClose={closePhotoSheet}>
                <CustomPhotoSheet.Container>
                    <CustomPhotoSheet.Header />
                    <CustomPhotoSheet.Content>
                        <div className='list'>사진 촬영</div>
                        <div className='list'>앨범에서 선택</div>
                    </CustomPhotoSheet.Content>
                </CustomPhotoSheet.Container>
                <CustomPhotoSheet.Backdrop onClick={closePhotoSheet} />
            </CustomPhotoSheet>

            <CustomTypeSheet isOpen={isTypeSheetOpen} onClose={closeTypeSheet}>
                <CustomTypeSheet.Container>
                    <CustomTypeSheet.Header />
                    <CustomTypeSheet.Content>
                        <div className='list' onClick={()=>changeTag("비건")}>비건</div>
                        <div className='list' onClick={()=>changeTag("락토")}>락토</div>
                        <div className='list' onClick={()=>changeTag("오보")}>오보</div>
                        <div className='list' onClick={()=>changeTag("락토 오보")}>락토 오보</div>
                        <div className='list' onClick={()=>changeTag("페스코")}>페스코</div>
                    </CustomTypeSheet.Content>
                </CustomTypeSheet.Container>
                <CustomTypeSheet.Backdrop onClick={closeTypeSheet} />
            </CustomTypeSheet>

            
        </>

    );
}