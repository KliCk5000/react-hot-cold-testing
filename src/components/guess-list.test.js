import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-section';

describe('GuessList component', () => {
  it('renders without throwing an error', () => {
    shallow(<GuessList />);
  });
});