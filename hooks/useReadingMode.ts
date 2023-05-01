import { create } from "zustand";

type ReadingState = {
  enabled: boolean;
  setEnabled: (state: boolean) => void;
};

export const useReadingMode = create<ReadingState>()((set) => ({
  enabled: false,
  setEnabled: () => set((state) => ({ enabled: !state.enabled })),
}));
