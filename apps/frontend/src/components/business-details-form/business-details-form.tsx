import { StartApplication } from '@demyst/models';
import { Input, Label, Text } from '@fluentui/react-components';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = StartApplication;
type Inputs = {
  token: string;
  example: string;
  exampleRequired: string;
};

export const BusinessDetailsForm: FC<Props> = ({ providers, token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" value={token} {...register('token')} />
      <input defaultValue="test" {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <div>
        <Label>Amount to pay</Label>
        <Input
          contentBefore={<Text size={400}>$</Text>}
          contentAfter={<Text size={400}>.00</Text>}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default BusinessDetailsForm;
