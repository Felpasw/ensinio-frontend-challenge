import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import HeroSection from '.';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "HeroSection"', () => {
    const { findByTestId } = render(
      <LangContext>
        <HeroSection />
      </LangContext>
    );
    expect(findByTestId('HeroSection')).toBeTruthy();
  })
);
