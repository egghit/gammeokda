import { useState } from 'react';

import { Emotion } from '@/@types/types';

const WriteWrapper = () => {
  const emotions: Emotion[] = ['기쁨', '슬픔', '행복', '쏘쏘', '화남'];
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>('슬픔');

  const handleEmotionClick = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <div>
      <p>다음 감정 중 하나를 선택하세요:</p>
      {emotions.map((emotion, index) => (
        <button key={index} onClick={() => handleEmotionClick(emotion)}>
          {emotion}
        </button>
      ))}
      <p>선택된 감정: {selectedEmotion}</p>
    </div>
  );
};

export default WriteWrapper;
