# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.2](https://github.com/egorshulga/react-native-autosize-image/compare/v0.1.1...v0.1.2) (2020-09-18)

### [0.1.1](https://github.com/egorshulga/react-native-autosize-image/compare/v0.1.0...v0.1.1) (2020-08-06)

## 0.1.0 (2020-08-06)


### ⚠ BREAKING CHANGES

* **changelog:** Drop support for react before 16.8 and react-native before 0.59
* incorporated imagepolyfill in codebase, removed from deps

### Features

* :sparkles: support `maxHeight` prop, reuse image cache on initial rendering to optimize the performance ([e5055c8](https://github.com/egorshulga/react-native-autosize-image/commit/e5055c8e97a800581d7049140392cdedad035f48))
* :sparkles:Support all image props ([4088b73](https://github.com/egorshulga/react-native-autosize-image/commit/4088b734256aac4952befe99fbeb931adb845f75))
* animated image support ([97ff786](https://github.com/egorshulga/react-native-autosize-image/commit/97ff786c40143599228524c1b12d4e29ba496e57))
* **deps:** bumped React to ^16.8 & React Native to ^0.59.0 ([24edbc2](https://github.com/egorshulga/react-native-autosize-image/commit/24edbc266bedc2a29e12c82223331550c1e28112))
* :sparkles:updateImageHeight with safe check ([a2c9275](https://github.com/egorshulga/react-native-autosize-image/commit/a2c92756762874f00f025d80df42926517b999ac))
* incorporated imagepolyfill in codebase, removed from deps ([bfdca6f](https://github.com/egorshulga/react-native-autosize-image/commit/bfdca6faec1cdb2c9e75c3fa705abf3d13848851))
* **onError:** :sparkles:Propagate errors to onError ([4d9a14d](https://github.com/egorshulga/react-native-autosize-image/commit/4d9a14d1f0ecd9e7d8fc230636fb434e6a4144aa))
* **onHeightChange:** :sparkles:Provides a new api to extract the calculated height. ([18c86e6](https://github.com/egorshulga/react-native-autosize-image/commit/18c86e6ddffad32cfe90bbecbcd710c92e317f42))
* :tada:First Commit ([243c394](https://github.com/egorshulga/react-native-autosize-image/commit/243c394e9eaa2338bcf8b7bdaa9620ffbe02a2f0))


### Bug Fixes

* **deps:** update dependency expo to v38 ([6b24bd8](https://github.com/egorshulga/react-native-autosize-image/commit/6b24bd8c1a2f1bf7fafcb0ba3c7b558318d7d152))
* **deps:** update dependency react-native-web to ^0.13.0 ([82d6270](https://github.com/egorshulga/react-native-autosize-image/commit/82d6270e7e45855864fcc4fcf1ec62ee97695300))
* :bug: fix `Can't perform a React state update on an unmounted component.` ([035e6a8](https://github.com/egorshulga/react-native-autosize-image/commit/035e6a86ba39daf3c16d75d7467f925d94537023)), closes [#44](https://github.com/egorshulga/react-native-autosize-image/issues/44)
* :bug:Fix hasLoaded logic ([1b8264c](https://github.com/egorshulga/react-native-autosize-image/commit/1b8264c47eb8b4fb565fc7b218aa1aee40f3aba1))
* add missing symbol ([7498b82](https://github.com/egorshulga/react-native-autosize-image/commit/7498b823bb8ac8a0f1f509fb0f083a61e57e192d))
* android crash at imagePolyfill ([21dc084](https://github.com/egorshulga/react-native-autosize-image/commit/21dc0841c452a4178202db1beedfc7e2e72d7665))
* fix for fallback images ([d825375](https://github.com/egorshulga/react-native-autosize-image/commit/d8253757c19fdbeb5458e36d9a3706ea8949acb7))
* for rn warning on componentWillReceiveProps ([b4d194d](https://github.com/egorshulga/react-native-autosize-image/commit/b4d194df769d66112a51f2f11a2a4e0efc96fc16))
* **rejection:** :bug:Fix `Possible Unhandled Promise Rejection` warning. ([02441ba](https://github.com/egorshulga/react-native-autosize-image/commit/02441ba70c2d0ece8ec8de61661653d85317f75b)), closes [#4](https://github.com/egorshulga/react-native-autosize-image/issues/4)
* **trailing comma:** :bug: ([89713a5](https://github.com/egorshulga/react-native-autosize-image/commit/89713a5079456f88307b1a888dfafcaeae1c5e09))


* **changelog:** :memo: commit a breaking change ([03c9b81](https://github.com/egorshulga/react-native-autosize-image/commit/03c9b81bfaf00bc4adf250fc7d191140b4aa9775))

### [3.2.3](https://github.com/egorshulga/react-native-auto-image/compare/v3.2.2...v3.2.3) (2020-08-05)

### [3.2.3](https://github.com/egorshulga/react-native-auto-image/compare/v3.2.2...v3.2.3) (2020-08-05)

### [3.2.2](https://github.com/vivaxy/react-native-auto-image/compare/v3.2.1...v3.2.2) (2020-07-25)


### Bug Fixes

* **deps:** update dependency expo to v38 ([6b24bd8](https://github.com/vivaxy/react-native-auto-image/commit/6b24bd8c1a2f1bf7fafcb0ba3c7b558318d7d152))
* **deps:** update dependency react-native-web to ^0.13.0 ([82d6270](https://github.com/vivaxy/react-native-auto-image/commit/82d6270e7e45855864fcc4fcf1ec62ee97695300))

### [3.2.1](https://github.com/vivaxy/react-native-auto-image/compare/v3.2.0...v3.2.1) (2020-06-08)

## [3.2.0](https://github.com/vivaxy/react-native-auto-image/compare/v3.1.3...v3.2.0) (2020-05-27)


### Features

* :sparkles: support `maxCrossAxisSize` prop, reuse image cache on initial rendering to optimize the performance ([e5055c8](https://github.com/vivaxy/react-native-auto-image/commit/e5055c8e97a800581d7049140392cdedad035f48))

### [3.1.3](https://github.com/vivaxy/react-native-auto-image/compare/v3.1.2...v3.1.3) (2020-05-07)


### Bug Fixes

* :bug: fix `Can't perform a React state update on an unmounted component.` ([035e6a8](https://github.com/vivaxy/react-native-auto-image/commit/035e6a86ba39daf3c16d75d7467f925d94537023)), closes [#44](https://github.com/vivaxy/react-native-auto-image/issues/44)

### [3.1.2](https://github.com/vivaxy/react-native-auto-image/compare/v3.1.1...v3.1.2) (2020-04-18)


### Bug Fixes

* add missing symbol ([7498b82](https://github.com/vivaxy/react-native-auto-image/commit/7498b823bb8ac8a0f1f509fb0f083a61e57e192d))

### [3.1.1](https://github.com/vivaxy/react-native-auto-image/compare/v3.1.0...v3.1.1) (2020-04-04)


### Bug Fixes

* android crash at imagePolyfill ([21dc084](https://github.com/vivaxy/react-native-auto-image/commit/21dc0841c452a4178202db1beedfc7e2e72d7665))

## [3.1.0](https://github.com/vivaxy/react-native-auto-image/compare/v3.0.0...v3.1.0) (2020-03-31)


### Features

* animated image support ([97ff786](https://github.com/vivaxy/react-native-auto-image/commit/97ff786c40143599228524c1b12d4e29ba496e57))

## [3.0.0](https://github.com/vivaxy/react-native-auto-image/compare/v2.0.0...v3.0.0) (2020-01-17)


### ⚠ BREAKING CHANGES

* **changelog:** Drop support for react before 16.8 and react-native before 0.59

* **changelog:** :memo: commit a breaking change ([03c9b81](https://github.com/vivaxy/react-native-auto-image/commit/03c9b81))


### Bug Fixes

* fix for fallback images ([d825375](https://github.com/vivaxy/react-native-auto-image/commit/d825375))


### Features

* **deps:** bumped React to ^16.8 & React Native to ^0.59.0 ([24edbc2](https://github.com/vivaxy/react-native-auto-image/commit/24edbc2))

## [2.0.0](https://github.com/vivaxy/react-native-auto-image/compare/v1.1.3...v2.0.0) (2020-01-09)


### ⚠ BREAKING CHANGES

* incorporated imagepolyfill in codebase, removed from deps

### Features

* incorporated imagepolyfill in codebase, removed from deps ([bfdca6f](https://github.com/vivaxy/react-native-auto-image/commit/bfdca6f))

<a name="1.1.3"></a>
## [1.1.3](https://github.com/vivaxy/react-native-auto-image/compare/v1.1.2...v1.1.3) (2019-10-16)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/vivaxy/react-native-auto-image/compare/v1.1.0...v1.1.1) (2019-08-13)


### Reverts

* **open collective:** :rewind: revert changes to package.json ([37f3b17](https://github.com/vivaxy/react-native-auto-image/commit/37f3b17))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.5...v1.1.0) (2019-03-07)


### Features

* :sparkles:updateImageCrossAxisSize with safe check ([a2c9275](https://github.com/vivaxy/react-native-auto-image/commit/a2c9275))



<a name="1.0.5"></a>
## [1.0.5](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.4...v1.0.5) (2018-10-22)


### Bug Fixes

* :bug:Fix updating the image size after change of the source ([cfe1566](https://github.com/vivaxy/react-native-auto-image/commit/cfe1566))



<a name="1.0.4"></a>
## [1.0.4](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.3...v1.0.4) (2018-10-09)


### Bug Fixes

* :bug:Remove trailing comma ([89713a5](https://github.com/vivaxy/react-native-auto-image/commit/89713a5))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.2...v1.0.3) (2018-10-09)


### Features

* Allowing Image props.



<a name="1.0.2"></a>
## [1.0.2](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.1...v1.0.2) (2018-10-07)


### Features

* Add type definitions.



<a name="1.0.1"></a>
## [1.0.1](https://github.com/vivaxy/react-native-auto-image/compare/v1.0.0...v1.0.1) (2018-07-13)


### Features

* Reformat codes.



<a name="1.0.0"></a>
# [1.0.0](https://github.com/vivaxy/react-native-auto-image/compare/v0.4.0...v1.0.0) (2018-01-18)


### Features

* Support local images and fallback sources.


### Breaking changes.

* Remove `imageURL`, use `source` instead.



<a name="0.4.0"></a>
# [0.4.0](https://github.com/vivaxy/react-native-auto-image/compare/v0.3.4...v0.4.0) (2018-01-16)


### Features

* **onError:** :sparkles:Propagate errors to onError ([4d9a14d](https://github.com/vivaxy/react-native-auto-image/commit/4d9a14d))



<a name="0.3.4"></a>
## [0.3.4](https://github.com/vivaxy/react-native-auto-image/compare/v0.3.3...v0.3.4) (2017-12-20)


### Features

* Update image size on mainAxisSize change. ([7a09dc0](https://github.com/vivaxy/react-native-auto-image/commit/7a09dc0))



<a name="0.3.3"></a>
## [0.3.3](https://github.com/vivaxy/react-native-auto-image/compare/v0.3.2...v0.3.3) (2017-08-22)


### Features

* Optimize error handling from `Image.getSize`. ([80158e7](https://github.com/vivaxy/react-native-auto-image/commit/80158e7))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/vivaxy/react-native-auto-image/compare/v0.3.1...v0.3.2) (2017-08-22)


### Bug Fixes

* **rejection:** :bug:Fix `Possible Unhandled Promise Rejection` warning. ([02441ba](https://github.com/vivaxy/react-native-auto-image/commit/02441ba)), closes [#4](https://github.com/vivaxy/react-native-auto-image/issues/4)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/vivaxy/react-native-auto-image/compare/v0.3.0...v0.3.1) (2017-08-08)


### Bug Fixes

* :bug:Fixed syntax error in index.js. ([c384cd6](https://github.com/vivaxy/react-native-auto-image/commit/c384cd6))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/vivaxy/react-native-auto-image/compare/v0.2.2...v0.3.0) (2017-07-31)


### Features

* **onCrossAxisSizeChange:** :sparkles:Provides a new api to extract the calculated crossAxisSize. ([18c86e6](https://github.com/vivaxy/react-native-auto-image/commit/18c86e6))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/vivaxy/react-native-auto-image/compare/v0.2.1...v0.2.2) (2017-05-27)


### Documents

* Update documents.



<a name="0.2.1"></a>
## [0.2.1](https://github.com/vivaxy/react-native-auto-image/compare/v0.2.0...v0.2.1) (2017-04-24)


### Bug Fixes

* :bug:Fix hasLoaded logic ([1b8264c](https://github.com/vivaxy/react-native-auto-image/commit/1b8264c))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/vivaxy/react-native-auto-image/compare/v0.1.0...v0.2.0) (2017-04-24)


### Features

* :sparkles:Support all image props ([4088b73](https://github.com/vivaxy/react-native-auto-image/commit/4088b73))



<a name="0.1.0"></a>
# 0.1.0 (2017-04-24)


### Features

* :tada:First Commit ([243c394](https://github.com/vivaxy/react-native-auto-image/commit/243c394))
