import { ReactComponent as Bar_0 } from './progressBar_0.svg';
import { ReactComponent as Bar_10 } from './progressBar_10.svg';
import { ReactComponent as Bar_100 } from './progressBar_100.svg';
import { ReactComponent as Bar_20 } from './progressBar_20.svg';
import { ReactComponent as Bar_30 } from './progressBar_30.svg';
import { ReactComponent as Bar_40 } from './progressBar_40.svg';
import { ReactComponent as Bar_50 } from './progressBar_50.svg';
import { ReactComponent as Bar_60 } from './progressBar_60.svg';
import { ReactComponent as Bar_70 } from './progressBar_70.svg';
import { ReactComponent as Bar_80 } from './progressBar_80.svg';
import { ReactComponent as Bar_90 } from './progressBar_90.svg';
import { ReactComponent as Container } from './progressContainer.svg';

type ProgressBarType = {
  [key: number]: JSX.Element;
};
const bar: ProgressBarType = {
  0: <Bar_0 />,
  10: <Bar_10 />,
  20: <Bar_20 />,
  30: <Bar_30 />,
  40: <Bar_40 />,
  50: <Bar_50 />,
  60: <Bar_60 />,
  70: <Bar_70 />,
  80: <Bar_80 />,
  90: <Bar_90 />,
  100: <Bar_100 />,
};
const container = <Container />;

const Progress = {
  bar,
  container,
};

export default Progress;
