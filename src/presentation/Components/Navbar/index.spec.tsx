import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import Navbar from '.';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "Navbar"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <Navbar />
      </LangContext>
    );
    expect(findByTestId('Navbar')).toBeTruthy();
  })
);
