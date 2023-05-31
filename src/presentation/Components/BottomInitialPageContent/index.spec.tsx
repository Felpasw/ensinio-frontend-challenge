import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import BottomInitialPageContent from '.';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "BottomInitialPageContent"', () => {
    const { findByTestId } = render(
      <LangContext>
        <BottomInitialPageContent />
      </LangContext>
    );
    expect(findByTestId('BottomInitialPageContent')).toBeTruthy();
  })
);

await waitFor(() =>
  it('Should be able to render the component "Footer"', () => {
    const { findByTestId } = render(
      <LangContext>
        <BottomInitialPageContent />
      </LangContext>
    );
    expect(findByTestId('BottomInitialPageContent')).toBeTruthy();
  })
);
