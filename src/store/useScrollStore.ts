import { create } from 'zustand';

interface ScrollState {
  scrollPositions: Record<string, number>;
  setScrollPosition: (path: string, position: number) => void;
  getScrollPosition: (path: string) => number;
}

export const useScrollStore = create<ScrollState>((set, get) => ({
  scrollPositions: {},
  setScrollPosition: (path, position) =>
    set((state) => ({
      scrollPositions: {
        ...state.scrollPositions,
        [path]: position,
      },
    })),
  getScrollPosition: (path) => get().scrollPositions[path] || 0,
}));
