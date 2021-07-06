# auro-input

## Properties

| Property                  | Attribute                 | Type      | Default | Description                                      |
|---------------------------|---------------------------|-----------|---------|--------------------------------------------------|
| `customValidationMessage` | `customValidationMessage` | `String`  |         | Overrides the browser validation message when the input is invalid. |
| `disabled`                | `disabled`                | `Boolean` | false   | If set, disables the input.                      |
| `helpText`                | `helpText`                | `String`  |         | Sets the help text displayed below the input.    |
| `icon`                    | `icon`                    | `Boolean` | false   | If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format. |
| `id`                      | `id`                      | `String`  |         | Sets the unique ID of the element.               |
| `isValid`                 | `isValid`                 | `Boolean` | true    | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| `label`                   | `label`                   | `String`  |         | Sets the label text for the input.               |
| `name`                    | `name`                    | `String`  |         | Populates the `name` attribute on the input.     |
| `noValidate`              | `noValidate`              | `Boolean` | false   | If set, disables auto-validation on blur.        |
| `required`                | `required`                | `Boolean` | false   | Populates the `required` attribute on the input. Used for client-side validation. |
| `type`                    | `type`                    | `String`  | "text"  | Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`  or `text`. If given value is not allowed or set, defaults to `text`. |
| `value`                   | `value`                   | `String`  |         | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Events

| Event   | Description                                      |
|---------|--------------------------------------------------|
| `input` | Event fires when the value of an `auro-input` has been changed. |
