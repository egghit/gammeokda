import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './damagochi.styels';
import {
  caseInitialState,
  caseReducer,
  damagochiInitailState,
  damagochiReducer,
  DamagochiAction,
} from './damagochiReducer';

import { DamagochiAnimation } from '@/assets/damagochi';
import DamagochiTheme from '@/assets/damagochiCase';
import Modal from '@/components/common/Modal';

interface DamagochiProps {
  name: string;
  age: 'egg' | 'baby' | 'adult';
  isGrow: boolean;
  setIsGrow: Dispatch<SetStateAction<boolean>>;
}

const Damagochi = ({ name, age, isGrow, setIsGrow }: DamagochiProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [caseTheme, caseDispatch] = useReducer(caseReducer, caseInitialState);
  const [damagochiState, damagochiDispatch] = useReducer(damagochiReducer, damagochiInitailState);
  const [showModal, setShowModal] = useState(false);

  const damagochiAnimation = DamagochiAnimation[`${age}`][`${damagochiState.animation}`];

  const isIOSSafari = navigator.userAgent.match(/like Mac OS X/i) ? true : false;

  const handleTheme = () => {
    caseDispatch('click');
  };
  const handelModal = () => {
    setShowModal((prev) => !prev);
  };

  const handelAnimation = (action: DamagochiAction) => {
    damagochiDispatch(action);
    setTimeout(
      () => {
        damagochiDispatch('default');
      },
      action === 'growth' ? 1000 : 4000,
    );
  };

  useEffect(() => {
    if (isGrow) {
      setIsGrow(false);
      return handelAnimation('growth');
    }
    if (state) {
      handelAnimation(state.state);
    }
  }, [state, isGrow]);

  return (
    <>
      <S.Layout>
        <S.Container>
          {DamagochiTheme[caseTheme]}
          <S.CharName>
            <h1>{name}</h1>
          </S.CharName>
          <S.Character>{damagochiAnimation}</S.Character>
          <S.LeftButton onClick={handleTheme}>테마변경</S.LeftButton>
          <S.CenterButton onClick={() => navigate('/write')}>감정주기</S.CenterButton>
          <S.RightButton onClick={isIOSSafari ? handelModal : () => handelAnimation('stroke')}>
            쓰다듬기
          </S.RightButton>
        </S.Container>
      </S.Layout>
      {showModal && <Modal onClose={handelModal} text="IOS환경에서는 지원되지 않습니다." />}
    </>
  );
};

export default Damagochi;
