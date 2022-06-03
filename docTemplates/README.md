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

# [Name]

<!-- AUROLABS-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/labsDisclaimer.md) -->
<!-- AUROLABS-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## UI development browser support

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/browserSupport.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentInstall.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Peer dependencies

```shell
$ npm i @alaskaairux/auro-icon
$ npm i @alaskaairux/design-tokens
$ npm i @alaskaairux/webcorestylesheets
```

### Design Token CSS Custom Property dependency

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/designTokens.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### CSS Custom Property fallbacks

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/cssFallbacks.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project component

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImportDescription.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImport.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

**Reference component in HTML**
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Install bundled assets from CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleInstallDescription.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Bundle example code

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleUse.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## [namespace]-[name] use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Code Examples

### Default [namespace]-[name]

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/advanced.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Development

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/developmentDescription.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Start development environment

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/localhost.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### API generation

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Testing

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/testing.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

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

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/bundles.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Demo deployment

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/deploymentDemo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

<small>Built from WC-Generator v3.11.0</small>
