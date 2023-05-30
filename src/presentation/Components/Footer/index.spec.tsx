import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, expect } from 'vitest';
import Footer from '.';

it('Should be able to render the component "Footer"', () => {
  const { debug } = render(<Footer />);
  debug();
});
