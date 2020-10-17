# auro-input

## Properties

| Property                  | Attribute                 | Type      | Description                                      |
|---------------------------|---------------------------|-----------|--------------------------------------------------|
| `customValidationMessage` | `customValidationMessage` | `String`  | Overrides the browser validation message when the input is invalid. |
| `disabled`                | `disabled`                | `Boolean` | If set, disables the input.                      |
| `helpText`                | `helpText`                | `String`  | Sets the help text displayed below the input.    |
| `id`                      | `id`                      | `String`  | Sets the unique ID of the element.               |
| `isValid`                 | `isValid`                 | `Boolean` | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| `label`                   | `label`                   | `String`  | Sets the label text for the input.               |
| `name`                    | `name`                    | `String`  | Populates the `name` attribute on the input.     |
| `noValidate`              | `noValidate`              | `Boolean` | If set, disables auto-validation on blur.        |
| `required`                | `required`                | `Boolean` | Populates the `required` attribute on the input. Used for client-side validation. |
| `type`                    | `type`                    | `String`  | Populates the `type` attribute on the input. Allowed values are `password`, `email` or `text`. If given value is not allowed or set, defaults to `text`. |
| `value`                   | `value`                   | `String`  | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |
