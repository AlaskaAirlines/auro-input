# Semantic Release Automated Changelog

## [2.3.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.3.0...v2.3.1) (2022-03-18)


### Bug Fixes

* **credit card:** address typo with regex assignment ([7de0a22](https://github.com/AlaskaAirlines/auro-input/commit/7de0a2269e12430587b5b5c6edb3973aaff447d3))

# [2.3.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.2.0...v2.3.0) (2022-03-18)


### Features

* **credit card:** add support for corp commercial cards [#112](https://github.com/AlaskaAirlines/auro-input/issues/112) ([fa807a8](https://github.com/AlaskaAirlines/auro-input/commit/fa807a87eb92d3834587b1d663186e33c7d9d10f))
* **date format:** add support for MM/YYYY [#115](https://github.com/AlaskaAirlines/auro-input/issues/115) ([bf230d3](https://github.com/AlaskaAirlines/auro-input/commit/bf230d3fc6a72a288af5846936ef0af49c60dd95))
* **i18n:** add feature to manage localized content [#103](https://github.com/AlaskaAirlines/auro-input/issues/103) ([ea44a1e](https://github.com/AlaskaAirlines/auro-input/commit/ea44a1e57ff759628ae8d2d7da19147f0c43211a))
* **number:** add support for number input types [#47](https://github.com/AlaskaAirlines/auro-input/issues/47) ([8e70215](https://github.com/AlaskaAirlines/auro-input/commit/8e70215d901b07e4491bc9d44f771afa41d89069))
* **pattern:** expose additional attributes to public api [#122](https://github.com/AlaskaAirlines/auro-input/issues/122) ([dbb9ea6](https://github.com/AlaskaAirlines/auro-input/commit/dbb9ea649e2e152d8d9209d5dadb1fb730e69efb))
* **spellcheck:** remove spellcheck for password type [#57](https://github.com/AlaskaAirlines/auro-input/issues/57) ([f8c46f1](https://github.com/AlaskaAirlines/auro-input/commit/f8c46f1cdc18435392f266e2d2270457b023cd75))

# [2.2.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.1.3...v2.2.0) (2022-02-10)


### Features

* **borderless:** add new borderless UI ([6769b47](https://github.com/AlaskaAirlines/auro-input/commit/6769b47e5a4b803613a90a60ad29b85644bd73f2))

## [2.1.3](https://github.com/AlaskaAirlines/auro-input/compare/v2.1.2...v2.1.3) (2022-02-03)


### Performance Improvements

* **vrt:** increase delay, capture and compare values ([6bed3e8](https://github.com/AlaskaAirlines/auro-input/commit/6bed3e84ab1688b0480ecfccb0accbdcfb51728b))
* **vrt:** remove unused engine scripts ([8f5c08a](https://github.com/AlaskaAirlines/auro-input/commit/8f5c08a466eea44b3c4968c14c7f182319afe72e))

## [2.1.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.1.1...v2.1.2) (2021-12-23)


### Bug Fixes

* respect novalidate after error set [#107](https://github.com/AlaskaAirlines/auro-input/issues/107) ([141825a](https://github.com/AlaskaAirlines/auro-input/commit/141825a377cca9382398681002dfa80a96724c1a))

## [2.1.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.1.0...v2.1.1) (2021-12-07)


### Bug Fixes

* **css:** add white background to bordered type [#99](https://github.com/AlaskaAirlines/auro-input/issues/99) ([b75b428](https://github.com/AlaskaAirlines/auro-input/commit/b75b4283042e03136da6bcef0cc783752cc8aa58))

# [2.1.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.0.0...v2.1.0) (2021-12-03)


### Features

* **date format:** add auto date formatting feature [#72](https://github.com/AlaskaAirlines/auro-input/issues/72) ([f191c47](https://github.com/AlaskaAirlines/auro-input/commit/f191c47e554515bba0ec7bf2580d9fee2802eab4))

# [2.0.0](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.6...v2.0.0) (2021-11-03)


### Bug Fixes

* **label:** correct color and size ([9d6afe2](https://github.com/AlaskaAirlines/auro-input/commit/9d6afe23e64e003f6b9548fadebf60ec11534ff8))
* **pattern:** improve non-numeric restriction for CC numbers ([e1ea476](https://github.com/AlaskaAirlines/auro-input/commit/e1ea476761d4a72e29fde5dfbd308fc767b58126))
* **props:** add property defaults ([ce672b4](https://github.com/AlaskaAirlines/auro-input/commit/ce672b4e951d5f1fbd212265e590098c0b831828))
* **template:** refactor icon to simple template ([468cc99](https://github.com/AlaskaAirlines/auro-input/commit/468cc991afeda3933ad71fb10e41d29fca23b325))
* update demo index per marked new API ([bb8c3c9](https://github.com/AlaskaAirlines/auro-input/commit/bb8c3c955c921b418ba1cc59d33b900c33d6530b))


### Code Refactoring

* **generator migration:** migrate to latest gen build [#65](https://github.com/AlaskaAirlines/auro-input/issues/65) ([76f9dc6](https://github.com/AlaskaAirlines/auro-input/commit/76f9dc6e0ab0e56b0c03eca72d5d84e16ada57f3))


### Features

* **bordered:** add new bordered UI feature [#53](https://github.com/AlaskaAirlines/auro-input/issues/53) ([d2088a8](https://github.com/AlaskaAirlines/auro-input/commit/d2088a87cad96cb82f08e0c85d597f6de23ad845))
* **text:** add support for slots and pre-defined copy [#59](https://github.com/AlaskaAirlines/auro-input/issues/59)/[#69](https://github.com/AlaskaAirlines/auro-input/issues/69) ([637aad4](https://github.com/AlaskaAirlines/auro-input/commit/637aad44b190a8bde6617afb802be1dc3994395c))


### BREAKING CHANGES

* **generator migration:** This commit updates to the latest WC-Generator build,
this also includes API and npm namespace changes.

## [1.3.6](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.5...v1.3.6) (2021-08-10)


### Bug Fixes

* **deprecation:** update install to alert users of deprecated namespace ([832196e](https://github.com/AlaskaAirlines/auro-input/commit/832196e82880e55989861bdd9126770acac7d71d))

## [1.3.5](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.4...v1.3.5) (2021-06-25)


### Bug Fixes

* catch exception [#41](https://github.com/AlaskaAirlines/auro-input/issues/41) ([347069f](https://github.com/AlaskaAirlines/auro-input/commit/347069f06741bbf8800820a8b718eacf885c5cbd))

## [1.3.4](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.3...v1.3.4) (2021-06-10)


### Bug Fixes

* **style:** update references to new packages ([a2aa5a7](https://github.com/AlaskaAirlines/auro-input/commit/a2aa5a7d4704142f569764d9f054aab3c5ce5ccd))

## [1.3.3](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.2...v1.3.3) (2021-05-24)


### Bug Fixes

* show password toggle when property set ([#30](https://github.com/AlaskaAirlines/auro-input/issues/30)) ([e1adb29](https://github.com/AlaskaAirlines/auro-input/commit/e1adb294adee157bcdbc85ea39f4c04e7728f73d))

## [1.3.2](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.1...v1.3.2) (2021-05-12)


### Bug Fixes

* restrict use of cursor jump function ([bf42812](https://github.com/AlaskaAirlines/auro-input/commit/bf42812b5964e5f0aff0ec95e83e2b936511801e))

## [1.3.1](https://github.com/AlaskaAirlines/auro-input/compare/v1.3.0...v1.3.1) (2021-05-10)


### Bug Fixes

* add deprecation warning ([0360a87](https://github.com/AlaskaAirlines/auro-input/commit/0360a87567a7bfb7a32d0c6fb7a473985cbea1b2))

# [1.3.0](https://github.com/AlaskaAirlines/auro-input/compare/v1.2.0...v1.3.0) (2021-05-05)


### Features

* add cleavejs formatting ([fcbc044](https://github.com/AlaskaAirlines/auro-input/commit/fcbc04476faaf979a7ca9763dfb195298723b807))

# [1.2.0](https://github.com/AlaskaAirlines/auro-input/compare/v1.1.2...v1.2.0) (2021-02-13)


### Features

* set aria-describedby to error message ([da5ae0d](https://github.com/AlaskaAirlines/auro-input/commit/da5ae0d16fa3a617ff4a49d4693ee7e7ff4df1e5))
* set aria-invalid attribute ([24354c6](https://github.com/AlaskaAirlines/auro-input/commit/24354c6f072fb4b6e97f782da752699b2ee22ab0))

## [1.1.2](https://github.com/AlaskaAirlines/auro-input/compare/v1.1.1...v1.1.2) (2021-01-07)


### Bug Fixes

* rename field to prevent IE runtime error ([24929b4](https://github.com/AlaskaAirlines/auro-input/commit/24929b455f5e63c84dd2fa300939bc83b598a103))

## [1.1.1](https://github.com/AlaskaAirlines/auro-input/compare/v1.1.0...v1.1.1) (2020-11-19)


### Bug Fixes

* [#6](https://github.com/AlaskaAirlines/auro-input/issues/6) cursor placement ([2d4206e](https://github.com/AlaskaAirlines/auro-input/commit/2d4206e49689712c9ca372eb51f3dfc64c503ff9))

# [1.1.0](https://github.com/AlaskaAirlines/auro-input/compare/v1.0.1...v1.1.0) (2020-10-27)


### Features

* add custom event for clearing input value ([f6f6ce8](https://github.com/AlaskaAirlines/auro-input/commit/f6f6ce804f8c666f7876affccdac627f25afe29e))

## [1.0.1](https://github.com/AlaskaAirlines/auro-input/compare/v1.0.0...v1.0.1) (2020-10-22)


### Bug Fixes

* add build process in release pipeline ([7ce06c0](https://github.com/AlaskaAirlines/auro-input/commit/7ce06c0c9864b0407f370474601fb1d1e7680cf4))

# 1.0.0 (2020-10-22)


### Bug Fixes

* update travis config ([236ae20](https://github.com/AlaskaAirlines/auro-input/commit/236ae20ef0d842df5c71286534e1119f38cf4b6c))


### Features

* add Github worlflow ([72ab3b1](https://github.com/AlaskaAirlines/auro-input/commit/72ab3b17839f96893bccee17e5565ea26b0a3c65))
* add noValidate feature ([152c1fd](https://github.com/AlaskaAirlines/auro-input/commit/152c1fdeca6127e027b9d0819a59c3795bb6d2bb))
* add toggle password ([a1ba145](https://github.com/AlaskaAirlines/auro-input/commit/a1ba14574d19c57453cc390c4337f697fca920e4))
* upgrade from ods to auro ([4823636](https://github.com/AlaskaAirlines/auro-input/commit/4823636b294e44944dafd6ccd1b4f1e206f84147))


### BREAKING CHANGES

* This is a re-write of much of auro-inputText
