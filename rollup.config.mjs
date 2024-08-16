import { defineConfig } from "rollup";
import { globSync } from "glob";
import treser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import { fileURLToPath } from "url";
import path from "path";

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
    format: "esm",
  },
  plugins: [
    treser(),
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    copy({
      targets: [
        {
          src: [
            "package.json",
            ".prettierrc",
            "LICENSE",
            "CHANGELOG.md",
            "README.md",
            "tsconfig.json",
          ],
          dest: "dist",
        },
      ],
    }),
  ],
});
