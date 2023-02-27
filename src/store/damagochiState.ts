import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface DamagochiSate {
  name: string;
  age: 'egg' | 'baby' | 'adult';
  diaryCounting: number;
  isGrow: boolean;
}

export const damagochiState = atom<DamagochiSate>({
  key: 'damagochiState',
  default: {
    name: '',
    age: 'egg',
    diaryCounting: 0,
    isGrow: false,
  },
  effects_UNSTABLE: [persistAtom],
});
