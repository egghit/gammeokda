import React from 'react';

export default function Login() {
  const onLoginWithKakao = () => {
    const redirectUri = `${location.origin}/callback/kakaotalk`;
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  return <button onClick={onLoginWithKakao}>Login</button>;
}
