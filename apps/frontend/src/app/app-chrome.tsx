import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FluentProvider } from '@fluentui/react-components';
import { getTheme } from './theme';
import { Header } from './header';
import { Footer } from './footer';

const useStyles = makeStyles({
  page: {
    ...shorthands.margin(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
});

export const AppChrome: FC = () => {
  const styles = useStyles();
  const [themeIsDark, setThemeIsDark] = useState(false);

  return (
    <FluentProvider
      theme={getTheme(themeIsDark)}
      style={{ minHeight: '100vh' }}
    >
      <Header onThemeChange={() => setThemeIsDark((p) => !p)} />
      <div className={styles.page}>
        <Outlet />
      </div>
      <Footer />
    </FluentProvider>
  );
};
