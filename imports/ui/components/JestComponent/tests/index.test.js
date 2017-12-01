import JestComponent from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<JestComponent />', () => {
  it('Expect to have unit tests specified', () => {
		const component = shallow(<JestComponent currentLocale='en'/>);
    expect(component.find('IntlProvider')).to.have.length(1);
  });
});
