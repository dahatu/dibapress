import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeVariant = 'auto' | 'light' | 'dark'

type Field = {
  name: string,
  title: {
    singular: string,
    plural: string
  }
  subtitle: string
  type: 'string'
}

type Scheme = {
  name: string,
  fields: Field[]
}

type ConfigStoreProps = {
  baseUrl: string;
  updateBaseUrl: (baseUrl: string) => void;
  defaultRoute: string,
  theme: ThemeVariant,
  updateTheme: (theme: ThemeVariant) => void,
  accentColor: string,
  updateAccentColor: (color: string) => void,
  scheme: Scheme
};

export const useConfig = create<ConfigStoreProps>()(
  persist((set) => ({
    baseUrl: "admin",
    updateBaseUrl: (baseUrl: string) => set({ baseUrl }),
    defaultRoute: 'dashboard',
    accentColor: '#09f',
    updateAccentColor: (color: string) => {
      set({ accentColor: color })
    },
    theme: 'auto',
    updateTheme: (theme) => {
      set({ theme: theme })
    },
    scheme: null
  }), {
    name: "dibapress-config",
    storage: createJSONStorage(() => localStorage)
  })
);
