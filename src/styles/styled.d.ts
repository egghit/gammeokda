import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      primaryLighter: string;
      primaryLight: string;
      primary: string;
      primaryDimmed: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
    };
  }
}
