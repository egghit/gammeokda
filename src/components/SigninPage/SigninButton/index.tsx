import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SigninButton.style';

import buttonSource from '@/assets/kakao_login_button.png';
import env from '@/config';

const LoginButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/signup');
    return;
    const redirectUri = env.KAKAO_REDIRECT_URI;
    window.Kakao.Auth.authorize({ redirectUri });
  };

  useEffect(() => {
    if (window.Kakao.isInitialized) return;

    window.Kakao.init(env.KAKAO_KEY);
  }, []);

  return <S.Button src={buttonSource} onClick={onClick} role="button" aria-label="로그인 버튼" />;
};

export default LoginButton;
