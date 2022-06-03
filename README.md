<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/README.md`
and copied to `./componentDocs/README.md` each time the the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Input

Use the `auro-input` custom element to create basic single-line text fields. Supports type `text`, `password`, and `email` with validation, required input, error states and a secondary `bordered` theme. Use the slots `label` and `helptext` for additional content support.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-input/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-input/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-input?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-input)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-input?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-input
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Peer dependencies

```shell
$ npm i @alaskaairux/auro-icon
$ npm i @alaskaairux/design-tokens
$ npm i @alaskaairux/webcorestylesheets
```

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-input>` component.

```js
import "@aurodesignsystem/auro-input";
```

**Reference component in HTML**

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-input__bundled.js` for modern browsers and `auro-input__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

### Bundle example code

```html
<!-- **NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk. -->
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />
<script src="https://unpkg.com/@aurodesignsystem/auro-input@latest/dist/auro-input__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-input@latest/dist/auro-input__bundled.es5.js" nomodule></script>
```

## auro-input use cases

The `<auro-input>` element should be used in situations where users may:

* LOREM IPSUM

## API Code Examples

### Default auro-input

```html
<auro-input id="full-name" required>
  <span slot="label">Name</span>
</auro-input>
<auro-input id="full-name" required bordered>
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
<auro-input id="full-name" type="password" required bordered>
  <span slot="label">Password</span>
  <span slot="helptext">Please enter a secure password.</span>
</auro-input>
<auro-input bordered required disabled type="email" id="email-address">
  <slot slot="label">Email address</slot>
  <slot slot="helptext">Please enter your email address.</slot>
</auro-input>
<auro-input bordered required icon type="credit-card" id="credit-card">
  <slot slot="label">Card number</slot>
  <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
</auro-input>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-input.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Visual regression testing

[BackstopJS](https://github.com/garris/BackstopJS#backstop-features) is used to support our visual regression testing scenarios. Testing is based off of a series of reference images that are committed to this repository. As new work is done, testing will be required in order to ensure visual stability of this element.

For a full description of the [test API](https://github.com/garris/BackstopJS#using-backstopjs).

Visual regression tests require running a local server. Tests will expect `http://localhost:8000`. If a server is not running, please run `$ npm run dev` to start a local server.

The command `$ npm run vrt:test` is part of this element's pre-commit feature. If an issue is discovered it will fall into one of two categories, **resolve** or **approve**.

#### Resolve

If there is a change that is unintended, please address the issue and re-run `$ vrt:test`. Please DO NOT APPROVE an error to the tests.

#### Approve

If the change is expected, run `$ vrt:approve` and the new diff will be added to the test reference files. This step should be committed to the repo's history.

```shell
test(vrt): update test baseline reference
```

#### Adding a new scenario

If a new scenario is added to the visual regression suite, you will need to run `$ vrt:ref` to generate new references.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run build:demo` to create a `./build` directory that can be pushed to any static server.

<small>Built from WC-Generator v3.11.0</small>
