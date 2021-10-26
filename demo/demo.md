# Input

Use the `auro-input` custom element to create basic single-line text fields. Supports type `text`, `password`, and `email` with validation, required input, error states and a secondary `bordered` theme. Use the slots `label` and `helptext` for additional content support.

## Default component

The default component supports the basic input `type="text"` structure. The `(optional)` label is provided to instruct the user that their input is not required.

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

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  /* For accessibility, always be sure to address the ID attribute  */
  <auro-input id="demo"></auro-input>
  <auro-input id="demo" bordered></auro-input>
  ```
</auro-accordion>

Use the `label` slot to add content to the input label. Use the `helptext` slot to add content under the input to assist the user with the type of input required. There is no default help text for the default `type="text"`.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="full-name">
    <span slot="label">Name</span>
  </auro-input>
  <auro-input id="full-name" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="full-name">
    <span slot="label">Name</span>
  </auro-input>

  <auro-input id="full-name" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

Use the `required` attribute to enable automatic input validation.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="full-name" required>
    <span slot="label">Name</span>
  </auro-input>
  <auro-input id="full-name" required bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="full-name" required>
    <span slot="label">Name</span>
  </auro-input>

  <auro-input id="full-name" required bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

Use the `error` attribute to communicate an issue with the input to the user. A default message of "_Please fill out this field._" will be used if a custom message is not passed into the attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="full-name" required error>
    <span slot="label">Name</span>
  </auro-input>
  <auro-input id="full-name" required bordered error="Please enter your full name.">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="full-name" required error>
    <span slot="label">Name</span>
  </auro-input>

  <auro-input id="full-name" required bordered error="Please enter your full name.">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

## Password

Use the `type="password"` attribute for a password style input. The hide/show password feature will automatically appear once a user begins to enter data.

Default help text will be added to the input `type="password"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="full-name" type="password" required>
    <span slot="label">Password</span>
  </auro-input>
  <auro-input id="full-name" type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="full-name" type="password" required>
    <span slot="label">Password</span>
  </auro-input>

  <auro-input id="full-name" type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>
  ```
</auro-accordion>

## Email

Use the `type="email"` attribute for a email style input. These examples illustrate the default error messaging per that browser. Content may vary.

Default help text will be added to the input `type="email"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="email" id="email-address">
    <slot slot="label">Email address</slot>
  </auro-input>
  <auro-input bordered required type="email" id="email-address">
    <slot slot="label">Email address</slot>
    <slot slot="helptext">Please enter your email address.</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="email" id="email-address">
    <slot slot="label">Email address</slot>
  </auro-input>

  <auro-input bordered required type="email" id="email-address">
    <slot slot="label">Email address</slot>
    <slot slot="helptext">Please enter your email address.</slot>
  </auro-input>
  ```
</auro-accordion>

## Credit Card

Use the `type="credit-card"` attribute for a credit card formatted input.

Default help text will be added to the input `type="credit-card"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>

  <auro-input bordered required type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="credit-card"` and `icon` attributes for a credit card formatted input with credit card icon support.

**Dependency**: Please be sure to also install [auro-icon](https://auro.alaskaair.com/components/auro/icon/install) as a peer dependency.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required icon type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required icon type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  // Use 4147 3411 1111 1111 to see the Alaska Airline's credit card!
  <auro-input required icon type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
  </auro-input>

  <auro-input bordered required icon type="credit-card" id="credit-card">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  ```
</auro-accordion>

## Disabled

Example use cases for auro-input support the `disabled` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input
    disabled
    required
    label="Address"
    id="address"
    helptext="Please enter your home address.">
  </auro-input>
  <auro-input
    disabled
    required
    bordered
    label="Address"
    id="address"
    helptext="Please enter your home address.">
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
    helptext="Please enter your home address.">
  </auro-input>

  <auro-input
    disabled
    required
    bordered
    label="Address"
    id="address"
    helptext="Please enter your home address.">
  </auro-input>
  ```
</auro-accordion>

## Disable auto-validation

For use cases where the field is `required`, but live validation is not wanted, use the `noValidate` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input
    noValidate
    required
    label="Address"
    id="address"
    helptext="Please enter your home address.">
  </auro-input>
  <auro-input
    noValidate
    required
    bordered
    label="Address"
    id="address"
    helptext="Please enter your home address.">
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
    helptext="Please enter your home address.">
  </auro-input>

  <auro-input
    noValidate
    required
    bordered
    label="Address"
    id="address"
    helptext="Please enter your home address.">
  </auro-input>
  ```
</auro-accordion>
