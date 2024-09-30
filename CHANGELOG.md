# Semantic Release Automated Changelog

# [4.0.0-beta.1](https://github.com/AlaskaAirlines/auro-input/compare/v3.1.0-beta.3...v4.0.0-beta.1) (2024-09-30)


### Bug Fixes

* add file extensions for SSR support ([d91e0e1](https://github.com/AlaskaAirlines/auro-input/commit/d91e0e19da9d759dedc51c7f866c3a6db8ece7d9))
* realign text and icons on non-bordered inputs [#333](https://github.com/AlaskaAirlines/auro-input/issues/333) ([d1c1df4](https://github.com/AlaskaAirlines/auro-input/commit/d1c1df405802113f19b071de8a3676e7673d1390))
* remove private default of attribute ([03e9747](https://github.com/AlaskaAirlines/auro-input/commit/03e9747c9cf498b6a318d1963ce5ba56cf069a65))
* resolve color theming issues ([0fa4568](https://github.com/AlaskaAirlines/auro-input/commit/0fa456872632081596bc488f28cce15d3adc0333))
* **theming:** resolve minor theming issues [#296](https://github.com/AlaskaAirlines/auro-input/issues/296) ([03c3fae](https://github.com/AlaskaAirlines/auro-input/commit/03c3fae773a96e0a984efdb8d0046e39118fc612))


### Features

* **autocomplete:** add html5 autocomplete functionality [#334](https://github.com/AlaskaAirlines/auro-input/issues/334) ([df7dd3a](https://github.com/AlaskaAirlines/auro-input/commit/df7dd3aef9ba69ffc9628c6b779f27aae2a104df))


### Performance Improvements

* refactor custom component registration config ([3ec2599](https://github.com/AlaskaAirlines/auro-input/commit/3ec2599f817234a26507cdf298d6a89583db2f05))
* update dependencies ([d65d9f3](https://github.com/AlaskaAirlines/auro-input/commit/d65d9f336ff0c3d758cc54fa5e45bcfa8820caae))


### BREAKING CHANGES

* trigger major release for color theming support #296

# [3.1.0-beta.3](https://github.com/AlaskaAirlines/auro-input/compare/v3.1.0-beta.2...v3.1.0-beta.3) (2024-07-04)


### Performance Improvements

* **deps:** update to latest beta dependencies ([42ecf61](https://github.com/AlaskaAirlines/auro-input/commit/42ecf61f00d25d10c2ecd8c15ad64ed416e38bf4))

# [3.1.0-beta.2](https://github.com/AlaskaAirlines/auro-input/compare/v3.1.0-beta.1...v3.1.0-beta.2) (2024-07-03)


### Performance Improvements

* **button:** use new auro-button flat variant for clear and show password ([2a671d2](https://github.com/AlaskaAirlines/auro-input/commit/2a671d220f667799758639c32a8ce6f9058ddf66))

# [3.1.0-beta.1](https://github.com/AlaskaAirlines/auro-input/compare/v3.0.1...v3.1.0-beta.1) (2024-06-24)


### Features

* refactor color token structure with tier 3 tokens [#296](https://github.com/AlaskaAirlines/auro-input/issues/296) ([5653863](https://github.com/AlaskaAirlines/auro-input/commit/56538636ae356a217a68d30608b75e5a2409e60b))


### Performance Improvements

* **icon:** update to use beta of auro-icon with theme support ([7df7568](https://github.com/AlaskaAirlines/auro-input/commit/7df75680b487ef7d61747a880d999138f3e2d1a0))
* replace hardcoded styles with tokens ([e9700ee](https://github.com/AlaskaAirlines/auro-input/commit/e9700ee717b9c7d44f04f124b3302bda58f184b0))

## [3.0.1](https://github.com/AlaskaAirlines/auro-input/compare/v3.0.0...v3.0.1) (2024-05-10)


### Bug Fixes

* **btn:** only render clear button when input is not disabled [#309](https://github.com/AlaskaAirlines/auro-input/issues/309) ([1d250b9](https://github.com/AlaskaAirlines/auro-input/commit/1d250b9048e5958cdf5fbfe3198096bf3bbd7bfe))

# [3.0.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.10...v3.0.0) (2024-05-09)


### Bug Fixes

* **icon:** show icon when validity is null or undefined ([4454f73](https://github.com/AlaskaAirlines/auro-input/commit/4454f734fb1090d018885cb12a6b0e130230b9a2))


### Documentation

* **jsdocs:** update jsdocs ([4352348](https://github.com/AlaskaAirlines/auro-input/commit/4352348ea81ddf752a27af11b3669a1fe2f54480))


### Performance Improvements

* **validation:** use updated logic to handle all form components [#308](https://github.com/AlaskaAirlines/auro-input/issues/308) ([92ee1e0](https://github.com/AlaskaAirlines/auro-input/commit/92ee1e0ba73298fcbb6cbee629629b7f98277a1d))


### BREAKING CHANGES

* **jsdocs:** The auroInput-validated and auroInput-helpText events have been deprecated and replaced by auroFormElement-validated.

## [2.17.10](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.9...v2.17.10) (2024-03-27)


### Bug Fixes

* **dom:** refactor constructor to fix dynamic creation of component [#300](https://github.com/AlaskaAirlines/auro-input/issues/300) ([0279b94](https://github.com/AlaskaAirlines/auro-input/commit/0279b941b66edaa90a1b93fde2a8d5061ec65673))

## [2.17.9](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.8...v2.17.9) (2024-03-22)


### Performance Improvements

* update to support named export [#298](https://github.com/AlaskaAirlines/auro-input/issues/298) ([48cb589](https://github.com/AlaskaAirlines/auro-input/commit/48cb589b566f66e66adb106f1c7ea00171151b10))

## [2.17.8](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.7...v2.17.8) (2024-03-11)


### Performance Improvements

* **part:** add new part for use in styling borders ([d9bddbe](https://github.com/AlaskaAirlines/auro-input/commit/d9bddbed0d8ef3ae1d23b98ea2d492328358cdc0))

## [2.17.7](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.6...v2.17.7) (2024-03-08)


### Bug Fixes

* **activeLabel:** fix rendering of label with activeLabel attribute true ([4e0129b](https://github.com/AlaskaAirlines/auro-input/commit/4e0129b6e5a87b6cecd1dd06c168eb9e979b6039))
* **bordered:** restore backgrond color ([6abfaae](https://github.com/AlaskaAirlines/auro-input/commit/6abfaaeffa7a6ad3539e8c585bb1a2a385b982dc))
* **error:** correct bottom border on error state ([7c1c8fa](https://github.com/AlaskaAirlines/auro-input/commit/7c1c8fa8f992fea480713b62e79dacee63f50b1a))
* **icons:** correct icon spacing ([59a41fc](https://github.com/AlaskaAirlines/auro-input/commit/59a41fc8dae6c1d9049d4472256c437369c6d526))
* styling updates ([1963848](https://github.com/AlaskaAirlines/auro-input/commit/196384814f8fe346d13b2be91247721b93608813))


### Performance Improvements

* **icons:** refactor icon implementation ([b809bc3](https://github.com/AlaskaAirlines/auro-input/commit/b809bc3e3369bdf438ecd77f2fa99199eea280fa))
* **layout:** significatly refactor HTML and style code ([a30f1e9](https://github.com/AlaskaAirlines/auro-input/commit/a30f1e9febb6e775e0bb5bd221eb09f62141c8b1))
* **validation:** use vaidation package instead of custom local validation ([5208ab2](https://github.com/AlaskaAirlines/auro-input/commit/5208ab2b162af45e4bf5a7cc2ccfd1932e815eaf))

## [2.17.6](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.5...v2.17.6) (2024-02-23)


### Performance Improvements

* **docs:** update minified js system ([785fdf8](https://github.com/AlaskaAirlines/auro-input/commit/785fdf8e76b7964803be09da555353054e94eb9d))
* **js:** implement minified js example system [#289](https://github.com/AlaskaAirlines/auro-input/issues/289) ([6b11a42](https://github.com/AlaskaAirlines/auro-input/commit/6b11a42b70a6283f1174d8a4868ea5afac42aa2d))

## [2.17.5](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.4...v2.17.5) (2024-02-13)


### Performance Improvements

* update auro dependencies ([e9449d5](https://github.com/AlaskaAirlines/auro-input/commit/e9449d51febc88735ca28a72a0bd2103eb3e1ce2))

## [2.17.4](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.3...v2.17.4) (2024-02-10)


### Performance Improvements

* update to support SSR ([fa45148](https://github.com/AlaskaAirlines/auro-input/commit/fa45148782ed77db1846b9a31b09f45d129b58a3))

## [2.17.3](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.2...v2.17.3) (2024-02-10)


### Performance Improvements

* update to support SSR ([fe98f7e](https://github.com/AlaskaAirlines/auro-input/commit/fe98f7e968ffe338cf79541142f1c638851bd64d))

## [2.17.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.1...v2.17.2) (2024-02-10)


### Performance Improvements

* update element to use new icon refs ([d9582c8](https://github.com/AlaskaAirlines/auro-input/commit/d9582c84d03bcd893162fa5d71b2a0fb722b238c))

## [2.17.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.17.0...v2.17.1) (2024-02-10)


### Performance Improvements

* update dependencies to support SSR ([7e14f74](https://github.com/AlaskaAirlines/auro-input/commit/7e14f742d8f4b54ebaab6cfe57a8a92030f654dc))

# [2.17.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.16.1...v2.17.0) (2024-02-05)


### Features

* **readonly:** add readonly attribute [#284](https://github.com/AlaskaAirlines/auro-input/issues/284) ([2852c1c](https://github.com/AlaskaAirlines/auro-input/commit/2852c1c15939a86736044df2c46b127b32355738))


### Performance Improvements

* **docs:** refactor doc structure ([8afb847](https://github.com/AlaskaAirlines/auro-input/commit/8afb84733669901cf6cacfb82e0c86b0f90b48e2))
* **ignore:** edit ignore files ([598ecaf](https://github.com/AlaskaAirlines/auro-input/commit/598ecafbea5ac410eba7e37d49071e36bbe561ab))
* **readme:** update readme based on template ([d02017f](https://github.com/AlaskaAirlines/auro-input/commit/d02017f9898147947b9afabefeb7f3bebd888012))
* **readonly:** make fixes based on PR review ([0283fba](https://github.com/AlaskaAirlines/auro-input/commit/0283fba4d67b7f43fae9d2bbd17f038445534135))
* **value:** improve value example ([ccaa421](https://github.com/AlaskaAirlines/auro-input/commit/ccaa421321327a030aca23e254def1e6e935fc20))

## [2.16.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.16.0...v2.16.1) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([f93674a](https://github.com/AlaskaAirlines/auro-input/commit/f93674ae892988caad8301a0824cf88c4d2fa3c2))

# [2.16.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.15.2...v2.16.0) (2024-01-20)


### Bug Fixes

* set correct CSS value fallback [#280](https://github.com/AlaskaAirlines/auro-input/issues/280) ([646c2fd](https://github.com/AlaskaAirlines/auro-input/commit/646c2fd33fb7025c1610a27d57fcdc7579750598))


### Features

* add suport for SSR projects [#281](https://github.com/AlaskaAirlines/auro-input/issues/281) ([deb6499](https://github.com/AlaskaAirlines/auro-input/commit/deb6499a28dc00421875209db5a25e65489c9d67))

## [2.15.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.15.1...v2.15.2) (2024-01-07)


### Bug Fixes

* styling border issue on disabled state [#274](https://github.com/AlaskaAirlines/auro-input/issues/274) ([ec13076](https://github.com/AlaskaAirlines/auro-input/commit/ec13076d6f3020ed9122902934aa26c03d7bd4c3))


### Performance Improvements

* update to support current Node policy ([e640d0f](https://github.com/AlaskaAirlines/auro-input/commit/e640d0f8b2a85fae57937e7c397ad0865ad32fac))

## [2.15.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.15.0...v2.15.1) (2023-11-02)


### Performance Improvements

* **token:** update token per new theming [#269](https://github.com/AlaskaAirlines/auro-input/issues/269) ([c1043b2](https://github.com/AlaskaAirlines/auro-input/commit/c1043b2e6bfdda83b4f989713d6a9042cabd61f9))

# [2.15.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.14.1...v2.15.0) (2023-09-24)


### Bug Fixes

* **keyup:** remove stale keyup event code that broke UI [#265](https://github.com/AlaskaAirlines/auro-input/issues/265) ([fbc767c](https://github.com/AlaskaAirlines/auro-input/commit/fbc767c18beb17c3964358c38fe403d502722bf8))


### Features

* **selector:** add auro-icon attribute if element tagname is custom [#267](https://github.com/AlaskaAirlines/auro-input/issues/267) ([98e11f6](https://github.com/AlaskaAirlines/auro-input/commit/98e11f6c269eb03dd771220be75f416115862bf3))

## [2.14.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.14.0...v2.14.1) (2023-05-21)


### Bug Fixes

* **cleave:** revert to previous cleave release version [#256](https://github.com/AlaskaAirlines/auro-input/issues/256) ([30a56c1](https://github.com/AlaskaAirlines/auro-input/commit/30a56c1c89a71c4e3ed257c7a2b6d8bd0bb4670b))

# [2.14.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.13.2...v2.14.0) (2023-05-11)


### Bug Fixes

* **postCss:** update postCss script ([d889f5d](https://github.com/AlaskaAirlines/auro-input/commit/d889f5d9becc1a4a1323f547e423fae4b88cf240))
* **test:** update test script accessibility issue ([5d92eed](https://github.com/AlaskaAirlines/auro-input/commit/5d92eed17922b9420525f716396d3bfcd5b38f1e))


### Features

* **typescript:** add typescript support [#249](https://github.com/AlaskaAirlines/auro-input/issues/249) ([548d17f](https://github.com/AlaskaAirlines/auro-input/commit/548d17f47730751e3bb6859f7582c3ad35e6f773))


### Performance Improvements

* **es5:** remove legacy bundling resource [#248](https://github.com/AlaskaAirlines/auro-input/issues/248) ([3e81ecc](https://github.com/AlaskaAirlines/auro-input/commit/3e81ecc93f6e396f5410d9d07b844b233ef7c973))
* **lit:** update to Lit2.0 [#249](https://github.com/AlaskaAirlines/auro-input/issues/249) ([3b6f52d](https://github.com/AlaskaAirlines/auro-input/commit/3b6f52d7a39958d9a908adfee0d9627f102c9f1d))

## [2.13.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.13.1...v2.13.2) (2023-04-20)


### Performance Improvements

* **ce:** implement ce naming convention [#246](https://github.com/AlaskaAirlines/auro-input/issues/246) ([e8a78c8](https://github.com/AlaskaAirlines/auro-input/commit/e8a78c84b4c1e0763a120b3ab335b5b7ca236a51))

## [2.13.1](https://github.com/AlaskaAirlines/auro-input/compare/v2.13.0...v2.13.1) (2023-04-20)


### Bug Fixes

* **focus:** remove focus attribute from validation [#244](https://github.com/AlaskaAirlines/auro-input/issues/244) ([9b65bf9](https://github.com/AlaskaAirlines/auro-input/commit/9b65bf9206206ff3c0432667167dbc99824f1c63))

# [2.13.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.12.0...v2.13.0) (2023-04-12)


### Bug Fixes

* **date:** validates date format length correctly ([169a13f](https://github.com/AlaskaAirlines/auro-input/commit/169a13fa82bbbe524942ef1c0d80100579c1f0a6))
* **docs:** correct typo in API attribute ([bf469e7](https://github.com/AlaskaAirlines/auro-input/commit/bf469e77313775d6d7ddfd48de7291aa70c4997a))
* **min:** correct validation check for min attribute ([3a29cf5](https://github.com/AlaskaAirlines/auro-input/commit/3a29cf58f9b295059f154436015a235a8be6518d))


### Features

* **validation:** add min max validation for type === numeric [#242](https://github.com/AlaskaAirlines/auro-input/issues/242) ([c9e32d7](https://github.com/AlaskaAirlines/auro-input/commit/c9e32d7dc22ccdf70ec1d596f23679932a2e5746))
* **validity:** add validation for min and max values [#242](https://github.com/AlaskaAirlines/auro-input/issues/242) ([0ec2e21](https://github.com/AlaskaAirlines/auro-input/commit/0ec2e21d0ce8897fd000710c5f3737dda5791fc0))


### Performance Improvements

* **deps:** update several dependencies to latest versions ([539edfe](https://github.com/AlaskaAirlines/auro-input/commit/539edfe195a23505424556f9ada171d3c7474a0c))
* **validity:** improve validation workflow and messaging ([c248645](https://github.com/AlaskaAirlines/auro-input/commit/c2486459ea5a6780b6efa7b594bf6b87a546c166))
* **validity:** simplify if statement in valdity logic ([6f3da9f](https://github.com/AlaskaAirlines/auro-input/commit/6f3da9f0451bfd0066cb259f15879d025d1381d7))

# [2.12.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.11.0...v2.12.0) (2023-03-30)


### Features

* **validate:** add force attribute and only fire event when logic executes [#239](https://github.com/AlaskaAirlines/auro-input/issues/239) [#240](https://github.com/AlaskaAirlines/auro-input/issues/240) ([11ff882](https://github.com/AlaskaAirlines/auro-input/commit/11ff882c7f0f4a438c477700de264541c475df60))

# [2.11.0](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.6...v2.11.0) (2023-03-21)


### Features

* **validate:** validate method is publc [#236](https://github.com/AlaskaAirlines/auro-input/issues/236) ([5abe4f2](https://github.com/AlaskaAirlines/auro-input/commit/5abe4f206eac7c04f58afed3b271bc0be081a137))


### Performance Improvements

* **deps:** update to latest dependencies ([1efd1ef](https://github.com/AlaskaAirlines/auro-input/commit/1efd1ef25c7a81180a10c8b799c2c8572416e8c6))
* **node18:** complete updates to <node 18 dependencies ([36d7fc6](https://github.com/AlaskaAirlines/auro-input/commit/36d7fc6cc1a9058df50ff73e7fbcec4381519208))
* **node:** update to node 18 ([651d16e](https://github.com/AlaskaAirlines/auro-input/commit/651d16eab6025ac44a0d4e96216069383386a793))

## [2.10.6](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.5...v2.10.6) (2023-03-20)


### Bug Fixes

* **event:** validation event defined in docs is fired [#233](https://github.com/AlaskaAirlines/auro-input/issues/233) ([d62484f](https://github.com/AlaskaAirlines/auro-input/commit/d62484f2d24ff1fa2d7cb4bc78ccd71c528c564e))

## [2.10.5](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.4...v2.10.5) (2023-02-21)


### Bug Fixes

* **icon:** adjust position of icon on non bordered input [#201](https://github.com/AlaskaAirlines/auro-input/issues/201) ([0c49556](https://github.com/AlaskaAirlines/auro-input/commit/0c495568cfad6c2a6518ae9d4c35b91759879623))

## [2.10.4](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.3...v2.10.4) (2023-01-18)


### Bug Fixes

* **disabled:** fixed styles to prevent clear while disabled [#221](https://github.com/AlaskaAirlines/auro-input/issues/221) ([d70d07c](https://github.com/AlaskaAirlines/auro-input/commit/d70d07c24044361ed6658132e82832f531bf4909))
* **style:** no cursor change on hover when disabled ([fbcc2b1](https://github.com/AlaskaAirlines/auro-input/commit/fbcc2b10a2656aa03ec4cf89c9d0d80dd3c5060b))

## [2.10.3](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.2...v2.10.3) (2022-11-04)


### Bug Fixes

* **box-shadow:** render correct box-shadow UI in all states [#215](https://github.com/AlaskaAirlines/auro-input/issues/215) ([51e1a78](https://github.com/AlaskaAirlines/auro-input/commit/51e1a782a1dacc6acc0203dd381ca9244c177270))

## [2.10.2](https://github.com/AlaskaAirlines/auro-input/compare/v2.10.1...v2.10.2) (2022-11-02)


### Bug Fixes

* **border:** round border corners in safari [#106](https://github.com/AlaskaAirlines/auro-input/issues/106) ([92d097d](https://github.com/AlaskaAirlines/auro-input/commit/92d097db17405dd486b50c35231c17303313af8b))
* **error:** improve UI for non required error states [#200](https://github.com/AlaskaAirlines/auro-input/issues/200) ([2e5ee65](https://github.com/AlaskaAirlines/auro-input/commit/2e5ee65a8c3593a3083e7d57f626fa67670c72c1))

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
