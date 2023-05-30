import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, expect } from 'vitest';
import LanguageMenu from '.';

it('Should be able to render the component "LanguageMenu"', () => {
  const { debug } = render(<LanguageMenu />);
  debug();
});
