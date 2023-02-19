const CLIENT_ID = '9bace5ab316d4073d7412f542dd4f2c8';
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`