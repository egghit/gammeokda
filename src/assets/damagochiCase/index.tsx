import { ReactComponent as Orange } from './damagochiCase_orange.svg';
import { ReactComponent as Pink } from './damagochiCase_pink.svg';
import { ReactComponent as Purple } from './damagochiCase_purple.svg';

const DamagochiTheme = {
  pink: <Pink />,
  orange: <Orange />,
  purple: <Purple />,
};

export type CaseTheme = 'pink' | 'orange' | 'purple';

export default DamagochiTheme;
