## auro-input

`<auro-input>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) containing styling and behavior for a HTML `<input>` element and associated `<label>`. You can pass helper text to be displayed with the input. It will also perform client-side validation of the input and display any resulting errors.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/auro-input?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/auro-input)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-input?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-input)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-input?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-input
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-input>` component.

```javascript
import "@alaskaairuxauro-input";
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@latest/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@latest/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairuxauro-input@latest/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairuxauro-input@latest/dist/auro-input__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11.


## auro-input use cases

The `<auro-input>` element should be used in situations where users may:

* enter a single line of text into a form
* enter their email into a form

## API Code Examples

```html
<auro-input label="First name" required></auro-input>
```

### Required input with label and help text
```html
<auro-input label="First name" helptext="Enter your first name" required></auro-input>
```

### Required input with label and value
```html
<auro-input label="First name" value="Alaska" required></auro-input>
```

### Optional input with label
```html
<auro-input label="First name"></auro-input>
```

### Required email input
```html
<auro-input type="email" label="Email" required></auro-input>
```

### Disabled input
```html
<auro-input label="First name" disabled required></auro-input>
```

### Input with persistent error
```html
<auro-input label="First name" value="Alaska" error="This name already exists" required></auro-input>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-input.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
