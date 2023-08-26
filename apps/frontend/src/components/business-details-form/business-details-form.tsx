import { LoanApplicationRequest, StartApplication } from '@demyst/models';
import {
  Body1,
  Button,
  Input,
  Label,
  Select,
  Text,
  makeStyles,
  shorthands,
  tokens,
  Textarea,
  mergeClasses,
  DatePicker,
} from '@fluentui/react-components';
import { BuildingRegular, MailRegular } from '@fluentui/react-icons';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type Props = StartApplication & {
  onSubmitLoanApplication: (_: LoanApplicationRequest) => void;
  isReadOnly: boolean;
};

const useStyles = makeStyles({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...shorthands.gap(tokens.spacingHorizontalM),
    ...shorthands.margin(0, 0, tokens.spacingVerticalM),
  },
  input: {
    width: '200px',
  },
  container: {
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
  label: {
    ...shorthands.flex(0, 0, '150px'),
  },
  error: {
    ...shorthands.border('1px', 'solid', tokens.colorPaletteRedBorderActive),
  },
  errorText: {
    color: tokens.colorPaletteRedBorderActive,
  },
});

export const BusinessDetailsForm: FC<Props> = ({
  providers,
  token,
  onSubmitLoanApplication: submitLoanApplication,
  isReadOnly,
}) => {
  const styles = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanApplicationRequest>({
    // defaultValues: {
    //   amount: 9999,
    //   companyName: 'Shubham',
    //   provider: 'myob',
    //   companyEmail: 'cossth@gmail.com',
    // },
  });

  return (
    <div className={styles.container}>
      <input type="hidden" value={token} {...register('token')} />
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Company name</Label>
        <Input
          className={mergeClasses(
            styles.input,
            errors.companyName ? styles.error : undefined
          )}
          contentBefore={<BuildingRegular />}
          {...register('companyName', {
            disabled: isReadOnly,
            required: 'Company Name is required',
            maxLength: {
              value: 128,
              message: 'Company Name should be max 128 characters.',
            },
            minLength: {
              value: 5,
              message: 'Company Name should be min 128 characters.',
            },
          })}
        />
        {errors.companyName && (
          <Body1 className={styles.errorText}>
            {errors.companyName?.message}
          </Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Email</Label>
        <Input
          className={mergeClasses(
            styles.input,
            errors.companyEmail ? styles.error : undefined
          )}
          type="email"
          contentBefore={<MailRegular />}
          {...register('companyEmail', {
            disabled: isReadOnly,
            required: 'Email is required.',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Please enter valid email.',
            },
          })}
        />
        {errors.companyEmail && (
          <Body1 className={styles.errorText}>
            {errors.companyEmail?.message}
          </Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Establishment Date</Label>
        <DatePicker
          className={mergeClasses(
            styles.input,
            errors.establishmentDate ? styles.error : undefined
          )}
          type="date"
          contentBefore={<MailRegular />}
          {...register('establishmentDate', {
            disabled: isReadOnly,
            required: 'Establishment Date is required.',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Please enter valid email.',
            },
          })}
        />
        {errors.establishmentDate && (
          <Body1 className={styles.errorText}>
            {errors.establishmentDate?.message}
          </Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Address</Label>
        <Textarea
          className={mergeClasses(
            styles.input,
            errors.companyAddress ? styles.error : undefined
          )}
          {...register('companyAddress', {
            disabled: isReadOnly,
          })}
        />
        {errors.companyAddress && (
          <Body1 className={styles.errorText}>
            {errors.companyAddress?.message}
          </Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Phone</Label>
        <Input
          className={mergeClasses(
            styles.input,
            errors.companyPhone ? styles.error : undefined
          )}
          contentBefore={<BuildingRegular />}
          {...register('companyPhone', {
            disabled: isReadOnly,
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: 'Phone number should be valid.',
            },
          })}
        />
        {errors.companyPhone && (
          <Body1 className={styles.errorText}>
            {errors.companyPhone?.message}
          </Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Loan amount</Label>
        <Input
          type="number"
          className={mergeClasses(
            styles.input,
            errors.amount ? styles.error : undefined
          )}
          contentBefore={<Text size={400}>$</Text>}
          contentAfter={<Text size={400}>.00</Text>}
          {...register('amount', {
            disabled: isReadOnly,
            required: 'Amount is required.',
            min: {
              value: 1000,
              message: 'Minimum amount is 1000',
            },
            max: {
              value: 999999999,
              message: 'Maximum amount is 999999999',
            },
          })}
        />
        {errors.amount && (
          <Body1 className={styles.errorText}>{errors.amount?.message}</Body1>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Label className={styles.label}>Accounting Provider</Label>
        <Select
          className={mergeClasses(
            styles.input,
            errors.provider ? styles.error : undefined
          )}
          {...register('provider', {
            disabled: isReadOnly,
            required: 'Please select accounting provider.',
          })}
        >
          {providers.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </Select>
        {errors.provider && (
          <Body1 className={styles.errorText}>{errors.provider?.message}</Body1>
        )}
      </div>
      {!isReadOnly && (
        <Button onClick={handleSubmit(submitLoanApplication)}>Continue</Button>
      )}
    </div>
  );
};

export default BusinessDetailsForm;
