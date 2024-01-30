# auro-input

## Attributes

| Attribute    | Type      | Description                    |
|--------------|-----------|--------------------------------|
| `bordered`   | `Boolean` | Applies bordered UI variant.   |
| `borderless` | `Boolean` | Applies borderless UI variant. |

## Properties

| Property                          | Attribute                         | Type      | Default                    | Description                                      |
|-----------------------------------|-----------------------------------|-----------|----------------------------|--------------------------------------------------|
| `activeLabel`                     | `activeLabel`                     | `Boolean` | false                      | If set, the label will remain fixed in the active position. |
| `autocapitalize`                  | `autocapitalize`                  | `String`  |                            | An enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user. [off/none, on/sentences, words, characters] |
| `autocorrect`                     | `autocorrect`                     | `String`  |                            | When set to `off`, stops iOS from auto correcting words when typed into a text box. |
| `customValidityTypeEmail`         | `customValidityTypeEmail`         | `string`  |                            |                                                  |
| `disabled`                        | `disabled`                        | `Boolean` | false                      | If set, disables the input.                      |
| `error`                           | `error`                           | `String`  |                            | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| `errorMessage`                    | `errorMessage`                    | `String`  |                            | Contains the help text message for the current validity error. |
| `helpText`                        | `helpText`                        | `String`  |                            | Deprecated, see `slot`.                          |
| `icon`                            | `icon`                            | `Boolean` | false                      | If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format. |
| `id`                              | `id`                              | `String`  |                            | Sets the unique ID of the element.               |
| `isValid`                         | `isValid`                         | `String`  | false                      | (DEPRECATED - Please use validity) Can be accessed to determine if the input validity. Returns true when validity has not yet been checked or validity = 'valid', all other cases return false. Not intended to be set by the consumer. |
| `label`                           | `label`                           | `String`  | "Input label is undefined" | Deprecated, see `slot`.                          |
| `lang`                            | `lang`                            | `String`  |                            | defines the language of an element.              |
| `max`                             | `max`                             | `String`  | "undefined"                | The maximum value allowed. This only applies for inputs with a type of `numeric` and all date formats. |
| `maxLength`                       | `maxLength`                       | `Number`  | "undefined"                | The maximum number of characters the user can enter into the text input. This must be an integer value `0` or higher. |
| `min`                             | `min`                             | `String`  | "undefined"                | The minimum value allowed. This only applies for inputs with a type of `numeric` and all date formats. |
| `minLength`                       | `minLength`                       | `Number`  | "undefined"                | The minimum number of characters the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. |
| `name`                            | `name`                            | `String`  |                            | Populates the `name` attribute on the input.     |
| `noValidate`                      | `noValidate`                      | `Boolean` | false                      | If set, disables auto-validation on blur.        |
| `pattern`                         | `pattern`                         | `String`  |                            | Specifies a regular expression the form control's value should match. |
| `placeholder`                     | `placeholder`                     | `String`  |                            | Define custom placeholder text, only supported by date input formats. |
| `readonly`                        | `readonly`                        | `Boolean` |                            | Makes the input read-only, but can be set programmatically. |
| `ready`                           | `ready`                           | `Boolean` | false                      | When false the component API should not be called. |
| `required`                        | `required`                        | `Boolean` | false                      | Populates the `required` attribute on the input. Used for client-side validation. |
| `setCustomValidity`               | `setCustomValidity`               | `String`  |                            | Sets a custom help text message to display for all validityStates. |
| `setCustomValidityBadInput`       | `setCustomValidityBadInput`       | `String`  |                            | Custom help text message to display when validity = `badInput`. |
| `setCustomValidityCustomError`    | `setCustomValidityCustomError`    | `String`  |                            | Custom help text message to display when validity = `customError`. |
| `setCustomValidityForType`        | `setCustomValidityForType`        | `String`  | "undefined"                | Custom help text message to display for the declared element `type` and type validity fails. |
| `setCustomValidityRangeOverflow`  | `setCustomValidityRangeOverflow`  | `String`  |                            | Custom help text message to display when validity = `rangeOverflow`. |
| `setCustomValidityRangeUnderflow` | `setCustomValidityRangeUnderflow` | `String`  |                            | Custom help text message to display when validity = `rangeUnderflow`. |
| `setCustomValidityTooLong`        | `setCustomValidityTooLong`        | `String`  |                            | Custom help text message to display when validity = `tooLong`. |
| `setCustomValidityTooShort`       | `setCustomValidityTooShort`       | `String`  |                            | Custom help text message to display when validity = `tooShort`. |
| `setCustomValidityValueMissing`   | `setCustomValidityValueMissing`   | `String`  |                            | Custom help text message to display when validity = `valueMissing`. |
| `spellcheck`                      | `spellcheck`                      | `String`  |                            | An enumerated attribute defines whether the element may be checked for spelling errors. [true, false]. When set to `false` the attribute `autocorrect` is set to `off` and `autocapitalize` is set to `none`. |
| `type`                            | `type`                            | `String`  |                            | Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`  or `text`. If given value is not allowed or set, defaults to `text`. |
| `validateOnInput`                 | `validateOnInput`                 | `Boolean` |                            | Sets validation mode to re-eval with each input. |
| `validity`                        | `validity`                        | `String`  |                            | Specifies the `validityState` this element is in. |
| `value`                           | `value`                           | `String`  |                            | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Methods

| Method     | Type       | Description                                   |
|------------|------------|-----------------------------------------------|
| `validate` | `(): void` | Determines the validity state of the element. |

## Events

| Event                      | Type                                             | Description                                      |
|----------------------------|--------------------------------------------------|--------------------------------------------------|
| `auroInput-helpText`       | `CustomEvent<{ message: any; }>`                 | Notifies that the helpText message has changed.  |
| `auroInput-ready`          | `CustomEvent<any>`                               | Notifies that the component has finished initializing. |
| `auroInput-validated`      | `CustomEvent<{ validity: string \| undefined; }>` | Notifies that the `validity` value has changed.  |
| `auroInput-validityChange` | `CustomEvent<any>`                               |                                                  |
| `input`                    |                                                  | Event fires when the value of an `auro-input` has been changed. |

## Slots

| Name       | Description                                   |
|------------|-----------------------------------------------|
| `helptext` | Sets the help text displayed below the input. |
| `label`    | Sets the label text for the input.            |

## CSS Shadow Parts

| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| `accentIcon`    | Use for customizing the style of the accentIcon element (e.g. credit card icon, calendar icon) |
| `helpText`      | Use for customizing the style of the helpText element |
| `iconContainer` | Use for customizing the style of the iconContainer (e.g. X icon for clearing input value) |
| `label`         | Use for customizing the style of the label element |
