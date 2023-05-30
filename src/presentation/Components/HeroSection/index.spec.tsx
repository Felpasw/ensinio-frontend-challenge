import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, expect } from 'vitest';
import HeroSection from '.';

it('Should be able to render the component "HeroSection"', () => {
  const { findAllByTestId } = render(<HeroSection />);
  expect(findAllByTestId('HeroSection')).toBeVisible();
});
