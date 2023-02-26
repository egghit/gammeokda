import { useEffect, useState } from 'react';

import * as S from './Diary.style';

import ArrowDown from '@/assets/commonIcon/arrow_down.svg';
import ArrowUp from '@/assets/commonIcon/arrow_up.svg';
import Angry from '@/assets/damogochiEmotion/happy_active.svg';

const Diary = () => {
  const [itemList, setItemList] = useState<any>([]);
  const [isMoreContents, setIsMoreContents] = useState<boolean>(false);

  useEffect(() => {
    setItemList([
      {
        id: '1224a3',
        date: '4일 토',
        text: '편견에 갇힌 여자가 저를 가둔 가타부타를 깨다 못해 박살내는 이야기. 그리고 그 혁명에 불을 지핀 기적같은 한 남자 이야기분명 뜨끈한 사랑 얘긴데, 맨날 사랑만 하진 않는 애기.진짜 사람들의 진짜 이야기여기 편견에 갇힌 한 여자가 있습니다. 아무도 그녀의 행복을 예상하지 못했죠. 우리 속 무심하고도 사소한 시선들이 그녀를 쉽게 재단하지만, 우리속 무심하고도 사소한 배려들이 그녀의 세상을 바꿀수도 있습니다. 편견에 갇힌 한 사람이 조금씩 틀을 깨고 나와 포효하기까지, 그 사소하지만 위대한 기적을 만들어 낸건 평범한 듯 안평범한 난 놈, 용식이였습니다. 만에게 무조건 직진으로 마음을 보여주는 촌므파탈의 폭격형 로맨스를 시작하면서 겪게되는 시골살이 생활밀찰형 로맨스적인 드라마입니다.',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '행복',
      },
      {
        id: '45aa3',
        date: '3일 금',
        text: '',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '슬픔',
      },
      {
        id: '133aaa',
        date: '3일 금',
        text: '편견에 갇힌 여자가 저를 가둔 가타부타를 깨다 못해 박살내는 이야기. 그리고 그 혁명에 불을 지핀 기적같은 한 남자 이야기분명 뜨끈한 사랑 얘긴데, 맨날 사랑만 하진 않는 애기.진짜 사람들의 진짜 이야기여기 편견에 갇힌 한 여자가 있습니다. 아무도 그녀의 행복을 예상하지 못했죠. 우리 속 무심하고도 사소한 시선들이 그녀를 쉽게 재단하지만, 우리속 무심하고도 사소한 배려들이 그녀의 세상을 바꿀수도 있습니다. 편견에 갇힌 한 사람이 조금씩 틀을 깨고 나와 포효하기까지, 그 사소하지만 위대한 기적을 만들어 낸건 평범한 듯 안평범한 난 놈, 용식이였습니다. 만에게 무조건 직진으로 마음을 보여주는 촌므파탈의 폭격형 로맨스를 시작하면서 겪게되는 시골살이 생활밀찰형 로맨스적인 드라마입니다.',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '쏘쏘',
      },
    ]);
  }, []);

  return (
    <>
      {itemList.length > 0 ? (
        <>
          {itemList?.map((i: any) => {
            return (
              <S.ItemWrapper key={i.id}>
                <div>
                  <S.ActionButton>수정</S.ActionButton>
                  <S.ActionButton>삭제</S.ActionButton>
                </div>
                <S.Info key={i.id}>
                  <S.DateWrapper>
                    <img src={Angry} alt="emotion" />
                    <S.DiaryDate>{i.date}</S.DiaryDate>
                  </S.DateWrapper>
                  <S.ContentWrapper isMoreContents={isMoreContents}>
                    <p>{i.text || '작성된 글이 없습니다.'}</p>
                    {i.photo && <img src={i.photo} alt="photo" />}
                  </S.ContentWrapper>
                </S.Info>
                <S.ScrollButtonWrapper>
                  <S.ScrollToTopButton
                    src={isMoreContents ? ArrowDown : ArrowUp}
                    alt="펼치기"
                    onClick={() => setIsMoreContents(!isMoreContents)}
                  />
                </S.ScrollButtonWrapper>
              </S.ItemWrapper>
            );
          })}
        </>
      ) : (
        <p>일기가 없어요</p>
      )}
    </>
  );
};

export default Diary;
