import { defineConfig } from "rollup";
import { globSync } from "glob";
import treser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-import-css";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  input: Object.fromEntries(
    globSync(["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.png"]).map((file) => [
      path.relative(
        "src",
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  ),
  output: {
    dir: "./dist",
    format: "esm",
    preserveModules: true,
    assetFileNames({ name }) {
      return name?.replace(/^src\//, "") ?? "";
    },
  },
  onwarn: (e) => {
    console.warn("BAHMAN WARN:", e.cause);
  },
  plugins: [
    treser(),
    css(),
    image(),
    typescript(),
    copy({
      targets: [
        {
          src: ["./package.json", "./LICENSE", "./CHANGELOG.md", "README.md"],
          dest: "dist",
        },
      ],
    }),
  ],
});
