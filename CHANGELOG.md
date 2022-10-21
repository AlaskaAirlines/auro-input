# Semantic Release Automated Changelog

## [2.10.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.0...v2.10.1) (2022-10-21)


### Bug Fixes

* **value:** make undefined value attribute reset element [#191](https://github.com/AlaskaAirlines/auro-input/issues/191) ([7f7b355](https://github.com/AlaskaAirlines/auro-input/commit/7f7b355bbb178c2ea60b5bac439fec6cccabda9a))

# [2.10.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.5...v2.10.0) (2022-10-11)


### Bug Fixes

* **ellipse:** make input label ellipse when too long [#186](https://github.com/AlaskaAirlines/auro-input/issues/186) ([4032274](https://github.com/AlaskaAirlines/auro-input/commit/40322748883d2ab14f0d973322342c0ce5680722))
* **ellipse:** make input text ellipse when too long [#187](https://github.com/AlaskaAirlines/auro-input/issues/187) ([8b2185b](https://github.com/AlaskaAirlines/auro-input/commit/8b2185b61dbb128099938c825e72167a9901d521))


### Features

* **hover:** show clear icon on hover, plus CSS clean up ([f344e38](https://github.com/AlaskaAirlines/auro-input/commit/f344e3881afc85c425459208151a2c77a35b18fb))

## [2.9.5](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.4...v2.9.5) (2022-10-07)


### Bug Fixes

* **hover:** improve hover event handling [#198](https://github.com/AlaskaAirlines/auro-input/issues/198) ([20fabc0](https://github.com/AlaskaAirlines/auro-input/commit/20fabc0ac58625b6ebfe4e72cafb5947ad6553db))

## [2.9.4](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.3...v2.9.4) (2022-10-07)


### Bug Fixes

* **height:** make height consistent with other form elements [#184](https://github.com/AlaskaAirlines/auro-input/issues/184) ([1ce15a1](https://github.com/AlaskaAirlines/auro-input/commit/1ce15a1d9c3b8b240f218a75f0a997f29ba3b9b5))

## [2.9.3](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.2...v2.9.3) (2022-10-06)


### Bug Fixes

* **focus:** calculate focus correctly in shadow DOM [#196](https://github.com/AlaskaAirlines/auro-input/issues/196) ([3872a76](https://github.com/AlaskaAirlines/auro-input/commit/3872a76acd802f1b3e3f4b7c202b4034269fe13c))

## [2.9.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.1...v2.9.2) (2022-09-26)


### Bug Fixes

* **error:** reset error message in event [#189](https://github.com/AlaskaAirlines/auro-input/issues/189) ([7d13edd](https://github.com/AlaskaAirlines/auro-input/commit/7d13eddcb209daea0696c619bbd3104914dedf43))

## [2.9.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.9.0...v2.9.1) (2022-09-21)


### Bug Fixes

* **cursor:** correct cursor placement for single digit date input [#181](https://github.com/AlaskaAirlines/auro-input/issues/181) ([639cd35](https://github.com/AlaskaAirlines/auro-input/commit/639cd356815e65ce5067cd0c5ff69a356a05757a))
* **cursor:** keep cursor in place during keyboard input [#181](https://github.com/AlaskaAirlines/auro-input/issues/181) ([5c01949](https://github.com/AlaskaAirlines/auro-input/commit/5c0194949f1d0ddbd343e34294905bbe93e343d9))
* **formatting:** better handling of cursor position when autoformating ([e45a907](https://github.com/AlaskaAirlines/auro-input/commit/e45a907e0cef580cf46a980b96c6f18b180203d4))

# [2.9.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.8.2...v2.9.0) (2022-09-20)


### Bug Fixes

* **error:** dont validate to remove persistent error attribute validation ([75d0e15](https://github.com/AlaskaAirlines/auro-input/commit/75d0e1584d8d976da82df15318a4fc41aaf71a35))
* **errorMessage:** persist error message until validation ([0859ecf](https://github.com/AlaskaAirlines/auro-input/commit/0859ecf0c7b75b9d502585f1b194ad889f8c7f33))
* **error:** reset setCustomValidity and hide icon when removing error ([018d55b](https://github.com/AlaskaAirlines/auro-input/commit/018d55ba8407e40c17e1ef7a108be282e04ea6b0))
* **helpText:** show helpText when validity === null ([2ab89a0](https://github.com/AlaskaAirlines/auro-input/commit/2ab89a027ad958b5c0b320bf58b23388b13dca89))
* **tooShort:** only validate too short if a value exists ([696639a](https://github.com/AlaskaAirlines/auro-input/commit/696639a4654783989792dff0cb8e6817f183cdad))


### Features

* **isValid:** persist isInvalid attribute ([255ce2c](https://github.com/AlaskaAirlines/auro-input/commit/255ce2ca9194b579f3b4f7ceece1cec9156c8d71))
* **valdity:** notify validity changed via event ([895b65c](https://github.com/AlaskaAirlines/auro-input/commit/895b65c326fe3b15b205f26194610f506e43da2a))
* **validation:** use html5 validation spec instead of error attribute [#170](https://github.com/AlaskaAirlines/auro-input/issues/170) ([6ec40c3](https://github.com/AlaskaAirlines/auro-input/commit/6ec40c3f3aaf1b04e101f26da078b1546357b757))
* **validity:** custom date error messages ([ab1d768](https://github.com/AlaskaAirlines/auro-input/commit/ab1d7689e2d0bacddfe330276306ddfa79ff8392))

## [2.8.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.8.1...v2.8.2) (2022-09-01)


### Bug Fixes

* **event:** fire input event when programmatically changing value [#177](https://github.com/AlaskaAirlines/auro-input/issues/177) ([f8adc97](https://github.com/AlaskaAirlines/auro-input/commit/f8adc979ec53ecfc12a0d8dddae2dbf89582d133))

## [2.8.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.8.0...v2.8.1) (2022-08-30)


### Bug Fixes

* **deps:** update vulnerabilities and peer dependencies ([062c62f](https://github.com/AlaskaAirlines/auro-input/commit/062c62fd5059461d861a88ed0e433a962f9a783a))
* upgrade @alaskaairux/icons from 4.14.0 to 4.15.0 ([20be9d7](https://github.com/AlaskaAirlines/auro-input/commit/20be9d7555ad7b450ace63dcb8b122119d7382d8))

# [2.8.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.7.2...v2.8.0) (2022-08-19)


### Features

* **activeLabel:** new attribute forces label fixed to active position [#173](https://github.com/AlaskaAirlines/auro-input/issues/173) ([be6903e](https://github.com/AlaskaAirlines/auro-input/commit/be6903e4ca2b1f5da899b73b2aa9faa5cf62b9aa))

## [2.7.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.7.1...v2.7.2) (2022-07-06)


### Bug Fixes

* **imports:** remove focus-visible import and dependency [#166](https://github.com/AlaskaAirlines/auro-input/issues/166) ([e9197b1](https://github.com/AlaskaAirlines/auro-input/commit/e9197b12fcaf18b9dd871e3e9d34ccdd1fa342f4))

## [2.7.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.7.0...v2.7.1) (2022-06-01)


### Bug Fixes

* remove white text color [#153](https://github.com/AlaskaAirlines/auro-input/issues/153) ([297fe50](https://github.com/AlaskaAirlines/auro-input/commit/297fe5055050874dfee8df810dd6812351853748))

# [2.7.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.6.0...v2.7.0) (2022-05-24)


### Features

* **readiness:** add readiness check and event notification [#147](https://github.com/AlaskaAirlines/auro-input/issues/147) ([a470881](https://github.com/AlaskaAirlines/auro-input/commit/a47088145396bdbc0fa4be8dce50a1d0c3cc02b4))

# [2.6.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.5.1...v2.6.0) (2022-05-05)


### Features

* **events:** new events for isValid and helpText changes [#144](https://github.com/AlaskaAirlines/auro-input/issues/144) ([ee01264](https://github.com/AlaskaAirlines/auro-input/commit/ee012641aff364f1ed1c1667358d8d6899e5c96e))

## [2.5.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.5.0...v2.5.1) (2022-04-26)


### Bug Fixes

* **label:** remove sticky label class when input is empty [#142](https://github.com/AlaskaAirlines/auro-input/issues/142) ([f8558de](https://github.com/AlaskaAirlines/auro-input/commit/f8558de558ff9e829fdb4defc9e708e0a6ac5f96))

# [2.5.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.4.0...v2.5.0) (2022-04-20)


### Bug Fixes

* **error:** expose api prop for setting custom message [#134](https://github.com/AlaskaAirlines/auro-input/issues/134) ([dfda3cb](https://github.com/AlaskaAirlines/auro-input/commit/dfda3cb7516dcf56951b7f8d5dd4d606eea884c8))
* **placeholder:** expand to support all inputs [#136](https://github.com/AlaskaAirlines/auro-input/issues/136) ([5656e0f](https://github.com/AlaskaAirlines/auro-input/commit/5656e0f51a81eb674fda7cd7e6dd2243123343f6))
* reflect `type` to attribute [#139](https://github.com/AlaskaAirlines/auro-input/issues/139) ([d7b5de1](https://github.com/AlaskaAirlines/auro-input/commit/d7b5de1e8e280eedf1304b40bceb607dbfd61b58))


### Features

* **validation:** enable real-time validation with key event [#132](https://github.com/AlaskaAirlines/auro-input/issues/132) ([0877cff](https://github.com/AlaskaAirlines/auro-input/commit/0877cff06d5e4a8513efc2a3e0587daf000dbe5d))

# [2.4.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.3.2...v2.4.0) (2022-03-31)


### Features

* **styling:** support CSS Parts customization [#129](https://github.com/AlaskaAirlines/auro-input/issues/129) ([ca2d02f](https://github.com/AlaskaAirlines/auro-input/commit/ca2d02ff2684a181c5ab2c718cdfc5b8656e2347))

## [2.3.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.3.1...v2.3.2) (2022-03-24)


### Bug Fixes

* **credit-card:** check validation on input post blur [#124](https://github.com/AlaskaAirlines/auro-input/issues/124) ([259da85](https://github.com/AlaskaAirlines/auro-input/commit/259da85dca531ab7d81d5ae2d714572bae2fc45e))
* **validation:** add missing support [#125](https://github.com/AlaskaAirlines/auro-input/issues/125) ([4886fa3](https://github.com/AlaskaAirlines/auro-input/commit/4886fa3822cda4d1f3a83efd29aae3ec07124a2c))

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
