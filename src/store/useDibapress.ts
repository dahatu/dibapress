import { create } from "zustand";

export type DibapressConfig = {
  baseUrl?: string;
};

export const useDibapres = create<DibapressConfig>((set) => ({
  baseUrl: "/admin",
}));
