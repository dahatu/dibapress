import { defineConfig } from "rollup";
import { globSync } from "glob";
import treser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  input: Object.fromEntries( 
    globSync(["./src/**/*.ts", "./src/**/*.tsx"]).map((file) => [
      path.relative(
        "src",
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  ),
  output: {
    dir: "./dist",
    format: "esm"
  },
  onwarn: (e) => {
    console.warn("BAHMAN WARN:", e.cause);
  },
  plugins: [treser(), typescript(), image({ dom: true })],
});
