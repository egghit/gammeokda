import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './damagochi.styels';
import {
  caseInitialState,
  caseReducer,
  damagochiInitailState,
  damagochiAniReducer,
  DamagochiAction,
} from './damagochiReducer';

import { DamagochiAnimation } from '@/assets/damagochi';
import DamagochiTheme from '@/assets/damagochiCase';
import Modal from '@/components/common/Modal';
import { damagochiState } from '@/store/damagochiState';

const Damagochi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [caseTheme, caseDispatch] = useReducer(caseReducer, caseInitialState);
  const [damagochiAniState, damagochiAniDispatch] = useReducer(
    damagochiAniReducer,
    damagochiInitailState,
  );
  const [damagochi, setDamagochi] = useRecoilState(damagochiState);
  const [showModal, setShowModal] = useState(false);

  const { name, age, isGrow } = damagochi;
  const damagochiAnimation = DamagochiAnimation[`${age}`][`${damagochiAniState.animation}`];

  // 우선 ios 테스트 해보기 위해 둘다 false로 변경해두었습니다.
  const isIOSSafari = navigator.userAgent.match(/like Mac OS X/i) ? false : false;

  const handleTheme = () => {
    caseDispatch('click');
  };
  const handelModal = () => {
    setShowModal((prev) => !prev);
  };

  const handelAnimation = (action: DamagochiAction) => {
    damagochiAniDispatch(action);
    setTimeout(() => {
      damagochiAniDispatch('default');
      // 애니메이션 변경 시간은 4초로 바꿨습니다. growth
    }, 4000);
  };

  useEffect(() => {
    if (isGrow) {
      handelAnimation('growth');
      return;
    }
    if (state) {
      handelAnimation(state.state);
    }
  }, [state, isGrow]);

  return (
    <>
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
      {showModal && <Modal onClose={handelModal} text="IOS환경에서는 지원되지 않습니다." />}
    </>
  );
};

export default Damagochi;
