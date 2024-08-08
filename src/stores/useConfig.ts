import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeVariant = 'system' | 'light' | 'dark'

type ConfigStoreProps = {
  baseUrl: string;
  updateBaseUrl: (baseUrl: string) => void;
  theme: ThemeVariant,
  updateTheme: (theme: ThemeVariant) => void,
  accentColor: string,
  updateAccentColor: (color: string) => void
};

export const useConfig = create<ConfigStoreProps>()(
  persist((set) => ({
    baseUrl: "/admin",
    updateBaseUrl: (baseUrl: string) => set({ baseUrl }),
    accentColor: '#09f',
    updateAccentColor: (color: string) => {
      set({ accentColor: color })
    },
    theme: 'dark',
    updateTheme: (theme) => {
      console.log("bahman")
    }
  }), {
    name: "dibapress-config",
    storage: createJSONStorage(() => localStorage)
  })
);
