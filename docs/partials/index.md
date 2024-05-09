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

# Input

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-input use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Default component

The default component supports the basic input `type="text"` structure. The `(optional)` label is provided to instruct the user that their input is not required. Use the `bordered` attribute for a bordered `<auro-input>`.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Placeholder

Use the `placeholder` attribute to add a custom placeholder message within the element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/placeholder.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/placeholder.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Disabled

Use the `disabled` attribute to prevent the user from interacting with the input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Active Label

Example use cases for auro-input support the `activeLabel` attribute. If set, the label will stay fixed in the active position.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/activeLabel.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/activeLabel.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Value

Use the `value` attribute to preset the value of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/programmaticValue.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/programmaticValue.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Pattern

Use the `pattern` attribute to set custom input validation. This example also uses the `spellcheck` attribute set to `false` which in turn sets `autocorrect` to `off` and `autocapitalize` to `none`. Additionally the `maxlength` attribute sets the maximum length of characters that can be entered.

The `<auro-input>` component supports setting a custom validity message specific to the pattern validation by using the `setCustomValidityBadInput` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/pattern.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/pattern.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
