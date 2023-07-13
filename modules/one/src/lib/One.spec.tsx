import { render } from '@testing-library/react';

import One from './One';

describe('One', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<One />);
    expect(baseElement).toBeTruthy();
  });
});
