import { CURRENCY_SYMBOL } from '@demyst/models';
import { makeStyles, tokens } from '@fluentui/react-components';
import { FC } from 'react';

const getStyles = makeStyles({
  negative: {
    color: tokens.colorPaletteRedForeground1,
  },
});

interface Props {
  amount: number;
}
export const Currency: FC<Props> = ({ amount }) => {
  const styles = getStyles();
  const isNegative = amount < 0;
  return (
    <span className={isNegative ? styles.negative : undefined}>
      {isNegative
        ? `-${CURRENCY_SYMBOL}${Math.abs(amount)}`
        : `${CURRENCY_SYMBOL}${Math.abs(amount)}`}
    </span>
  );
};
