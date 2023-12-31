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
} from '@fluentui/react-components';
import { MoneyRegular, ShareRegular } from '@fluentui/react-icons';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { appUrls } from '../../constants/appUrls';

/* eslint-disable-next-line */
export interface BalanceSheetProps {}

const resolveAsset = (asset: string) => {
  const ASSET_URL = '/assets/';

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    width: '720px',
    maxWidth: '100%',
    ...shorthands.margin('', 'auto'),
  },
});

export const Home: FC<BalanceSheetProps> = (props) => {
  const styles = useStyles();

  const navigate = useNavigate();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={<img src={resolveAsset('avatar_elvia.svg')} alt="" />}
        header={
          <Body1>
            <b>Shubham Sharma</b> Posted
          </Body1>
        }
        description={<Caption1>Loan application</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset('logo.png')} height={30} alt="Logo demyst" />
        }
      >
        <img
          src={resolveAsset('doc_template.png')}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button
          onClick={() => navigate(appUrls.startLoan)}
          icon={<MoneyRegular fontSize={16} />}
        >
          Start loan
        </Button>
        <Button icon={<ShareRegular fontSize={16} />}>Know more</Button>
      </CardFooter>
    </Card>
  );
};
