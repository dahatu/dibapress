import { create } from "zustand";

type ConfigStoreProps = {
  baseUrl: string;
  updateBaseUrl: (baseUrl: string) => void;
};

export const useConfig = create<ConfigStoreProps>()((set) => {
  return {
    baseUrl: "/admin",
    updateBaseUrl: (baseUrl: string) => set({ baseUrl }),
  };
});
