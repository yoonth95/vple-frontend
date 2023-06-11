import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DetailHeader from '../../components/titleHeader/TitleHeader';

import {
  LoginWindow,
  WrapButton,
} from './CartStyle';
import lock from '../../asset/lock.png';

function Cart(props) {

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/me', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        // setMyInfo(response.data);
      })
      .catch(err => {
        console.log(err);

        if (err.response.data === "Authorization : 토큰이 만료되었습니다.\n") {
          // setIsLogin(false);
          localStorage.setItem('token', null);
        }
      });
  }, []);

  const [planActive, setPlanActive] = useState(true);

  const navigate = useNavigate();
  const routerLogin = () => {
    navigate('/login')
    window.scrollTo(0, 0)
  }

  return (
    <>
      {token === "null" && <LoginWindow>
        <div className='modal-background'>
          <img src={lock} />
          <div className='text-bold'>로그인이 필요합니다.</div>
          <div className="text">해당 기능 사용을 위해 <br /> 계정을 로그인 해주세요.</div>
          <div className='line' />
          <div className='button'>
            <span onClick={routerLogin}>확인</span>
          </div>
        </div>
      </LoginWindow>}
      <DetailHeader title="저장 목록" />

      <WrapButton>
        <div
          className={planActive ? "active" : "inactive"}
          onClick={() => setPlanActive(true)}
        > 플랜 </div>
        <div
          className={planActive ? "inactive" : "active"}
          onClick={() => setPlanActive(false)}
        > 식당 </div>

        {planActive ?
          <></>
          : <></>}

      </WrapButton>
    </>
  );
}

export default Cart;