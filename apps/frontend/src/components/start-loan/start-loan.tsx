import {
  Button,
  Spinner,
  Title1,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import BusinessDetailsForm from '../business-details-form/business-details-form';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface StartLoanProps {}

const useStyles = makeStyles({
  page: {
    ...shorthands.margin(tokens.spacingVerticalM, 'auto'),
  },
});

export function StartLoan(props: StartLoanProps) {
  const [token, setToken] = useState<string>();

  return token ? (
    <>
      <Title1>Start Loan</Title1>
      <BusinessDetailsForm />
      <Button>Submit</Button>
    </>
  ) : (
    <Spinner></Spinner>
  );
}

export default StartLoan;
