import { Button, Spinner, Title1 } from '@fluentui/react-components';
import BusinessDetailsForm from '../business-details-form/business-details-form';
import { useEffect, useState } from 'react';
import Axios from 'axios-observable';
import { StartApplication } from '@demyst/models';

/* eslint-disable-next-line */
export interface StartLoanProps {}

export function StartLoan(props: StartLoanProps) {
  const [token, setToken] = useState<StartApplication>();
  useEffect(() => {
    Axios.get<StartApplication>('/api/initiate-application').subscribe({
      next: ({ data }) => setToken(data),
    });
  }, []);

  return token ? (
    <>
      <Title1>Start Loan</Title1>
      <BusinessDetailsForm providers={token.providers} token={token.token} />
    </>
  ) : (
    <Spinner></Spinner>
  );
}

export default StartLoan;
