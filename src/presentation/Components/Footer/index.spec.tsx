import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import Footer from '.';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "Footer"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <Footer />
      </LangContext>
    );
    expect(findByTestId('Footer')).toBeTruthy();
  })
);

await waitFor(() =>
  it('Should be able to see left footer text content', async () => {
    const { findByTestId } = render(
      <LangContext>
        <Footer />
      </LangContext>
    );

    const leftFooterText = await findByTestId('leftfootertext');
    expect(leftFooterText).toBeTruthy();
  })
);

await waitFor(() =>
  it('Should be able to see right footer content', async () => {
    const { findByTestId } = render(
      <LangContext>
        <Footer />
      </LangContext>
    );
    const rightFooterText = await findByTestId('rightfootertext');

    expect(rightFooterText).toBeTruthy();
  })
);
