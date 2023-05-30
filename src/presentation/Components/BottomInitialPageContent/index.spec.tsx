import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { it, expect } from 'vitest';
import BottomInitialPageContent from '.';

it('Should be able to render the component "BottomInitialPageContent"', () => {
  const { debug } = render(<BottomInitialPageContent />);
  debug();
});
