import React from 'react';
import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('StatusSection component', () => {
  it('renders without throwing an error', () => {
    shallow(<StatusSection guesses={[]}/>);
  });
});