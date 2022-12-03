import { render, screen } from '@testing-library/react';
import App from './App';
import { useMediaQuery } from "usehooks-ts";

jest.mock('usehooks-ts');

test('renders learn react link', () => {
  render(<App />);
});


