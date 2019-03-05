import React from 'react';
import { shallow } from 'enzyme';

import GuessForm from './guess-section';

describe('GuessForm component', () => {
  it('renders without throwing an error', () => {
    shallow(<GuessForm />);
  });
});
