import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AdmissionArt } from './AdmissionArt';

let observerCallback: IntersectionObserverCallback;

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('AdmissionArt motion lifecycle', () => {
  it('renders automatic motion without a pause control', () => {
    const { container } = render(<AdmissionArt />);
    expect(container.querySelector('.admission-art')).toHaveAttribute('data-motion', 'playing');
    expect(screen.queryByRole('button', { name: /pause|play artwork/i })).not.toBeInTheDocument();
  });

  it('loads and plays the artwork when it enters the viewport', () => {
    const { container } = render(<AdmissionArt />);
    act(() => observerCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    expect(container.querySelector('.admission-art')).toHaveAttribute('data-visible', 'true');
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
