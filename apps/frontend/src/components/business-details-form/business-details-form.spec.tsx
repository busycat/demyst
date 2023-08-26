import { render } from '@testing-library/react';

import BusinessDetailsForm from './business-details-form';

describe('BusinessDetailsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessDetailsForm />);
    expect(baseElement).toBeTruthy();
  });
});
