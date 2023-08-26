import { Button, Title1 } from '@fluentui/react-components';
import BusinessDetailsForm from '../business-details-form/business-details-form';

/* eslint-disable-next-line */
export interface StartLoanProps {}

export function StartLoan(props: StartLoanProps) {
  return (
    <>
      <Title1>Start Loan</Title1>
      <BusinessDetailsForm />
      <Button>Submit</Button>
    </>
  );
}

export default StartLoan;
