import { useEffect, useState } from 'react';

import * as S from './Diary.style';

import { Diary } from '@/@types/types';

const DiaryComponent = () => {
  const [itemList, setItemList] = useState<Diary>([]);
  useEffect(() => {
    setItemList([
      {
        id: '1224a3',
        date: '2023-01-02',
        text: '즐거웠다',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '행복',
      },
      {
        id: '45aa3',
        date: '2023-01-04',
        text: '',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '슬픔',
      },
      {
        id: '133aaa',
        date: '2023-01-04',
        text: '춤을 췄다.',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '쏘쏘',
      },
    ]);
  }, []);

  return (
    <S.ItemWrapper>
      {itemList.length > 0 ? (
        <>
          {itemList.map((i: any) => {
            return (
              <>
                <div>
                  <S.ActionButton>수정</S.ActionButton>
                  <S.ActionButton>삭제</S.ActionButton>
                </div>
                <S.Info key={i?.id}>
                  <img src="/good.png" alt="emotion" width="100px" height="100px" />
                  <S.DiaryDate>{i?.date}</S.DiaryDate>
                  <div>
                    <p>다마고치를 키워보자</p>
                    <img src={i?.photo} alt="photo" width="100px" height="100px" />
                  </div>
                </S.Info>
              </>
            );
          })}
        </>
      ) : (
        <p>일기가 없어요</p>
      )}
    </S.ItemWrapper>
  );
};

export default DiaryComponent;
