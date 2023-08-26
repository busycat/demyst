import {
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
import { MoneyRegular, ShareRegular } from '@fluentui/react-icons';

export const StartLoan: FC = () => {
  const [token, setToken] = useState<StartApplication>();
  const [t2, setT2] = useState<LoanApplicationRequest>();

  useEffect(() => {
    Axios.get<StartApplication>('/api/initiate-application').subscribe({
      next: ({ data }) => setToken(data),
    });
  }, []);

  const getBalanceSheet = useCallback((params: BalanceSheetRequest) => {
    Axios.get<BalanceSheet>('/api/balance-sheet', {
      params,
    }).subscribe({
      next: ({ data }) => console.log(data),
    });
  }, []);

  return token ? (
    <>
      <Title1>Start Loan</Title1>
      <Card>
        <CardHeader header={<Body1>Start Loan Application</Body1>} />
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

        <CardFooter>
          <Button icon={<MoneyRegular fontSize={16} />}>Start loan</Button>
          <Button icon={<ShareRegular fontSize={16} />}>Know more</Button>
        </CardFooter>
      </Card>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default StartLoan;
