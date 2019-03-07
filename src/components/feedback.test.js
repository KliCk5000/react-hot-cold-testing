import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('Feedback component', () => {
  it('renders without throwing an error', () => {
    shallow(<Feedback />);
  });
});