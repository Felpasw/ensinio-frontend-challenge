import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { it, expect } from 'vitest';
import MobileMenu from '.';
import userEvent from '@testing-library/user-event';
import LangContext from '../../../context/Lang';

await waitFor(() =>
  it('Should be able to render the component "MobileMenu"', () => {
    const { findByTestId } = render(
      <LangContext>
        <MobileMenu />
      </LangContext>
    );
    expect(findByTestId('MobileMenu')).toBeTruthy();
  })
);

await waitFor(() =>
  it('Should ba able to render the component "Nav" when click the menu button', async () => {
    const { findByTestId } = render(
      <LangContext>
        <MobileMenu />
      </LangContext>
    );
    const Button = await findByTestId('MenuButton');
    userEvent.click(Button);
    const element = await findByTestId('menuHidden');
    expect(element).toBeTruthy();
  })
);

await waitFor(() =>
  it('Should ba able see the dropdown menu in the mobile menu when click the button', async () => {
    const { findByTestId, findAllByTestId } = render(
      <LangContext>
        <MobileMenu />
      </LangContext>
    );
    const Button = await findByTestId('MenuButton');
    userEvent.click(Button);
    const solutionsDropdown = await findByTestId('solutionsDropdown');
    userEvent.click(solutionsDropdown);
    const solutionsDiv = await findAllByTestId('solutionsDiv');
    expect(solutionsDiv).toBeTruthy();
  })
);
