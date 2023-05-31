import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import HeroSection from '.';

await waitFor(() =>
  it('Should be able to render the component "HeroSection"', () => {
    const { findAllByTestId } = render(<HeroSection />);
    expect(findAllByTestId('HeroSection')).toBeTruthy();
  })
);
