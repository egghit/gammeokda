import 'styled-components';
import { ColorType } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
  }
}
