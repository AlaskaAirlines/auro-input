<style>
  .exampleWrapper--flex * {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 660px) {
    .exampleWrapper--flex {
      display: flex;
      justify-content: space-between;
    }

    .exampleWrapper--flex * {
      width: 45%;
      margin-bottom: unset;
    }
  }
</style>

# test

  <auro-input type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>

# Input

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
Use the `<auro-input>` custom element to create basic single-line text fields. Supports type `text`, `password`, and `email` with validation, required input, error states and a secondary `bordered` theme. Use the slots `label` and `helptext` for additional content support.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-input use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-input>` element should be used in situations where users may:

* needs to enter information
* be filling out a form
<!-- AURO-GENERATED-CONTENT:END -->

## Default component

The default component supports the basic input `type="text"` structure. The `(optional)` label is provided to instruct the user that their input is not required. Use the `bordered` attribute for a bordered `<auro-input>`.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-input></auro-input>
  <auro-input bordered></auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-input></auro-input>
<auro-input bordered></auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Placeholder

Use the `placeholder` attribute to add a custom placeholder message within the element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/placeholder.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/placeholder.html -->
  <auro-input required placeholder="John Doe">
    <span slot="label">Full name</span>
  </auro-input>
  <auro-input required bordered placeholder="John Doe">
    <span slot="label">Full name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/placeholder.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/placeholder.html -->

```html
<auro-input required placeholder="John Doe">
  <span slot="label">Full name</span>
</auro-input>
<auro-input required bordered placeholder="John Doe">
  <span slot="label">Full name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Disabled

Use the `disabled` attribute to prevent the user from interacting with the input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-input disabled required>
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input disabled bordered required>
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-input disabled required>
  <slot slot="label">Address</slot>
  <slot slot="helptext">Please enter your home address.</slot>
</auro-input>
<auro-input disabled bordered required>
  <slot slot="label">Address</slot>
  <slot slot="helptext">Please enter your home address.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Active Label

Example use cases for auro-input support the `activeLabel` attribute. If set, the label will stay fixed in the active position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/activeLabel.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/activeLabel.html -->
  <auro-input activeLabel bordered>
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/activeLabel.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/activeLabel.html -->

```html
<auro-input activeLabel bordered>
  <slot slot="label">Address</slot>
  <slot slot="helptext">Please enter your home address.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Value

Use the `value` attribute to preset the value of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/programmaticValue.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/programmaticValue.html -->
  <auro-input value="Alaska Airlines is the best!" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/programmaticValue.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/programmaticValue.html -->

```html
<auro-input value="Alaska Airlines is the best!" bordered>
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Pattern 

Use the `pattern` attribute to set custom input validation. This example also uses the `spellcheck` attribute set to `false` which in turn sets `autocorrect` to `off` and `autocapitalize` to `none`. Additionally the `maxlength` attribute sets the maximum length of characters that can be entered.

The `<auro-input>` component supports setting a custom validity message specific to the pattern validation by using the `setCustomValidityBadInput` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/pattern.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/pattern.html -->
  <auro-input pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>
  <auro-input bordered pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/pattern.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/pattern.html -->

```html
<auro-input pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
  <span slot="label">Username</span>
  <span slot="helptext">Please enter a username.</span>
</auro-input>
<auro-input bordered pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
  <span slot="label">Username</span>
  <span slot="helptext">Please enter a username.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Localization Support

The `auro-input` element supports the localization of all content managed within the scope of the element. This DOES NOT include any custom content placed in the `slot` element.

<auro-radio-group required horizontal>
  <span slot="legend">Use the options here to toggle between languages</span>
  <auro-radio id="radio" name="langDemo" value="en" onclick="changeLang('en')" checked>English</auro-radio>
  <auro-radio id="radio" name="langDemo" value="es" onclick="changeLang('es')">Spanish</auro-radio>
</auro-radio-group>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-input` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-input';
registerComponent('custom-input');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-input>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-input></custom-input>
  <custom-input bordered></custom-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-input></custom-input>
<custom-input bordered></custom-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
