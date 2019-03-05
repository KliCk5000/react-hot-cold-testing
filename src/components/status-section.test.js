import React from 'react';
import { shallow } from 'enzyme';

import StatusSection from './guess-section';

describe('StatusSection component', () => {
  it('renders without throwing an error', () => {
    shallow(<StatusSection />);
  });
});