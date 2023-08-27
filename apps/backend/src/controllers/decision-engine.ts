import { DecisionOutcome, DecisionRequest } from '@demyst/models';
import { Request, Response } from 'express';

export const createDecision = (
  req: Request<unknown, unknown, DecisionRequest>,
  res: Response<DecisionOutcome>
) => {
  const { amount, sheet }: DecisionRequest = req.body;
  let preAssessment = 20;

  // Assuming sheet is provided in decending Order and contains atleast 1 year of data
  // Gaps are not handeled

  const lastYearProfitAndLoss = sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);

  if (lastYearProfitAndLoss > 0) {
    preAssessment = 60;
  }
  const assetsValueSum = sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);
  const averageAssetValue = assetsValueSum / 12;

  if (averageAssetValue > amount) {
    preAssessment = 100;
  }
  const approvedAmount = (preAssessment * amount) / 100;

  res.status(200).json({
    approvedAmount,
    outcome: 'Approved',
    token: '',
  });
};
