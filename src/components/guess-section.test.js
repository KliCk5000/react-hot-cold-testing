import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe('Guess Section component', () => {
  it('renders without throwing an error', () => {
    shallow(<GuessSection />);
  });
});
