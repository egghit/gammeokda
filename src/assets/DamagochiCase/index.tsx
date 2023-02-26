import { ReactComponent as Orange } from './DamagochiCase_orange.svg';
import { ReactComponent as Pink } from './DamagochiCase_pink.svg';
import { ReactComponent as Purple } from './DamagochiCase_purple.svg';

const DamagochiTheme = {
  pink: <Pink />,
  orange: <Orange />,
  purple: <Purple />,
};

export type CaseTheme = 'pink' | 'orange' | 'purple';

export default DamagochiTheme;
