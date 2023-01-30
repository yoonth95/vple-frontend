import React, {useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {headerListState} from "../../recoil/state";
import { useNavigate } from "react-router-dom";
import { Container, NavContainer} from "./BottomNavStyle";

const BottomNav = () => {

    const headerTabList = useRecoilValue(headerListState); // 해더에 보여줄 배열 string 값

    let navigate = useNavigate();
    const onClickRouting = (index) => {
        if(index === 0 ){
            navigate('/')
        } else if (index === 1){
            navigate('/plan')
        } else if (index === 2) {
            navigate('/funding')
        } else if ( index === 3) {
            navigate('/myprofile')
        }else {
            return alert('error');
        }
    }

    return (
        <>
            <Container>
                <NavContainer >
                    {headerTabList.map((list, index) => {
                        return (
                            <div className='navItem' onClick={() => onClickRouting(index)}>{list}</div>
                        )
                    })}
                </NavContainer>
            </Container>
        </>
    )
}

export default BottomNav