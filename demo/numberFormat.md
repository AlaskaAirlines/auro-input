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

# Credit Card and date UI support

## Type credit card

The `auro-input` element fully supports multiple credit card formats and validations when using `type="credit-card"`. This feature is enabled via two parts.

1. The [cleave.js](https://nosir.github.io/cleave.js/) credit card formatting feature
1. A locally managed [matchInputValueToCreditCard()](https://github.com/AlaskaAirlines/auro-input/blob/08b092fa6a14cdafb0dabd6e7ab5f526ad66c30c/src/base-input.js#L694) function

### Validation

The HTML specification for form validation is simple. A form field is `invalid` before it is `valid`. This means that by default, your form is invalid. If we implemented this directly we would be alerting a user's form entry is wrong before they had a chance to make it right. So Auro's opinion for a better user experience on validation is to alert the user after an action is complete.

Due to the strict nature of validating credit cards `auro-input` with `type="credit-card"` will validate on either the last `keyUp` once all numbers are entered or a `blur` event.

### Cards by brand

The first number of a credit card, known as the Major Industry identifier (MII), tells you what type of company a card is affiliated with. This could be an airline, a banking institution or a retailer. Airlines(`1`), American Express/Diners Club(`3`), Visa (`4`), Mastercard (`5`) or Discover (`6`).

To simulate a payment use test cards from the list below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required icon type="credit-card" id="demo13">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required icon type="credit-card" id="demo14">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required icon type="credit-card" id="demo13">
    <slot slot="label">Card number</slot>
  </auro-input>

  <auro-input bordered required icon type="credit-card" id="demo14">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  ```
</auro-accordion>


| Brand | Number |
|---|---|
| Airline (13/15-digit card) | 1014 55555 4321
| Alaska card | 4147 3411 1111 1111
| Visa | 4242 4242 4242 4242
| Mastercard | 	5555 5555 5555 4444
| American Express | 3782 8224631 0005
| Discover | 6011 0009 9013 9424
| Diners Club (14-digit card) | 3622 720627 1667

## Type date

Similar to how credit card formatting is supported via [cleave.js](https://nosir.github.io/cleave.js/), Auro's input element leans on a similar API. For this feature, `auro-input` has the following additional types.

1. `type="month-day-year"` for `MM/DD/YYYY`
1. `type="month-year"` for `MM/YY`
1. `type="month-fullYear"` for `MM/YYYY`
1. `type="year-month-day"` for `YYYY/MM/DD`

Use the `type="month-day-year"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo15" type="month-day-year" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo16" bordered type="month-day-year">
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo15" type="month-day-year" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo16" bordered type="month-day-year">
    <slot slot="label">Arrival date</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="month-year"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo17" type="month-year">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo18" bordered type="month-year" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo17" type="month-year">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo18" bordered type="month-year" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="month-fullYear"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo19" type="month-fullYear">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo20" bordered type="month-fullYear" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo19" type="month-fullYear">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo20" bordered type="month-fullYear" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="year-month-day"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo20" type="year-month-day" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo21" bordered type="year-month-day">
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo20" type="year-month-day" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo21" bordered type="year-month-day">
    <slot slot="label">Arrival date</slot>
  </auro-input>
  ```
</auro-accordion>
