import { create } from "zustand";

interface NavigationState {
  closed: boolean;
  setClosed: (state: boolean) => void;
}

export const useNavState = create<NavigationState>()((set) => ({
  closed: false,
  setClosed: () => set((state) => ({ closed: !state.closed })),
}));
