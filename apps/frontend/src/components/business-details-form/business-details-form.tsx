import { LoanApplicationRequest, StartApplication } from '@demyst/models';
import {
  Button,
  Input,
  Label,
  Select,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import {
  AttachRegular,
  BuildingRegular,
  MailRegular,
} from '@fluentui/react-icons';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = StartApplication;

const useStyles = makeStyles({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
});

export const BusinessDetailsForm: FC<Props> = ({ providers, token }) => {
  const styles = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanApplicationRequest>();
  const onSubmit: SubmitHandler<LoanApplicationRequest> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" value={token} {...register('token')} />
      <div className={styles.inputContainer}>
        <Label>Company name</Label>
        <Input
          contentBefore={<BuildingRegular />}
          {...register('companyName')}
        />
      </div>
      <div className={styles.inputContainer}>
        <Label>Company email</Label>
        <Input contentBefore={<MailRegular />} {...register('companyName')} />
      </div>
      <div className={styles.inputContainer}>
        <Label>Company address</Label>
        <Input
          contentBefore={<BuildingRegular />}
          {...register('companyName')}
        />
      </div>
      <div className={styles.inputContainer}>
        <Label>Company name</Label>
        <Input
          contentBefore={<BuildingRegular />}
          {...register('companyName')}
        />
      </div>
      <div className={styles.inputContainer}>
        <Label>Loan amount</Label>
        <Input
          type="number"
          contentBefore={<Text size={400}>$</Text>}
          contentAfter={<Text size={400}>.00</Text>}
          {...register('amount')}
        />
      </div>
      <div className={styles.inputContainer}>
        <Label>Accounting Provider</Label>
        <Select {...register('provider')}>
          {providers.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </Select>
      </div>

      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  );
};

export default BusinessDetailsForm;
