import { defineConfig } from "rollup";

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import run from "@rollup/plugin-run";

export default defineConfig({
  // input: "src/babel.js",
  input: "src/test.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [commonjs(), typescript(), run()],
});
