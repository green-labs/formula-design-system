# @greenlabs/formula-components

## 0.0.5-next.20

### Patch Changes

- 06e896c: feat: Text to use neu-primary-contents by default / add TextField props

  - stop using colorMap
  - add pattern, minLength, maxLength to TextField

## 0.0.5-next.19

### Patch Changes

- b5d6ca0: fix: forwarded ref not gets sent to children in TextTab

## 0.0.5-next.18

### Patch Changes

- 61aad5d: fix: correct styling for disabling default webkit searchfield button

## 0.0.5-next.17

### Patch Changes

- 62f4087: textfield bugfix

  - prevent right border clipping on a certain variant
  - polyvary name typo
  - https://github.com/green-labs/farmmy-web/pull/159

- 3bb00fa: feat: textfield - support 'search' type

## 0.0.5-next.16

### Patch Changes

- fe51274: fix: xs/sm 사이즈 버튼 스타일 토큰 참조값 수정

## 0.0.5-next.15

### Patch Changes

- 9914a6b: fix: manually trigger native event on clear

## 0.0.5-next.14

### Patch Changes

- a5bcbff: fix: support radix-ui/tabs defaultValue and etcs

  - fixes #103

## 0.0.5-next.13

### Patch Changes

- 19c2c93: feat: TextField > inputContainer->renderInput, add onBlur (74afef435a08ee6b5f6c061edd44b46db0d7e516)

## 0.0.5-next.12

### Patch Changes

- 97234f6: fix: icon component color bug

## 0.0.5-next.11

### Patch Changes

- d46dd0a: fix: wrong css filename

## 0.0.5-next.10

### Patch Changes

- d2a5bb7: fix: prevent random cat output

## 0.0.5-next.9

### Patch Changes

- 9838320: fix: fix TextTab binding to emit correct export

## 0.0.5-next.8

### Patch Changes

- 1a0ee18: - feat: add TextField options (showHintOnFocusOnly, hideClearButton)
  - feat: TextField options ReScript bindings

## 0.0.5-next.7

### Patch Changes

- c2d95bd: TextField: use alt ref prop name approach (`inputRef`)
- b88bf7e: enhance textfield

  - add container/tag
  - fix css to have textarea as input element
  - improve accessibility using <label />
  - make textfield forwardRef'd

## 0.0.5-next.6

### Patch Changes

- e38133e: feat: update focused outline textfield type border

  - use css vars instead of colorMap value

- Updated dependencies [34a4950]
  - @greenlabs/formula-design-token@0.0.5-next.6

## 0.0.5-next.5

### Patch Changes

- 9f510fb: - remove css import from js files
  - Add exports field
  - concat all css into formula.css
  - output folder is ./dist
- Updated dependencies [9f510fb]
  - @greenlabs/formula-design-token@0.0.5-next.5

## 0.0.5-next.3

### Patch Changes

- 0952a53: - add root css custom props (theme)
  - stop generating colormap binding
  - fix `classname` typo from icon binding
  - add formula common module (included by default)
- Updated dependencies [0952a53]
  - @greenlabs/formula-design-token@0.0.5-next.3

## 0.0.5-next.1

### Patch Changes

- c46a528: fix design bugs from textfield QA (GDS-161 GDS-162 GDS-168)
- Updated dependencies [c46a528]
  - @greenlabs/formula-design-token@0.0.5-next.1

## 0.0.5-next.0

### Patch Changes

- f6ac357: fix package: add missing files from formula-design-token
- Updated dependencies [f6ac357]
  - @greenlabs/formula-design-token@0.0.5-next.0

## 0.0.4

### Patch Changes

- 3dc11e4: fix build issue on consumer
- Updated dependencies [3dc11e4]
  - @greenlabs/formula-design-token@0.0.4

## 0.0.3

### Patch Changes

- 55dc501: bump packages
- Updated dependencies [55dc501]
  - @greenlabs/formula-design-token@0.0.3
