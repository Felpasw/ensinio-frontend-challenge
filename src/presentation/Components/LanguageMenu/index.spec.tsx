import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import LanguageMenu from '.';
import userEvent from '@testing-library/user-event';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "LanguageMenu"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <LanguageMenu />
      </LangContext>
    );
    expect(findByTestId('LanguageMenu')).toBeTruthy();
  })
);

await waitFor(() =>
  it('should ba able to change language to "PT"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <LanguageMenu />
      </LangContext>
    );
    const element = await findByTestId('LanguagePT');
    userEvent.click(element);
    const checkedElement = await findByTestId('checked-pt');
    expect(checkedElement).toBeTruthy();
  })
);

await waitFor(() =>
  it('should ba able to change language to "EN"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <LanguageMenu />
      </LangContext>
    );
    const element = await findByTestId('LanguageEN');
    userEvent.click(element);
    const checkedElement = await findByTestId('checked-en');
    expect(checkedElement).toBeTruthy();
  })
);

await waitFor(() =>
  it('should ba able to change language to "ES"', async () => {
    const { findByTestId } = render(
      <LangContext>
        <LanguageMenu />
      </LangContext>
    );
    const element = await findByTestId('LanguageES');
    userEvent.click(element);
    const checkedElement = await findByTestId('checked-es');
    expect(checkedElement).toBeTruthy();
  })
);
