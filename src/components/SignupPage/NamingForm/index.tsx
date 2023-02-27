import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './NamingForm.style';

import { ReactComponent as DamagochiEgg } from '@/assets/damagochi_egg.svg';
import Button from '@/components/common/Button';

const NamingForm = () => {
  const navigate = useNavigate();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    if (!target) return;

    const data = new FormData(target);
    const name = data.get('name');

    localStorage.setItem('name', name?.toString() ?? DEFAULT_NAME);
    navigate('/diaries');
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Title>
        곧 부화할 아이의
        <br />
        이름을 지어주세요!
      </S.Title>
      <S.Input name="name" placeholder={DEFAULT_NAME} />
      <DamagochiEgg width={300} height={400} role="img" aria-label="다마고치 알" />
      <S.Alert>
        한번 지은 이름은 변경이 불가하니 <br />
        신중하게 지어주세요!
      </S.Alert>
      <Button fontSize="x-large">함께하기</Button>
    </S.Form>
  );
};

const DEFAULT_NAME = '곶감이';

export default NamingForm;
