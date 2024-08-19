import { defineConfig } from "tsup";
import { globSync } from "glob";
import fse from "fs-extra";

export default defineConfig({
  entry: globSync("./src/**/*.{ts,tsx}", {
    ignore: {
      ignored: (p) => /\.d.ts$/.test(p.name),
    },
  }),
  outDir: "./dist",
  plugins: [],
  onSuccess: async () => {
    fse.copySync("./src/assets", "./dist/assets", {
      overwrite: true,
      recursive: true,
    });
  },
  dts: true,
  format: ["cjs"],
  bundle: false,
  watch: true,
});
