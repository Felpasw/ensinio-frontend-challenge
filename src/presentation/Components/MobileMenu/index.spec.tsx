import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, expect } from 'vitest';
import MobileMenu from '.';

it('Should be able to render the component "MobileMenu"', () => {
  const { debug } = render(<MobileMenu />);
  debug();
});
