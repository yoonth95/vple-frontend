import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {Url} from '../Url';

const KakaoAuthHandle = (props) => {

    useEffect(() => {
      
      let code = new URL(window.location.href).searchParams.get('code');

      const kakaoLogin = async () => {
        axios
          .get(`${Url}/api/oauth/token?code=${code}`)
          .then((res) => {
            console.log(res);

            localStorage.setItem('token', res.headers.get("Authorization"));
            localStorage.setItem('token_body', res.body);
            

            window.location.href = "/";
          })
      }
      kakaoLogin()
    }, [props.history])
  
    return (
      <>
        <div>로그인 중입니다. 잠시만 기다려주세요.</div>
      </>
    )
  }
  export default KakaoAuthHandle