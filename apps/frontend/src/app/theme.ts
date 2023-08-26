import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

import type { BrandVariants, Theme } from '@fluentui/react-components';
// This Theme was created from https://react.fluentui.dev/?path=/docs/themedesigner--page

const demystic: BrandVariants = {
  10: '#05010C',
  20: '#190A46',
  30: '#1A0486',
  40: '#2A0E9F',
  50: '#4020A6',
  60: '#5130AD',
  70: '#6140B3',
  80: '#704FBA',
  90: '#7F5FC1',
  100: '#8D6EC8',
  110: '#9A7ECE',
  120: '#A88ED5',
  130: '#B59FDC',
  140: '#C2AFE2',
  150: '#D0C0E8',
  160: '#DDD1EF',
};

const lightTheme: Theme = {
  ...createLightTheme(demystic),
};

const darkTheme: Theme = {
  ...createDarkTheme(demystic),

  colorBrandForeground1: demystic[110],
  colorBrandForeground2: demystic[120],
};
export const getTheme = (isDark: boolean) => (isDark ? darkTheme : lightTheme);
