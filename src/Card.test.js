import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

// smoke test
it('should render sucessfully', function () {
  render(<Card />);
});

// snapshot
it('should contain an caption, image, & num of image remaining', function () {
  const { asFragment } = render(<Card />);

  expect(asFragment()).toMatchSnapshot();
});
