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
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-input

## Attributes

| Attribute    | Type      | Description                    |
|--------------|-----------|--------------------------------|
| [bordered](#bordered)   | `Boolean` | Applies bordered UI variant.   |
| [borderless](#borderless) | `Boolean` | Applies borderless UI variant. |

## Properties

| Property                          | Attribute                         | Type      | Default                    | Description                                      |
|-----------------------------------|-----------------------------------|-----------|----------------------------|--------------------------------------------------|
| [activeLabel](#activeLabel)                     | `activeLabel`                     | `Boolean` | false                      | If set, the label will remain fixed in the active position. |
| [autocapitalize](#autocapitalize)                  | `autocapitalize`                  | `String`  |                            | An enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user. [off/none, on/sentences, words, characters] |
| [autocorrect](#autocorrect)                     | `autocorrect`                     | `String`  |                            | When set to `off`, stops iOS from auto correcting words when typed into a text box. |
| [customValidityTypeEmail](#customValidityTypeEmail)         | `customValidityTypeEmail`         | `string`  |                            |                                                  |
| [disabled](#disabled)                        | `disabled`                        | `Boolean` | false                      | If set, disables the input.                      |
| [error](#error)                           | `error`                           | `String`  |                            | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| [errorMessage](#errorMessage)                    | `errorMessage`                    | `String`  |                            | Contains the help text message for the current validity error. |
| [helpText](#helpText)                        | `helpText`                        | `String`  |                            | Deprecated, see `slot`.                          |
| [icon](#icon)                            | `icon`                            | `Boolean` | false                      | If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format. |
| [id](#id)                              | `id`                              | `String`  |                            | Sets the unique ID of the element.               |
| [isValid](#isValid)                         | `isValid`                         | `String`  | false                      | (DEPRECATED - Please use validity) Can be accessed to determine if the input validity. Returns true when validity has not yet been checked or validity = 'valid', all other cases return false. Not intended to be set by the consumer. |
| [label](#label)                           | `label`                           | `String`  | "Input label is undefined" | Deprecated, see `slot`.                          |
| [lang](#lang)                            | `lang`                            | `String`  |                            | defines the language of an element.              |
| [max](#max)                             | `max`                             | `String`  | "undefined"                | The maximum value allowed. This only applies for inputs with a type of `numeric` and all date formats. |
| [maxLength](#maxLength)                       | `maxLength`                       | `Number`  | "undefined"                | The maximum number of characters the user can enter into the text input. This must be an integer value `0` or higher. |
| [min](#min)                             | `min`                             | `String`  | "undefined"                | The minimum value allowed. This only applies for inputs with a type of `numeric` and all date formats. |
| [minLength](#minLength)                       | `minLength`                       | `Number`  | "undefined"                | The minimum number of characters the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. |
| [name](#name)                            | `name`                            | `String`  |                            | Populates the `name` attribute on the input.     |
| [noValidate](#noValidate)                      | `noValidate`                      | `Boolean` | false                      | If set, disables auto-validation on blur.        |
| [pattern](#pattern)                         | `pattern`                         | `String`  |                            | Specifies a regular expression the form control's value should match. |
| [placeholder](#placeholder)                     | `placeholder`                     | `String`  |                            | Define custom placeholder text, only supported by date input formats. |
| [readonly](#readonly)                        | `readonly`                        | `Boolean` |                            | Makes the input read-only, but can be set programmatically. |
| [ready](#ready)                           | `ready`                           | `Boolean` | false                      | When false the component API should not be called. |
| [required](#required)                        | `required`                        | `Boolean` | false                      | Populates the `required` attribute on the input. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity)               | `setCustomValidity`               | `String`  |                            | Sets a custom help text message to display for all validityStates. |
| [setCustomValidityBadInput](#setCustomValidityBadInput)       | `setCustomValidityBadInput`       | `String`  |                            | Custom help text message to display when validity = `badInput`. |
| [setCustomValidityCustomError](#setCustomValidityCustomError)    | `setCustomValidityCustomError`    | `String`  |                            | Custom help text message to display when validity = `customError`. |
| [setCustomValidityForType](#setCustomValidityForType)        | `setCustomValidityForType`        | `String`  | "undefined"                | Custom help text message to display for the declared element `type` and type validity fails. |
| [setCustomValidityRangeOverflow](#setCustomValidityRangeOverflow)  | `setCustomValidityRangeOverflow`  | `String`  |                            | Custom help text message to display when validity = `rangeOverflow`. |
| [setCustomValidityRangeUnderflow](#setCustomValidityRangeUnderflow) | `setCustomValidityRangeUnderflow` | `String`  |                            | Custom help text message to display when validity = `rangeUnderflow`. |
| [setCustomValidityTooLong](#setCustomValidityTooLong)        | `setCustomValidityTooLong`        | `String`  |                            | Custom help text message to display when validity = `tooLong`. |
| [setCustomValidityTooShort](#setCustomValidityTooShort)       | `setCustomValidityTooShort`       | `String`  |                            | Custom help text message to display when validity = `tooShort`. |
| [setCustomValidityValueMissing](#setCustomValidityValueMissing)   | `setCustomValidityValueMissing`   | `String`  |                            | Custom help text message to display when validity = `valueMissing`. |
| [spellcheck](#spellcheck)                      | `spellcheck`                      | `String`  |                            | An enumerated attribute defines whether the element may be checked for spelling errors. [true, false]. When set to `false` the attribute `autocorrect` is set to `off` and `autocapitalize` is set to `none`. |
| [type](#type)                            | `type`                            | `String`  |                            | Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`  or `text`. If given value is not allowed or set, defaults to `text`. |
| [validateOnInput](#validateOnInput)                 | `validateOnInput`                 | `Boolean` |                            | Sets validation mode to re-eval with each input. |
| [validity](#validity)                        | `validity`                        | `String`  |                            | Specifies the `validityState` this element is in. |
| [value](#value)                           | `value`                           | `String`  |                            | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Methods

| Method     | Type       | Description                                   |
|------------|------------|-----------------------------------------------|
| [validate](#validate) | `(): void` | Determines the validity state of the element. |

## Events

| Event                      | Type                                             | Description                                      |
|----------------------------|--------------------------------------------------|--------------------------------------------------|
| `auroInput-helpText`       | `CustomEvent<{ message: any; }>`                 | Notifies that the helpText message has changed.  |
| `auroInput-ready`          | `CustomEvent<any>`                               | Notifies that the component has finished initializing. |
| `auroInput-validated`      | `CustomEvent<{ validity: string \| undefined; }>` | Notifies that the `validity` value has changed.  |
| `auroInput-validityChange` | `CustomEvent<any>`                               |                                                  |
| [input](#input)                    |                                                  | Event fires when the value of an `auro-input` has been changed. |

## Slots

| Name       | Description                                   |
|------------|-----------------------------------------------|
| [helptext](#helptext) | Sets the help text displayed below the input. |
| [label](#label)    | Sets the label text for the input.            |

## CSS Shadow Parts

| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| [accentIcon](#accentIcon)    | Use for customizing the style of the accentIcon element (e.g. credit card icon, calendar icon) |
| [helpText](#helpText)      | Use for customizing the style of the helpText element |
| [iconContainer](#iconContainer) | Use for customizing the style of the iconContainer (e.g. X icon for clearing input value) |
| [label](#label)         | Use for customizing the style of the label element |
<!-- AURO-GENERATED-CONTENT:END -->

# API Examples

## Basic

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

## Attribute Examples

### Disabled <a name="disabled"></a>
Use the `disable` attribute to prevent the user from interacting with the input.

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

### Placeholder <a name="placeholder"></a>
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

### Value <a name="value"></a>
Use the `value` attribute to programmatically set the value of the input.

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

#### Dynamically Set Value

Use the `value` and other components to dynamically set the value of the input.

Note: Setting the `value` to `undefined` will also reset the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/value.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/value.html -->
  <auro-button id="setValidValueBtn">Set Value to Alaska</auro-button>
  <auro-button id="resetValueBtn">Reset</auro-button>
  <auro-input id="setProgrammaticValueExample" value="Press one of the buttons above!" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/value.html -->

```html
<auro-button id="setValidValueBtn">Set Value to Alaska</auro-button>
<auro-button id="resetValueBtn">Reset</auro-button>
<auro-input id="setProgrammaticValueExample" value="Press one of the buttons above!" bordered>
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/value.js -->

```js
export function programmaticallySetValue(elem) {
  // set value of auro-input element
  document.querySelector('#setValidValueBtn').addEventListener('click', () => {
      elem.value = "Alaska Airlines is the best";
  });

  // reset the value of auro-input element
  document.querySelector('#resetValueBtn').addEventListener('click', () => {
      elem.value = '';
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Max <a name="max"></a>
Use the `max` attribute to define a maximum value used during validation. The attribute will only apply when `<auro-input>` also has a `type` attribute for `numeric` or any date format.

The `max` attribute should be used in combination with the `setCustomValidityRangeOverflow` attribute to define help text used when the `max` attribute validation fails.

#### Date Example

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/maxDate.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/maxDate.html -->
  <auro-input type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/maxDate.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/maxDate.html -->

```html
<auro-input type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
  <span slot="label">Choose a date</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Numeric Example

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/maxNumeric.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/maxNumeric.html -->
  <auro-input type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
    <span slot="label">Choose a number</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/maxNumeric.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/maxNumeric.html -->

```html
<auro-input type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
  <span slot="label">Choose a number</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Min <a name="min"></a>
Use the `min` attribute to define a minimum value used during validation. The attribute will only apply when `<auro-input>` also has a `type` attribute for numeric or any date format.

The `min` attribute should be used in combination with the `setCustomValidityRangeUnderflow` attribute to define help text used when the `min` attribute validation fails.

#### Date Example

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/minDate.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/minDate.html -->
  <auro-input type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/minDate.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/minDate.html -->

```html
<auro-input type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
  <span slot="label">Choose a date</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Numeric Example

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/minNumeric.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/minNumeric.html -->
  <auro-input type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
    <span slot="label">Choose a number</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/minNumeric.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/minNumeric.html -->

```html
<auro-input type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
  <span slot="label">Choose a number</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pattern <a name="pattern"></a>
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

### Borderless <a name="borderless"></a>
Use the `borderless` attribute to remove the bottom border. This attribute is intended for use when input is wrapped in a container that already handles the different state displays, e.g. [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/borderless.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/borderless.html -->
  <auro-input borderless>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/borderless.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/borderless.html -->

```html
<auro-input borderless>
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Readonly <a name="readonly"></a>
Use the `readonly` attribute to prevent the user from editing the value of the input.

In this example, the user is able to programmatically change the value of the input by clicking the button or clear out the contents of the input.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/readonly.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/readonly.html -->
  <auro-button id="setReadonlyValueBtn">Set Value to Auro Alaska</auro-button>
  <auro-input readonly bordered id="readonlyExample">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/readonly.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/readonly.html -->

```html
<auro-button id="setReadonlyValueBtn">Set Value to Auro Alaska</auro-button>
<auro-input readonly bordered id="readonlyExample">
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/readonly.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/readonly.js -->

```js
export function setReadonlyValue() {
  const elem = document.querySelector('#readonlyExample');

  // set value of auro-input element
  document.querySelector('#setReadonlyValueBtn').addEventListener('click', () => {
      elem.value = "Auro Alaska";
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Active Label <a name="activeLabel"></a>
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

### Disable auto-validation <a name="noValidate"></a>
For use cases where the field is `required`, but live validation is not wanted, use the `noValidate` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/noValidate.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/noValidate.html -->
  <auro-input noValidate required>
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input noValidate required bordered>
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/noValidate.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/noValidate.html -->

```html
<auro-input noValidate required>
  <slot slot="label">Address</slot>
  <slot slot="helptext">Please enter your home address.</slot>
</auro-input>
<auro-input noValidate required bordered>
  <slot slot="label">Address</slot>
  <slot slot="helptext">Please enter your home address.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error support and HTML5 Validity

The `<auro-input>` component follows the HTML5 input `validity` and `validityState` [specification](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#client-side_validation).

> if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

### Required <a name="required"></a>
When present, the `required` attribute specifies that an input field must be filled out before submitting the form.

When the validity check fails the validityState equals `valueMissing`. The error message for the `valueMissing` validityState can be changed to a custom string using the `setCustomValidityValueMissing`.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/required.html -->

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

### Validation on input <a name="validateOnInput"></a>
Use the `validateOnInput` attribute to enable live validation on the `input` event. Recommended use is with setting a custom `pattern` and validation is required prior to a `blur` event.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/validateOnInput.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/validateOnInput.html -->
  <auro-input validateOnInput required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>
  <auro-input validateOnInput bordered required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/validateOnInput.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/validateOnInput.html -->

```html
<auro-input validateOnInput required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
  <span slot="label">Full Name</span>
  <span slot="helptext">Please enter your full name as it appears on the card.</span>
</auro-input>
<auro-input validateOnInput bordered required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
  <span slot="label">Full Name</span>
  <span slot="helptext">Please enter your full name as it appears on the card.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### setCustomValidity <a name="setCustomValidity"></a>
The `setCustomValidity` attribute can be used to set a custom string for all validityStates. When the component is first loaded, if this attribute is set on the element, all validityStates (except `valid`) will display the defined message.

**NOTE:** Custom strings are NOT localized. It is the responsibility of the element consumer to provide localized strings when using this element property.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/setCustomValidity.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/setCustomValidity.html -->
  <auro-input required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <auro-input bordered required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/setCustomValidity.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/setCustomValidity.html -->

```html
<auro-input required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
  <span slot="label">Full Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
<auro-input bordered required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
  <span slot="label">Full Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error <a name="error"></a>
Use the `error` attribute to apply a persistent custom error that supersedes the HTML5 validation logic.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-button id="setCustomErrorBtn">Set Custom Error</auro-button>
  <auro-button id="setCustomErrorClearBtn">Clear Custom Error</auro-button>
  <auro-input id="setCustomErrorExample" error="Initial error attribute value">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-button id="setCustomErrorBtn">Set Custom Error</auro-button>
<auro-button id="setCustomErrorClearBtn">Clear Custom Error</auro-button>
<auro-input id="setCustomErrorExample" error="Initial error attribute value">
  <span slot="label">Name</span>
  <span slot="helptext">Please enter your full name.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.js -->

```js
export function customError() {
  const elem = document.querySelector('#setCustomErrorExample');
  // set custom error
  document.querySelector('#setCustomErrorBtn').addEventListener('click', () => {
    elem.error = "Custom Error Message";
  });

  // remove custom error
  document.querySelector('#setCustomErrorClearBtn').addEventListener('click', () => {
    elem.removeAttribute('error');
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Types

### Password

Use the `type="password"` attribute for a password style input. The hide/show password feature will automatically appear once a user begins to enter data.

Default help text will be added to the input `type="password"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/password.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/password.html -->
  <auro-input type="password" required>
    <span slot="label">Password</span>
  </auro-input>
  <auro-input type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/password.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/password.html -->

```html
<auro-input type="password" required>
  <span slot="label">Password</span>
</auro-input>
<auro-input type="password" required bordered>
  <span slot="label">Password</span>
  <span slot="helptext">Please enter a secure password.</span>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Email

Use the `type="email"` attribute for a email style input. These examples illustrate the default error messaging per that browser. Content may vary.

Default help text will be added to the input `type="email"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/email.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/email.html -->
  <auro-input required type="email">
    <slot slot="label">Email address</slot>
  </auro-input>
  <auro-input bordered required type="email">
    <slot slot="label">Email address</slot>
    <slot slot="helptext">Please enter your email address.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/email.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/email.html -->

```html
<auro-input required type="email">
  <slot slot="label">Email address</slot>
</auro-input>
<auro-input bordered required type="email">
  <slot slot="label">Email address</slot>
  <slot slot="helptext">Please enter your email address.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Number

Use the `type="number"` attribute for a numeric style input and invoke a numeric virtual keyboard on handheld devices.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/number.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/number.html -->
  <auro-input required type="number">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your account number.</slot>
  </auro-input>
  <auro-input bordered required type="number">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your account number.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/number.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/number.html -->

```html
<auro-input required type="number">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your account number.</slot>
</auro-input>
<auro-input bordered required type="number">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your account number.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### maxLength <a name="maxLength"></a>
Use the `type="number"` in combination wit the `maxlength` attribute to control the length of the number entered.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/maxLength.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/maxLength.html -->
  <auro-input required type="number" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  <auro-input bordered required type="number" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/maxLength.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/maxLength.html -->

```html
<auro-input required type="number" maxlength="12">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your 12 digit account number.</slot>
</auro-input>
<auro-input bordered required type="number" maxlength="12">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your 12 digit account number.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### minLength <a name="minLength"></a>
Use the `type="number"` in combination wit the `minlength` attribute to control the length of the number entered.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/minLength.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/minLength.html -->
  <auro-input required type="number" minlength="1">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  <auro-input bordered required type="number" minlength="1">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/minLength.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/minLength.html -->

```html
<auro-input required type="number" minlength="1">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your 12 digit account number.</slot>
</auro-input>
<auro-input bordered required type="number" minlength="1">
  <slot slot="label">Account number</slot>
  <slot slot="helptext">Please enter your 12 digit account number.</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Credit Card

Use the `type="credit-card"` attribute for a credit card formatted input.

Default help text will be added to the input `type="credit-card"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/creditCard.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/creditCard.html -->
  <auro-input required type="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required type="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/creditCard.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/creditCard.html -->

```html
<auro-input required type="credit-card">
  <slot slot="label">Card number</slot>
</auro-input>
<auro-input bordered required type="credit-card">
  <slot slot="label">Card number</slot>
  <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Use the `type="credit-card"` and `icon` attributes for a credit card formatted input with credit card icon support.

**Dependency**: Please be sure to also install [auro-icon](https://auro.alaskaair.com/components/auro/icon/install) as a peer dependency.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/creditCardIcon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/creditCardIcon.html -->
  <auro-input required icon type="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required icon type="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
// Use 4147 3411 1111 1111 to see the Alaska Airline's credit card!
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/creditCardIcon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/creditCardIcon.html -->

```html
<auro-input required icon type="credit-card">
  <slot slot="label">Card number</slot>
</auro-input>
<auro-input bordered required icon type="credit-card">
  <slot slot="label">Card number</slot>
  <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Date Format

Use the `type="month-day-year"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/monthDayYear.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/monthDayYear.html -->
  <auro-input type="month-day-year" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input bordered type="month-day-year">
    <slot slot="label">Arrival date</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/monthDayYear.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/monthDayYear.html -->

```html
<auro-input type="month-day-year" required>
  <slot slot="label">Departure date</slot>
</auro-input>
<auro-input bordered type="month-day-year">
  <slot slot="label">Arrival date</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Use the `type="month-year"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/monthYear.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/monthYear.html -->
  <auro-input type="month-year">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input bordered type="month-year" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/monthYear.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/monthYear.html -->

```html
<auro-input type="month-year">
  <slot slot="label">Departure date</slot>
</auro-input>
<auro-input bordered type="month-year" required>
  <slot slot="label">Arrival date</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Use the `type="month-fullYear"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/monthFullYear.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/monthFullYear.html -->
  <auro-input type="month-fullYear">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input bordered type="month-fullYear" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/monthFullYear.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/monthFullYear.html -->

```html
<auro-input type="month-fullYear">
  <slot slot="label">Departure date</slot>
</auro-input>
<auro-input bordered type="month-fullYear" required>
  <slot slot="label">Arrival date</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Use the `type="year-month-day"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/yearMonthDay.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/yearMonthDay.html -->
  <auro-input type="year-month-day" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input bordered type="year-month-day">
    <slot slot="label">Arrival date</slot>
  </auro-input>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/yearMonthDay.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/yearMonthDay.html -->

```html
<auro-input type="year-month-day" required>
  <slot slot="label">Departure date</slot>
</auro-input>
<auro-input bordered type="year-month-day">
  <slot slot="label">Arrival date</slot>
</auro-input>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Additional Use Cases

### Swapping Values Between Inputs

Example illustrates using a JavaScript function attached to an `auro-button` component `click` event to swap the values of two `auro-input` elements. An example of this use case would be swapping the departure and arrival airports in a flight search form.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/swapValue.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/swapValue.html -->
  <auro-input id="swapExampleLeft" bordered>
    <span slot="label">Left Input</span>
  </auro-input>
  <auro-button id="swapExampleBtn">Swap Values</auro-button>
  <auro-input id="swapExampleRight" bordered>
    <span slot="label">Right Input</span>
  </auro-input>
  <style>
    #swapExampleWrapper {
      align-items: center;
    }

    #swapExampleLeft,
    #swapExampleRight {
      flex: 1;
    }

    #swapExampleBtn {
      width: unset;
      margin: 0 var(--auro-size-xs);
    }
  </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/swapValue.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/swapValue.html -->

```html
<auro-input id="swapExampleLeft" bordered>
  <span slot="label">Left Input</span>
</auro-input>
<auro-button id="swapExampleBtn">Swap Values</auro-button>
<auro-input id="swapExampleRight" bordered>
  <span slot="label">Right Input</span>
</auro-input>
<style>
  #swapExampleWrapper {
    align-items: center;
  }

  #swapExampleLeft,
  #swapExampleRight {
    flex: 1;
  }

  #swapExampleBtn {
    width: unset;
    margin: 0 var(--auro-size-xs);
  }
</style>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/swapValue.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/swapValue.js -->

```js
export function swapInputValues(selectors) {
  const btn = document.querySelector(selectors[0]);
  const inputOne = document.querySelector(selectors[1]);
  const inputTwo = document.querySelector(selectors[2]);

  btn.addEventListener('click', () => {
    const valueOne = inputOne.value;
    const valueTwo = inputTwo.value;

    inputOne.value = valueTwo;
    inputTwo.value = valueOne;
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
