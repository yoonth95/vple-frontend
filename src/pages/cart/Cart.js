import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DetailHeader from '../../components/titleHeader/TitleHeader';
import RestaurantCardButton from '../../components/restaurantCardButton/RestaurantCardButton';
import {Url} from '../Url';

import {
  LoginWindow,
  WrapButton,
  CardContainer,
  CardWrap,
} from './CartStyle';
import lock from '../../asset/lock.png';
import { useRecoilState } from 'recoil';
import { cartPlanBtnState } from '../../recoil/state';

import planDefaultImg from '../../asset/planDefault.png';

function Cart(props) {

  const token = localStorage.getItem("token");

  const [restaurantList, setRestaurantList] = useState([]);
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    axios.get(`${Url}/auth/me`, {
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

    axios.get(`${Url}/auth/cart`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log("식당목록", response);
        setRestaurantList(response.data);
      })

    axios.get(`${Url}/auth/liked/plan`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log("플랜목록", response);
        setPlanList(response.data);
      })

  }, []);

  const [planActive, setPlanActive] = useRecoilState(cartPlanBtnState);

  const navigate = useNavigate();
  const routerLogin = () => {
    navigate('/login')
    window.scrollTo(0, 0)
  }
  const routerGuideDetail = (id) => {
    navigate('/guide/detail', {
      state: {
        id: id,
        token: token,
        title: '추천 가이드',
      }
    })
    window.scrollTo(0, 0)
  }
  const routerRestaurantDetail = (id) => {
    navigate('/restaurant/detail', {
      state: {
        id: id,
      }
    });
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

      </WrapButton>
      {planActive ?
        <CardContainer className="card-container">
          {planList && planList.map(card => (
            <CardWrap>
              <RestaurantCardButton
                id={card.id}
                title={card.title}
                image={card.image1 === null ? planDefaultImg : card.image1}
                onClick={() => routerGuideDetail(card.id)}
              />
            </CardWrap>

          ))}
        </CardContainer>
        : <CardContainer className="card-container">
          {restaurantList && restaurantList.map(card => (
            <CardWrap>
              <RestaurantCardButton
                id={card.restaurantId}
                title={card.name}
                image={card.image}
                onClick={() => routerRestaurantDetail(card.restaurantId)}
              />
            </CardWrap>

          ))}
        </CardContainer>}

    </>
  );
}

export default Cart;