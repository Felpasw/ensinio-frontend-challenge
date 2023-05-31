import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import Footer from '.';

await waitFor(() =>
  it('Should be able to render the component "Footer"', () => {
    const { findAllByTestId } = render(<Footer />);
    expect(findAllByTestId('Footer')).toBeTruthy();
  })
);
