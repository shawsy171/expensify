import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './not-found-page';

describe('NotFoundPage Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

