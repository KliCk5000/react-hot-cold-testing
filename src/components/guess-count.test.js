import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('GuessCount component', () => {
  it('renders without throwing an error', () => {
    shallow(<GuessCount />);
  });

  it('Renders the correct guess count', () => {
    const value = 5;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});