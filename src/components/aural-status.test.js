import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './guess-section';

describe('AuralStatus component', () => {
  it('renders without throwing an error', () => {
    shallow(<AuralStatus />);
  });
});