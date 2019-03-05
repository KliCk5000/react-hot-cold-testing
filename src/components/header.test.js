import React from 'react';
import { shallow } from 'enzyme'

import Header from './header';

describe('Game Component', () => {
  it('renders without throwing an error', () => {
    shallow(<Header />);
  });
});