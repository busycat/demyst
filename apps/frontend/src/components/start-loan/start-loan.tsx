import {
  Body1,
  Button,
  Card,
  CardFooter,
  CardPreview,
  Spinner,
  Title1,
  Title3,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import BusinessDetailsForm from '../business-details-form/business-details-form';
import { FC, useCallback, useEffect, useState } from 'react';
import Axios from 'axios-observable';
import {
  BalanceSheet,
  BalanceSheetRequest,
  DecisionOutcome,
  DecisionRequest,
  LoanApplicationRequest,
  StartApplication,
} from '@demyst/models';
import { BalanceSheetComp } from '../balance-sheet/balance-sheet';
import { appUrls } from '../../constants/appUrls';
import { useNavigate } from 'react-router-dom';
import { CheckmarkStarburstFilled } from '@fluentui/react-icons';
import { Currency } from '../currency/currency';

const useStyles = makeStyles({
  card: {
    width: '720px',
    maxWidth: '100%',
    ...shorthands.margin(tokens.spacingVerticalL, 'auto'),
  },
  centerAlign: {
    textAlign: 'center',
  },
  checkMark: {
    width: '200px !important',
    color: tokens.colorPaletteLightGreenForeground2,
    ...shorthands.margin(0, 'auto'),
  },
});

export const StartLoan: FC = () => {
  const navigate = useNavigate();
  const styles = useStyles();

  // TODO: Here the states could be better managed if we use a reducer
  const [token, setToken] = useState<StartApplication>();

  const [loanDetails, setLoanDetails] = useState<LoanApplicationRequest>();
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>();
  const [outcome, setOutcome] = useState<DecisionOutcome>();

  useEffect(() => {
    Axios.get<StartApplication>('/api/initiate-application').subscribe({
      next: ({ data }) => setToken(data),
    });
  }, []);

  const getBalanceSheet = useCallback((params: BalanceSheetRequest) => {
    Axios.get<BalanceSheet>('/api/balance-sheet', {
      params,
    }).subscribe({
      next: ({ data }) => setBalanceSheet(data),
    });
  }, []);

  const getDecision = useCallback((data: DecisionRequest) => {
    Axios.post<DecisionOutcome>('/api/decision', data).subscribe({
      next: ({ data }) => setOutcome(data),
    });
  }, []);

  // This stage variable could be more meaningful,
  const stage = [loanDetails, balanceSheet, outcome].filter(Boolean).length;

  console.log('Stage ', stage);

  return token ? (
    <>
      <div className={styles.centerAlign}>
        <Title1>Loan application</Title1>
        <div>
          <Title3>
            {stage === 1
              ? 'Fill Business Details & Loan amount'
              : stage === 2
              ? 'View outcome'
              : ''}
          </Title3>
        </div>
      </div>
      <Card className={styles.card}>
        {stage === 0 && (
          <CardPreview>
            <BusinessDetailsForm
              isReadOnly={!!loanDetails}
              providers={token.providers}
              token={token.token}
              onSubmitLoanApplication={(loanApplication) => {
                setLoanDetails(loanApplication);
                localStorage.setItem(
                  'Application',
                  JSON.stringify(loanApplication)
                );
                getBalanceSheet({
                  provider: loanApplication.provider,
                  token: loanApplication.token,
                });
              }}
            />
          </CardPreview>
        )}
        {stage === 1 && <Body1>Getting balance sheet</Body1>}
        {stage === 2 && (
          <>
            <CardPreview>
              {balanceSheet && <BalanceSheetComp balanceSheet={balanceSheet} />}
            </CardPreview>
            <CardFooter>
              <Button
                disabled={!loanDetails || !balanceSheet}
                onClick={() => {
                  if (!balanceSheet || !loanDetails) {
                    throw new Error('Balance sheet or loan request not found');
                  }
                  return getDecision({ ...loanDetails, sheet: balanceSheet });
                }}
              >
                Submit application
              </Button>
            </CardFooter>
          </>
        )}
        {outcome && (
          <>
            <CardPreview>
              <CheckmarkStarburstFilled className={styles.checkMark} />
              <Title3 className={styles.centerAlign}>
                Congratulations!
                <br />
                Your loan is approved for
                <Currency amount={outcome.approvedAmount} />
              </Title3>
            </CardPreview>
            <CardFooter>
              <Button
                onClick={() => {
                  window.print();
                }}
              >
                Print
              </Button>
              <Button onClick={() => navigate(appUrls.home)}>Home</Button>
            </CardFooter>
          </>
        )}
      </Card>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default StartLoan;
