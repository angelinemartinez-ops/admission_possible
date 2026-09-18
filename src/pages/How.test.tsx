import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../test/utils';

describe('How admissions works page', () => {
  it('titles the page after the admissions process, not the product', () => {
    renderWithRouter(<App />, { route: '/how' });
    expect(screen.getByRole('heading', { level: 1, name: /how admissions works/i })).toBeInTheDocument();
  });

  it('orders the steps route → build your list → learn & write → apply → submit', () => {
    renderWithRouter(<App />, { route: '/how' });
    const titles = Array.from(document.querySelectorAll('.how__step-title')).map((el) => el.textContent);
    expect(titles).toEqual(['Route', 'Build your list', 'Learn & write', 'Apply', 'Submit']);
  });

  it('keeps the process concise and avoids unapproved detail blocks', () => {
    renderWithRouter(<App />, { route: '/how' });
    expect(screen.queryByText(/Step by step/i)).not.toBeInTheDocument();
    expect(screen.getByText(/deadlines, drafts, and next steps/i)).toBeInTheDocument();
  });
});
