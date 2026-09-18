import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { computePlan } from './data/plan';
import { saveIntake } from './data/storage';
import { renderWithRouter } from './test/utils';

// Keep every public route covered, including the intentional 404s for removed
// product pages.
const ROUTES: [string, RegExp][] = [
  ['/', /Admission Possible/],
  ['/about', /who we are/i],
  ['/how', /How admissions works/],
  ['/offer', /What we offer/],
  ['/join', /^Join us$/],
  ['/router', /Your 2-minute intake/],
  ['/privacy', /^Privacy$/],
  ['/team/jose', /My story/],
  ['/team/haolin', /Haolin Feng/],
];

describe('every route renders', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  for (const [route, heading] of ROUTES) {
    it(`renders ${route}`, () => {
      renderWithRouter(<App />, { route });
      expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    });
  }

  for (const route of ['/pathways', '/coaching', '/writing-course', '/list-builder']) {
    it(`does not serve removed route ${route}`, () => {
      renderWithRouter(<App />, { route });
      expect(screen.getByText("This page didn't make the cut.")).toBeInTheDocument();
    });
  }

  // These two need an intake or they render the missing-plan interstitial.
  for (const route of ['/plan', '/dashboard']) {
    it(`renders ${route} with a stored plan`, () => {
      saveIntake({ answers: {}, plan: computePlan({}) });
      renderWithRouter(<App />, { route });
      expect(screen.queryByRole('heading', { name: /couldn't find your plan/i })).not.toBeInTheDocument();
    });
  }

  it('renders the 404 for an unknown route', () => {
    renderWithRouter(<App />, { route: '/nope' });
    expect(screen.getByText("This page didn't make the cut.")).toBeInTheDocument();
  });

  // TeamMember's only branch: an unknown slug redirects home.
  it('redirects an unknown team slug to the home page', () => {
    renderWithRouter(<App />, { route: '/team/not-a-person' });
    expect(screen.getByRole('heading', { level: 1, name: /Admission Possible/ })).toBeInTheDocument();
  });
});
