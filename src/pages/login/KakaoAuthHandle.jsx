import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../../asset/logo.png';
import kakao from '../../asset/kakao.png';
import {
    Container,
    WrapLogin,
} from './LoginStyle';

const KakaoAuthHandle = (props) => {
    useEffect(() => {
      let code = new URL(window.location.href).searchParams.get('code')
      const kakaoLogin = async () => {
        axios
          .get(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/oauth/token?code=${code}`)
          .then((res) => {
            localStorage.setItem('token', res.headers.get("Authorization"));
            window.location.href = "/";
          })
      }
      kakaoLogin()
    }, [props.history])
  
    return (
      <>
        <Container></Container>
      </>
    )
  }
  export default KakaoAuthHandle