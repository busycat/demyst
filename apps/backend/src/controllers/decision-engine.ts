import { DecisionOutcome, DecisionRequest } from '@demyst/models';
import { Request, Response } from 'express';

const INITIAL_PREASSESSMENT = 20;
const IN_PROFIT_PREASSESSMENT = 60;
const ASSETS_BACKED_PREASSESSMENT = 100;

export const createDecision = (
  req: Request<unknown, unknown, DecisionRequest>,
  res: Response<DecisionOutcome>
) => {
  const { amount, sheet, token }: DecisionRequest = req.body;
  let preAssessment = INITIAL_PREASSESSMENT;

  // Assuming sheet is provided in decending Order and contains atleast 1 year of data
  // Gaps are not handeled

  const lastYearProfitAndLoss = sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);

  if (lastYearProfitAndLoss > 0) {
    preAssessment = IN_PROFIT_PREASSESSMENT;
  }
  const assetsValueSum = sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);
  const averageAssetValue = assetsValueSum / 12;

  if (averageAssetValue > amount) {
    preAssessment = ASSETS_BACKED_PREASSESSMENT;
  }

  // Here we are rounding the approved amount, If business requirement is different we need to update
  const approvedAmount = Math.round((preAssessment * amount) / 100);

  res.status(200).json({
    approvedAmount,
    outcome: 'Approved',
    token,
  });
};
