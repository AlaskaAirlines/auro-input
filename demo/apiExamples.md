

# auro-input

## Attributes

| Attribute    | Type      | Description                    |
|--------------|-----------|--------------------------------|
| [bordered](#bordered)   | `Boolean` | Applies bordered UI variant.   |
| [borderless](#borderless) | `Boolean` | Applies borderless UI variant. |

## Properties

| Property            | Attribute           | Type      | Default                    | Description                                      |
|---------------------|---------------------|-----------|----------------------------|--------------------------------------------------|
| [autocapitalize](#autocapitalize)    | `autocapitalize`    | `String`  |                            | An enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user. [off/none, on/sentences, words, characters] |
| [autocorrect](#autocorrect)       | `autocorrect`       | `String`  |                            | When set to `off`, stops iOS from auto correcting words when typed into a text box. |
| [disabled](#disabled)          | `disabled`          | `Boolean` | false                      | If set, disables the input.                      |
| [error](#error)             | `error`             | `String`  |                            | Sets a persistent error message (e.g. an error message returned from the server). |
| [helpText](#helpText)          | `helpText`          | `String`  |                            | Deprecated, see `slot`.                          |
| [icon](#icon)              | `icon`              | `Boolean` | false                      | If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format. |
| [id](#id)                | `id`                | `String`  |                            | Sets the unique ID of the element.               |
| [isValid](#isValid)           | `isValid`           | `Boolean` | true                       | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| [label](#label)             | `label`             | `String`  | "Input label is undefined" | Deprecated, see `slot`.                          |
| [lang](#lang)              | `lang`              | `String`  |                            | defines the language of an element.              |
| [maxLength](#maxLength)         | `maxLength`         | `Number`  | "undefined"                | The maximum number of characters the user can enter into the text input. This must be an integer value `0` or higher. |
| [minLength](#minLength)         | `minLength`         | `Number`  | "undefined"                | The minimum number of characters the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. |
| input(#name)              | `name`              | `String`  |                            | Populates the `name` attribute on the input.     |
| [noValidate](#noValidate)        | `noValidate`        | `Boolean` | false                      | If set, disables auto-validation on blur.        |
| [pattern](#pattern)           | `pattern`           | `String`  |                            | Specifies a regular expression the form control's value should match. |
| [placeholder](#placeholder)       | `placeholder`       | `String`  |                            | Define custom placeholder text, only supported by date input formats. |
| [ready](#ready)             | `ready`             | `Boolean` | false                      | When false the component API should not be called. |
| [required](#required)          | `required`          | `Boolean` | false                      | Populates the `required` attribute on the input. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity) | `setCustomValidity` | `String`  |                            | Sets a custom automated validity message for the element. |
| [spellcheck](#spellcheck)        | `spellcheck`        | `String`  |                            | An enumerated attribute defines whether the element may be checked for spelling errors. [true, false]. When set to `false` the attribute `autocorrect` is set to `off` and `autocapitalize` is set to `none`. |
| [type](#type)              | `type`              | `String`  |                            | Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`  or `text`. If given value is not allowed or set, defaults to `text`. |
| [validateOnInput](#validateOnInput)   | `validateOnInput`   | `Boolean` |                            | Sets validation mode to re-eval with each input. |
| [value](#value)             | `value`             | `String`  |                            | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Events

| Event                 | Type                                 | Description                                      |
|-----------------------|--------------------------------------|--------------------------------------------------|
| `auroInput-helpText`  | `CustomEvent<{ message: string; }>`  | Notifies that the helpText value has changed.    |
| `auroInput-ready`     | `CustomEvent<any>`                   | Notifies that the component has finished initializing. |
| `auroInput-validated` | `CustomEvent<{ isValid: boolean; }>` | Notifies that the isValid value has changed.     |
| [input](#input)               |                                      | Event fires when the value of an `auro-input` has been changed. |

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

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-input id="demo"></auro-input>
      <auro-input id="demo" bordered></auro-input>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>

### Attribute Examples

#### disabled

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo" disabled></auro-input>
  <auro-input id="demo" bordered disabled></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo" disabled></auro-input>
<auro-input id="demo" bordered disabled></auro-input>
```

</auro-accordion>

#### error

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo" error="My custom error text"></auro-input>
  <auro-input id="demo" error="My custom error text" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo" error="My custom error text"></auro-input>
<auro-input id="demo" error="My custom error text" bordered></auro-input>
```

</auro-accordion>
Date formated auro-input with custom validation for restricted date range (e.g. date of birth must be within last 120 years).

<div class="exampleWrapper">
  <auro-input id="errorDateRange" type="month-day-year" bordered>
    <slot slot="label">Date of birth</slot>
  </auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="errorDateRange" type="month-day-year" bordered>
  <slot slot="label">Date of birth</slot>
</auro-input>
```

```js
let elem = document.querySelector('auro-input#errorDateRange');

elem.addEventListener('input', () => {
  console.warn(elem.value);
})

function validateDateRange() {
  console.warn('validateDateRange()');
}

validateDateRange();
```

</auro-accordion>

#### attributeName

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>

### Property Examples

#### propertyName

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>

### Method Examples

#### methodName

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>

### Event Examples

#### eventName

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>

### Slot Examples

#### slotName

Explanation and use description.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-input id="demo"></auro-input>
<auro-input id="demo" bordered></auro-input>
```

</auro-accordion>
