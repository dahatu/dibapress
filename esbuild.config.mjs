import * as esbuild from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { sassPlugin } from "esbuild-sass-plugin";
import { globSync } from "glob";

const ctx = await esbuild.context({
  entryPoints: globSync([
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.css",
    "./src/**/*.scss",
  ]).map((file) => file),
  outdir: "dist",
  allowOverwrite: true,
  bundle: true,
  minify: true,
  platform: "neutral",
  tsconfig: "./tsconfig.json",
  loader: { ".png": "file" },
  plugins: [
    sassPlugin(),
    copy({
      assets: {
        from: ["./src/assets/**/*.png"],
        to: ["./assets"],
      },
    }),
    copy({
      assets: {
        from: ["./package.json"],
        to: ["./package.json"],
      },
    }),
    copy({
      assets: {
        from: ["./README.md"],
        to: ["./README.md"],
      },
    }),
    copy({
      assets: {
        from: ["./CHANGELOG.md"],
        to: ["./CHANGELOG.md"],
      },
    }),
  ],
});

await ctx.watch({});
