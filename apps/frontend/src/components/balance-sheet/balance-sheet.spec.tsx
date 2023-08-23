import { render } from '@testing-library/react';

import BalanceSheet from './balance-sheet';

describe('BalanceSheet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BalanceSheet />);
    expect(baseElement).toBeTruthy();
  });
});
