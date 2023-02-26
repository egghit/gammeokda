import { DefaultTheme } from 'styled-components';

const color = {
  white: '#FFFDFB',
  black: '#222222',
  primaryLighter: '#F6BCC2',
  primaryLight: '#FFA6AB',
  primary: '#FF7880',
  primaryDimmed: '#D4A6AB',
  primaryDark: '#6F272F',
  secondary: '#813E3F',
  secondaryDark: '#6D3435',
};

export type ColorType = typeof color;

const theme: DefaultTheme = {
  color,
};

export default theme;
