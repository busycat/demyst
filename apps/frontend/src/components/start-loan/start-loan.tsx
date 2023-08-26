import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Body1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Spinner,
  Title1,
} from '@fluentui/react-components';
import BusinessDetailsForm from '../business-details-form/business-details-form';
import { FC, useCallback, useEffect, useState } from 'react';
import Axios from 'axios-observable';
import {
  BalanceSheet,
  BalanceSheetRequest,
  LoanApplicationRequest,
  StartApplication,
} from '@demyst/models';
import { BalanceSheetComp } from '../balance-sheet/balance-sheet';

export const StartLoan: FC = () => {
  const [token, setToken] = useState<StartApplication>();
  const [t2, setT2] = useState<LoanApplicationRequest>();
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>();

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

  return token ? (
    <>
      <Title1>Start Loan</Title1>
      <Card>
        <CardPreview>
          <BusinessDetailsForm
            isReadOnly={!!t2}
            providers={token.providers}
            token={token.token}
            onSubmitLoanApplication={(loanApplication) => {
              setT2(loanApplication);
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
      </Card>
      <Card>
        <CardHeader header={<>Validate balance sheet</>} />
        <CardPreview>
          {balanceSheet && <BalanceSheetComp balanceSheet={balanceSheet} />}
        </CardPreview>
        <CardFooter>
          <Button>Submit application</Button>
        </CardFooter>
      </Card>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default StartLoan;
