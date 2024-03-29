import { readFileSync } from "fs"
import * as path from "path"

import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { externals } from "rollup-plugin-node-externals"
import copy from "rollup-plugin-copy-merge"

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url).pathname)
)

const extensions = [".js", ".jsx", ".ts", ".tsx"]

/** @type {import('rollup').RollupOptions} */
export default {
  plugins: [
    externals({ deps: true, devDeps: true, packagePath: "./package.json" }),
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      envName: "production",
      targets: "last 1 chrome versions",
    }),
    json({
      compact: true,
    }),
    vanillaExtractPlugin(),
    copy({
      hook: "closeBundle",
      targets: [
        { src: "dist/cjs/**/*.css", file: "dist/cjs/formula.css" },
        { src: "dist/esm/**/*.css", file: "dist/esm/formula.css" },
      ],
    }),
    getBabelOutputPlugin({
      plugins: [
        [
          "babel-plugin-transform-remove-imports",
          {
            test: "\\.css$",
          },
        ],
      ],
    }),
  ],
  input: "./src/index.ts",
  output: [
    {
      format: "cjs",
      dir: path.dirname(pkg.main),
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name][assetExtname].js",
      exports: "named",
    },
    {
      format: "esm",
      dir: path.dirname(pkg.module),
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name][assetExtname].js",
    },
  ],
}
