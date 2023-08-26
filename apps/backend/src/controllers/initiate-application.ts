import { StartApplication } from '@demyst/models';
import { uuid } from 'uuidv4';
import { AccountingProviderList } from '../abstractions/accounting-provider';

export const getApplicationToken = (req, res) => {
  const response: StartApplication = {
    token: uuid(),
    providers: AccountingProviderList.map((p) => ({ name: p, value: p })),
  };
  res.status(200).json(response);
};
