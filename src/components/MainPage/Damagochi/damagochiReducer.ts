import { CaseTheme } from '@/assets/damagochiCase';

type CaseState = CaseTheme;
type CaseAction = 'click';

export const caseInitialState: CaseState =
  (localStorage.getItem('caseTheme') as CaseTheme) ?? 'pink';

export const caseReducer: React.Reducer<CaseState, CaseAction> = (state) => {
  switch (state) {
    case 'pink':
      localStorage.setItem('caseTheme', 'orange');
      return 'orange';
    case 'orange':
      localStorage.setItem('caseTheme', 'purple');
      return 'purple';
    case 'purple':
      localStorage.setItem('caseTheme', 'pink');
      return 'pink';
  }
};

export type DamagochiAction =
  | 'stroke'
  | 'angry'
  | 'sad'
  | 'delight'
  | 'happy'
  | 'growth'
  | 'default';
type DamagochiState = {
  animation: DamagochiAction;
};

export const damagochiInitailState: DamagochiState = {
  animation: 'default',
};
export const damagochiReducer: React.Reducer<DamagochiState, DamagochiAction> = (state, action) => {
  switch (action) {
    case 'angry':
      return { ...state, animation: 'angry' };
    case 'delight':
      return { ...state, animation: 'delight' };
    case 'growth':
      return { ...state, animation: 'growth' };
    case 'happy':
      return { ...state, animation: 'happy' };
    case 'sad':
      return { ...state, animation: 'sad' };
    case 'stroke':
      return { ...state, animation: 'stroke' };
    default:
      return { ...state, animation: 'default' };
  }
};
