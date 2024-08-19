import { defineConfig } from "tsup";
import { globSync } from "glob";

export default defineConfig({
  entry: globSync("./src/**/*.{ts,tsx}"),
  outDir: './dist',
  dts: true,
  format: ["cjs"],
  bundle: false,
  watch: true,
});
