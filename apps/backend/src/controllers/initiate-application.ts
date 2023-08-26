import { AccountingProviderList, StartApplication } from '@demyst/models';
import { uuid } from 'uuidv4';

export const getApplicationToken = (req, res) => {
  const response: StartApplication = {
    token: uuid(),
    providers: AccountingProviderList.map((p) => ({
      name: p,
      value: p.toLocaleLowerCase(),
    })),
  };
  res.status(200).json(response);
};
