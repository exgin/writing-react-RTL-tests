import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

// smoke test
it('should render successfully', function () {
  render(<Carousel />);
});

// snapshot test
it('should match snapshot', function () {
  const { asFragment } = render(<Carousel />);

  expect(asFragment()).toMatchSnapshot();
});

it('works when you click on the right arrow', function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId('right-arrow');
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
});

// it('works when you click on the left arrow', function () {
//   const { queryByTestId, queryByAltText } = render(<Carousel />);

//   // expect the second image to show | not the first
//   expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
//   expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();

//   // move backwards in the carousel
//   const leftArrow = queryByTestId('left-arrow');
//   fireEvent.click(leftArrow);

//   // should move backwards to the last image, image 1
//   expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
//   expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
// });

it('should not show the left button', function () {
  const { queryByTestId } = render(<Carousel />);

  expect(queryByTestId('left-arrow')).not.toHaveClass();
});

it('should now show left button', function () {
  const { queryByTestId } = render(<Carousel />);

  const rightArrow = queryByTestId('right-arrow');
  fireEvent.click(rightArrow);

  expect(queryByTestId('left-arrow')).toHaveClass('fas fa-chevron-circle-left fa-2x');
});
