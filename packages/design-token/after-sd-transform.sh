# cp dist/Formula__ColorMap.res ../components-rescript/src/generated/Formula__ColorMap.res
cd "../../" # FIXME: how to use root path utils
echo "\nformatting files...\n"
yarn prettier --write --ignore-unknown --no-error-on-unmatched-pattern "packages/design-token/dist/**/*.{js,ts,tsx,json,json5}"
