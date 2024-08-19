import { defineConfig } from "tsup";
import { globSync } from "glob";

export default defineConfig({
  entry: globSync("./src/**/*.{ts,tsx}", {
    ignore: {
      ignored: p => /\.d.ts$/.test(p.name)
    }
  }),
  outDir: "./dist",
  dts: true,
  format: ["cjs"],
  bundle: false,
  watch: true,
});
