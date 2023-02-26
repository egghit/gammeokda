import db from '../../firebase/db';

const diaryRef = db.collection('diary');

export const getDiaries = async () => {
  const snapshot = await diaryRef.get();

  return snapshot.docs.map((doc) => doc.data());
};
