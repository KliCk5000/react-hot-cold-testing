import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('TopNav component', () => {
  it('renders without throwing an error', () => {
    shallow(<TopNav />);
  });
});
