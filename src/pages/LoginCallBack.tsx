import axios, { AxiosResponse } from 'axios';
import { signInWithCustomToken } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth as firebaseAuth, db } from '../firebase';
interface KakaoProfile {
  nickname?: string;
  thumbnail_image_url?: string;
  profile_image_url?: string;
  is_default_image?: boolean;
}

interface KakaoAccount {
  profile?: KakaoProfile;
  name?: string;
  email?: string;
  birthday?: string;
  gender?: 'male' | 'female';
}

interface Auth {
  firebaseToken: string;
  kakaoUser: {
    id: string;
    kakao_account?: KakaoAccount | undefined;
  };
}

// [key : string] : string
export default function LoginCallBack() {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | null>(null);
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const navigate = useNavigate();
  if (!code) {
    navigate('/');
  }

  console.log(auth);

  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<Auth> = await axios.post('/api/auth/kakao', { code });
        const {
          kakaoUser: { id },
          firebaseToken,
        } = res.data;

        // Firebase Auth 사용자 id를 이용해
        // Firestore에서 동일한 유저 문서를 가져옴
        const user = await getDoc(doc(db, 'users', id));

        if (user.exists()) {
          // Firestore에 저장되어 있다면 회원가입이 되어있다는 뜻이므로
          // 커스텀 토큰을 이용해 로그인 처리
          await signInWithCustomToken(firebaseAuth, firebaseToken);
        } else {
          setAuth(res.data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return <></>;
}
