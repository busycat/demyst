import { render } from '@testing-library/react';

import StartLoan from './start-loan';

describe('StartLoan', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StartLoan />);
    expect(baseElement).toBeTruthy();
  });
});
