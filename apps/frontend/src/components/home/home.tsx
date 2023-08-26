import { BalanceSheet } from '@demyst/models';
import {
  Body1,
  Button,
  Caption1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowReplyRegular,
  Money16Filled,
  MoneyRegular,
  ShareRegular,
} from '@fluentui/react-icons';
import { Axios } from 'axios-observable';
import { useState, useEffect, FC } from 'react';

/* eslint-disable-next-line */
export interface BalanceSheetProps {}

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/';

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('auto'),
    width: '720px',
    maxWidth: '100%',
    ...shorthands.margin(tokens.spacingVerticalM, 'auto'),
  },
});

export const Home: FC<BalanceSheetProps> = (props) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset('avatar_elvia.svg')}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Shubham Sharma</b> Posted
          </Body1>
        }
        description={<Caption1>Loan Offers</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset('docx.png')} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset('doc_template.png')}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<MoneyRegular fontSize={16} />}>Start loan</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Know more</Button>
      </CardFooter>
    </Card>
  );
};
