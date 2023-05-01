import { create } from "zustand";

type NavigationState = {
  closed: boolean;
  setClosed: (state: boolean) => void;
};

export const useNavState = create<NavigationState>()((set) => ({
  closed: false,
  setClosed: () => set((state) => ({ closed: !state.closed })),
}));
