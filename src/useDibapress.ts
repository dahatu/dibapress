import { create } from "zustand";

export type DibapressConfig = {
  baseUrl?: string;
  updateConfig?: (config: DibapressConfig) => void;
};

// eslint-disable-next-line react-hooks/rules-of-hooks

export const useDibapres = create<DibapressConfig>((set) => ({
  baseUrl: "/admin",
  updateConfig: (config) => set({ ...config }),
}));
