import { Toolbar, ToolbarButton } from '@fluentui/react-components';
import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
} from '@fluentui/react-icons';
import { FluentProvider } from '@fluentui/react-components';
import { getTheme } from './theme';
import { Header } from './header';
import { Footer } from './footer';

export const AppChrome: FC = () => {
  const [themeIsDark, setThemeIsDark] = useState(false);
  return (
    <FluentProvider theme={getTheme(themeIsDark)}>
      <Header onThemeChange={() => setThemeIsDark((p) => !p)} />
      <Outlet />
      <Footer />
    </FluentProvider>
  );
};
