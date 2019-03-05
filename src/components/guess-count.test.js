import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-section';

describe('GuessCount component', () => {
  it('renders without throwing an error', () => {
    shallow(<GuessCount />);
  });
});