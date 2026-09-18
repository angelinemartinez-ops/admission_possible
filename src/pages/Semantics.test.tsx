import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../test/utils';

// #42: markup-semantics sweep (WCAG 1.3.1, 2.4.6).
describe('heading hierarchy', () => {
  // Offer started at h3; Router had only the h2 question.
  for (const route of ['/', '/about', '/how', '/offer', '/join', '/router', '/privacy']) {
    it(`gives ${route} exactly one h1`, () => {
      renderWithRouter(<App />, { route });
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    });
  }
});

describe('landmarks', () => {
  it('exposes the crumb band as a labelled nav', () => {
    renderWithRouter(<App />, { route: '/how' });
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
  });

  it('exposes the footer link column as a labelled nav', () => {
    renderWithRouter(<App />, { route: '/' });
    expect(screen.getByRole('navigation', { name: 'Footer' })).toBeInTheDocument();
  });

  it('marks the current crumb', () => {
    renderWithRouter(<App />, { route: '/how' });
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(within(nav).getByText('How admissions works')).toHaveAttribute('aria-current', 'page');
  });
});
