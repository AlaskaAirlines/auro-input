# auro-input

## Attributes

| Attribute    | Type      | Description                    |
|--------------|-----------|--------------------------------|
| `bordered`   | `Boolean` | Applies bordered UI variant.   |
| `borderless` | `Boolean` | Applies borderless UI variant. |

## Properties

| Property      | Attribute     | Type      | Default                    | Description                                      |
|---------------|---------------|-----------|----------------------------|--------------------------------------------------|
| `disabled`    | `disabled`    | `Boolean` | false                      | If set, disables the input.                      |
| `error`       | `error`       | `String`  |                            | Sets a persistent error message (e.g. an error message returned from the server). |
| `helpText`    | `helpText`    | `String`  |                            | Deprecated, see `slot`.                          |
| `icon`        | `icon`        | `Boolean` | false                      | If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format. |
| `id`          | `id`          | `String`  |                            | Sets the unique ID of the element.               |
| `isValid`     | `isValid`     | `Boolean` | true                       | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| `label`       | `label`       | `String`  | "Input label is undefined" | Deprecated, see `slot`.                          |
| `name`        | `name`        | `String`  |                            | Populates the `name` attribute on the input.     |
| `noValidate`  | `noValidate`  | `Boolean` | false                      | If set, disables auto-validation on blur.        |
| `placeholder` | `placeholder` | `String`  | ""                         | Define custom placeholder text, only supported by date input formats. |
| `required`    | `required`    | `Boolean` | false                      | Populates the `required` attribute on the input. Used for client-side validation. |
| `type`        | `type`        | `String`  |                            | Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`, `month-fullYear`,  or `text`. If given value is not allowed or set, defaults to `text`. |
| `value`       | `value`       | `String`  |                            | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Events

| Event   | Description                                      |
|---------|--------------------------------------------------|
| `input` | Event fires when the value of an `auro-input` has been changed. |

## Slots

| Name       | Description                                   |
|------------|-----------------------------------------------|
| `helptext` | Sets the help text displayed below the input. |
| `label`    | Sets the label text for the input.            |
