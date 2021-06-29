# auro-input

Use the `auro-input` custom element to create basic single-line text fields. Supports type `text`, `password`, and `email` with validation, required input and error states.

## Default component

The default component supports the basic input `type="text"` structure. The `(optional)` label is provided to instruct the user that their input is not required.

<div class="exampleWrapper">
  <auro-input id="demo"></auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  /* For accessibility, always be sure to address the ID attribute  */
  <auro-input id="demo"></auro-input>
  ```
</auro-accordion>

Use the `label` attribute to add content to the input label. Use the `helptext` attribute to add content under the input to assist the user with the type of input required.

<div class="exampleWrapper">
  <auro-input label="Name" id="full-name" helptext="Please enter your full name"></auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input label="Name" id="full-name" helptext="Please enter your full name"></auro-input>
  ```
</auro-accordion>

Use the `required` attribute to enable input validation.

<div class="exampleWrapper">
  <auro-input
    required
    label="Name"
    id="full-name"
    helptext="Please enter your full name">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    required
    label="Name"
    id="full-name"
    helptext="Please enter your full name">
  </auro-input>
  ```
</auro-accordion>

The default error return of `Please fill out this field` will be used if a custom error message is not added to the element on blur.

<div class="exampleWrapper">
  <auro-input
    required
    label="Name"
    id="full-name"
    helptext="Please enter your full name"
    error="Please enter your full name">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    required
    label="Name"
    id="full-name"
    helptext="Please enter your full name"
    error="Please enter your full name">
  </auro-input>
  ```
</auro-accordion>

## Password

Use the `type="password"` attribute for a password style input.

<div class="exampleWrapper">
  <auro-input
    required
    type="password"
    id="password"
    label="Password"
    helptext="Please enter a secure password.">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    required
    type="password"
    id="password"
    label="Password"
    helptext="Please enter a secure password.">
  </auro-input>
  ```
</auro-accordion>

## Email

Use the `type="email"` attribute for a email style input.

<div class="exampleWrapper">
  <auro-input
    required
    type="email"
    label="Email address"
    id="email-address"
    helptext="Please enter your email address">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    required
    type="email"
    label="Email address"
    id="email-address"
    helptext="Please enter your email address">
  </auro-input>
  ```
</auro-accordion>

## Credit Card

Use the `type="credit-card"` attribute for a credit card formatted input.

<div class="exampleWrapper">
  <auro-input
    type="credit-card"
    label="Card number"
    id="credit-card"
    helptext="Please enter your credit card number"
    required>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    type="credit-card"
    label="Card number"
    id="credit-card"
    helptext="Please enter your credit card number"
    required>
  </auro-input>
  ```
</auro-accordion>

Use the `type="credit-card"` and `icon` attributes for a credit card formatted input with credit card icon support.

<div class="exampleWrapper">
  <auro-input
    type="credit-card"
    label="Card number"
    id="credit-card"
    helptext="Please enter your credit card number"
    required
    icon>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  // Use 4147 3411 1111 1111 to see the Alaska Airline's credit card!
  <auro-input
    type="credit-card"
    label="Card number"
    id="credit-card"
    helptext="Please enter your credit card number"
    required
    icon>
  </auro-input>
  ```
</auro-accordion>

## Disabled

All use cases for auro-input support the `disabled` attribute.

<div class="exampleWrapper">
  <auro-input
    disabled
    required
    label="Address"
    id="address"
    helptext="Please enter your home address">
  </auro-input>

  <auro-input
    disabled
    required
    type="email"
    id="email-address"
    label="Email address"
    helptext="Please enter your email address">
  </auro-input>

  <auro-input
    disabled
    required
    type="password"
    id="password"
    label="Password"
    helptext="Please enter a secure password">
  </auro-input>

  <auro-input
    disabled
    required
    type="credit-card"
    id="credit-card"
    label="Card number"
    helptext="Please enter your credit card number">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    disabled
    required
    label="Address"
    id="address"
    helptext="Please enter your home address">
  </auro-input>

  <auro-input
    disabled
    required
    type="email"
    id="email-address"
    label="Email address"
    helptext="Please enter your email address">
  </auro-input>

  <auro-input
    disabled
    required
    type="password"
    id="password"
    label="Password"
    helptext="Please enter a secure password">
  </auro-input>

  <auro-input
    disabled
    required
    type="credit-card"
    id="credit-card"
    label="Card number"
    helptext="Please enter your credit card number">
  </auro-input>
  ```
</auro-accordion>

## Disable auto-validation

For use cases where the field is `required`, but live validation is not wanted, use the `noValidate` attribute.

<div class="exampleWrapper">
  <auro-input
    noValidate
    required
    label="Address"
    id="address"
    helptext="Please enter your home address">
  </auro-input>

  <auro-input
    noValidate
    required
    type="email"
    id="email-address"
    label="Email address"
    helptext="Please enter your email address">
  </auro-input>

  <auro-input
    noValidate
    required
    type="credit-card"
    id="credit-card"
    label="Card number"
    helptext="Please enter your credit card number">
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input
    noValidate
    required
    label="Address"
    id="address"
    helptext="Please enter your home address">
  </auro-input>

  <auro-input
    noValidate
    required
    type="email"
    id="email-address"
    label="Email address"
    helptext="Please enter your email address">
  </auro-input>

  <auro-input
    noValidate
    required
    type="credit-card"
    id="credit-card"
    label="Card number"
    helptext="Please enter your credit card number">
  </auro-input>
  ```
</auro-accordion>
