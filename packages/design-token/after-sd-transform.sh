cp dist/Formula__ColorMap.res ../components-rescript/src/generated/Formula__ColorMap.res
cd "../../" # FIXME: how to use root path utils
yarn prettier --write --ignore-unknown packages/design-token/dist/**/*.{js,ts,jsx,tsx,json,json5}
