import {
  ToolbarButton,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';
import {
  HomeRegular,
  PlayRegular,
  WeatherSunny16Filled,
} from '@fluentui/react-icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { tokens } from '@fluentui/react-theme';
import { appUrls } from '../constants/appUrls';
interface Props {
  // emits True for Dark theme
  onThemeChange(): void;
}

const useStyles = makeStyles({
  headerColor: {
    color: tokens.colorBrandBackgroundInverted,
  },
  header: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorBrandBackgroundInverted,
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap(tokens.spacingHorizontalM),
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  spacer: {
    flexGrow: 1,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecorationLine: 'none',
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

export const Header: FC<Props> = ({ onThemeChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <Link
        to={appUrls.home}
        className={mergeClasses(styles.headerColor, styles.link)}
      >
        <HomeRegular />
        Home
      </Link>
      <Link
        to={appUrls.startLoan}
        className={mergeClasses(styles.headerColor, styles.link)}
      >
        <PlayRegular />
        Start Loan
      </Link>
      <div className={styles.spacer} />
      <ToolbarButton
        aria-label="Theme"
        onClick={() => onThemeChange()}
        icon={<WeatherSunny16Filled />}
        className={styles.headerColor}
      />
    </div>
  );
};
