import DetailHeader from '../../components/titleHeader/TitleHeader'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Url} from '../Url';

import planDefaultImg from '../../asset/planDefault.png';
import DeleteModeBtn from '../../asset/moreGreen.png';
import DeleteBtn from '../../asset/IconRedDelete.png';

import {
    WrapHeader,
    WrapDeleteMode,
    CardContainer,
    WrapCards,
    WrapCard,
    WrapModal,

} from './ViewAllMyPlanStyle';

function ViewAllMyPlan() {

    // const location = useLocation();
    // const myPlans = location.state.list;

    const [myInfo, setMyInfo] = useState([]);
    const [myPlans, setMyPlans] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {

        if (token !== "null") {
            updateMyInfo();
        }

    }, []);

    const updateMyInfo = () => {
        axios.get(`${Url}/auth/me`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setMyInfo(response.data);
            });
    }

    useEffect(() => {

        console.log(myInfo);

        setMyPlans(myInfo.myPlans);
    }, [myInfo])

    const [isClickDeleteBtn, setIsClickDeleteBtn] = useState(false);
    const showDeleteMode = () => {
        setIsClickDeleteBtn(!isClickDeleteBtn);
    }

    const [mode, setMode] = useState(0);
    const changeMode = (index) => {
        setMode(index);
        setIsClickDeleteBtn(false);
    }

    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteTitle, setDeleteTitle] = useState("무제");
    const [deleteId, setDeleteId] = useState(-1);

    const setDeletePlanId = (value) => {
        showModal();
        setDeleteTitle(value.title);
        setDeleteId(value.id);
    }
    const showModal = () => {
        setIsShowModal(true);
    }
    const hideModal = () => {
        setIsShowModal(false);
    }

    const deletePlan = () => {

        const deleteUrl = `${Url}/auth/plan/${deleteId}`;

        axios.delete(deleteUrl,
            {
                headers: {
                    Authorization: token
                },
            })
            .then(res => {
                // console.log(res);
                updateMyInfo();
                hideModal();
                changeMode(1);

            }).catch(err => {
                console.log(deleteId);
                console.log(err);
            });
        }

        const navigate = useNavigate();
        const routerGuideDetail = (id) => {
            navigate('/guide/detail', {
                state: {
                    id: id,
                    token: token,
                    title: "나의 플랜",
                }
            })
            window.scrollTo(0, 0)
        }


        const contentMode = [
            {
                content:
                    <div>
                        {isClickDeleteBtn &&
                            <WrapDeleteMode>
                                <div className='mode-background'>
                                    <div onClick={() => { changeMode(1) }}>선택삭제</div>
                                    <div className='line' />
                                    <div onClick={() => { changeMode(2) }}>전체삭제</div>
                                </div>
                            </WrapDeleteMode>
                        }
                        <CardContainer>
                            <WrapCards>
                                {
                                    myPlans&&myPlans.slice(0).reverse().map((value, index) => {
                                        return (
                                            <WrapCard onClick={()=>routerGuideDetail(value.id)}>
                                                <img className='img-photo' src= {value.image === null ?planDefaultImg : value.image } />
                                                <div className='div-content'>
                                                    <span className='plan-title'>{value.title}</span>
                                                </div>
                                            </WrapCard>
                                        )
                                    })
                                }
                            </WrapCards>
                        </CardContainer>
                    </div>

            },
            {
                content:
                    <div>
                        {isClickDeleteBtn &&
                            <WrapDeleteMode>
                                <div className='mode-background'>
                                    <div onClick={() => { changeMode(0) }}>플랜보기</div>
                                    <div className='line' />
                                    <div onClick={() => { changeMode(2) }}>전체삭제</div>
                                </div>
                            </WrapDeleteMode>
                        }
                        <CardContainer>
                            <WrapCards>
                                {
                                    myPlans&&myPlans.slice(0).reverse().map((value, index) => {
                                        return (
                                            <WrapCard>
                                                <img className='delete-btn' src={DeleteBtn} onClick={() => setDeletePlanId(value)} />
                                                <img className='img-photo' src={value.image} />

                                                <div className='div-content'>
                                                    <span className='plan-title'>{value.title}</span>
                                                </div>
                                            </WrapCard>
                                        )
                                    })
                                }
                            </WrapCards>
                            {isShowModal &&
                                <WrapModal>
                                    <div className='modal-background'>
                                        <div className='text'>{deleteTitle} 플랜을 <br />삭제하시겠습니까?</div>
                                        <div className='line' />
                                        <div className='button'>
                                            <span onClick={hideModal}>취소</span><span className='between-btn'>|</span><span onClick={deletePlan}>확인</span>
                                        </div>

                                    </div>
                                </WrapModal>
                            }
                        </CardContainer>
                    </div>

            },
            {
                content:
                    <CardContainer>
                        <WrapCards>
                            {
                                myPlans&&myPlans.slice(0).reverse().map((value, index) => {
                                    return (
                                        <WrapCard>
                                            <img className='img-photo' src={value.image} />
                                            <div className='div-content'>
                                                <span className='plan-title'>전체</span>
                                            </div>
                                        </WrapCard>
                                    )
                                })
                            }
                        </WrapCards>
                    </CardContainer>
            },

        ]

        return (
            <>
                <WrapHeader>
                    <DetailHeader title="나의 플랜" />
                    <img src={DeleteModeBtn} alt="삭제 버튼" onClick={showDeleteMode} />
                </WrapHeader>


                {contentMode[mode].content}

            </>
        );
    }

    export default ViewAllMyPlan
