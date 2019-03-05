import React from 'react';
import { shallow } from 'enzyme';

import InfoSection from './guess-section';

describe('InfoSection component', () => {
  it('renders without throwing an error', () => {
    shallow(<InfoSection />);
  });
});
