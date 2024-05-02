import { globSync } from "glob";
import path from "path";
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import preserveDirectives from "rollup-plugin-preserve-directives";
import copy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: Object.fromEntries(
    globSync(["src/**/*.ts", "src/**/*.tsx"]).map((file) => {
      const dirname = path.dirname(file).split("src")[1].slice(1);
      const filename = path.basename(file, path.extname(file));
      const entry = path.join(dirname, filename);
      console.log([entry, file]);
      return [entry, file];
    })
  ),
  output: {
    dir: "dist",
    format: "es",
    preserveModules: true,
    compact: true,
    minifyInternalExports: true,
  },
  treeshake: true,
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    preserveDirectives(),
    terser(),
    copy({
      targets: [
        { src: "package.json", dest: "dist", absolute: false },
        { src: "LICENSE", dest: "dist", absolute: false },
        { src: "README.MD", dest: "dist", absolute: false },
        { src: "CHANGELOG.MD", dest: "dist", absolute: false },
      ],
    }),
  ],
});
