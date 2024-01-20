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

Use the `auro-input` custom element to create basic single-line text fields. Supports type `text`, `password`, and `email` with validation, required input, error states and a secondary `bordered` theme. Use the slots `label` and `helptext` for additional content support.

## Default component

The default component supports the basic input `type="text"` structure. The `(optional)` label is provided to instruct the user that their input is not required.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo1"></auro-input>
  <auro-input id="demo2" bordered></auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  /* For accessibility, always be sure to address the ID attribute  */
  <auro-input id="demo1"></auro-input>
  <auro-input id="demo2" bordered></auro-input>
  ```
</auro-accordion>

### Label

Use the `label` slot to add content to the input label. Use the `helptext` slot to add content under the input to assist the user with the type of input required. There is no default help text for the default `type="text"`.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo3">
    <span slot="label">Name</span>
  </auro-input>
  <auro-input id="demo4" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo3">
    <span slot="label">Name</span>
  </auro-input>

  <auro-input id="demo4" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

### Placeholder

Use the `placeholder` attribute to add a custom placeholder message within the element.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo50" required placeholder="John Doe">
    <span slot="label">Full name</span>
  </auro-input>
  <auro-input id="demo51" required bordered placeholder="John Doe">
    <span slot="label">Full name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo50" required placeholder="John Doe">
    <span slot="label">Full name</span>
  </auro-input>

  <auro-input id="demo51" required bordered placeholder="John Doe">
    <span slot="label">Full name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

### Value

Use the `value` attribute to preset the value of the element.

Note: Setting the `value` to `undefined` will also reset the element.

<auro-button id="setValidValueBtn">Set Value to Alaska</auro-button>
<auro-button id="resetValueBtn">Reset</auro-button>

<div class="exampleWrapper">
  <auro-input id="setProgrammaticValueExample" value="Press one of the buttons above!" bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

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

  ```html
  <div class="exampleWrapper">
    <auro-input id="setProgrammaticValueExample">
      <span slot="label">Name</span>
      <span slot="helptext">Please enter your full name.</span>
    </auro-input>
  </div>
  ```
</auro-accordion>

### max

Use the `max` attribute to define a maximum value used during validation. The attribute will only apply when `auro-input` also has a `type` attribute for `numeric` or any date format.

The `max` attribute should be used in combination with the `setCustomValidityRangeOverflow` attribute to define help text used when the `max` attribute validation fails.

#### Date Example

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demoMaxDate" type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demoMaxDate" type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
  ```
</auro-accordion>

#### Numeric Example

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demoMaxNumber" type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
    <span slot="label">Choose a number</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demoMaxNumber" type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
    <span slot="label">Choose a number</span>
  </auro-input>
  ```
</auro-accordion>

### min

Use the `min` attribute to define a minimum value used during validation. The attribute will only apply when `auro-input` also has a `type` attribute for `numeric` or any date format.

The `min` attribute should be used in combination with the `setCustomValidityRangeUnderflow` attribute to define help text used when the `min` attribute validation fails.

#### Date Example

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demoMinDate" type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demoMinDate" type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
    <span slot="label">Choose a date</span>
  </auro-input>
  ```
</auro-accordion>

#### Numeric Example

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demoMinNumber" type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
    <span slot="label">Choose a number</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demoMinNumber" type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
    <span slot="label">Choose a number</span>
  </auro-input>
  ```
</auro-accordion>

### Pattern

Use the `pattern` attribute to set custom input validation. This example also uses the `spellcheck` attribute set to `false` which in turn sets `autocorrect` to `off` and `autocapitalize` to `none`. Additionally the `maxlength` attribute sets the maximum length of characters that can be entered.

The auro-input component supports setting a custom validity message specific to the pattern validation by using the `setCustomValidityBadInput` attribute.

Be sure to review this element's API docs for all related information.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo5" pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>
  <auro-input id="demo6" bordered pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo5" pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>

  <auro-input id="demo6" bordered pattern="[a-z]{1,15}" spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
    <span slot="label">Username</span>
    <span slot="helptext">Please enter a username.</span>
  </auro-input>
  ```
</auro-accordion>

### Borderless

Use the `borderless` attribute to remove the bottom border. This attribute is intended for use when input is wrapped in a container that already handles the different state displays, e.g. [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown).

<div class="exampleWrapper exampleWrapper">
  <auro-input id="demoBorderless" borderless>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demoBorderless" borderless>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

## Error support and HTML5 Validity

The `auro-input` component follows the HTML5 input `validity` and `validityState` [specification](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#client-side_validation).

> if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

### Required

When present, the `required` attribute specifies that an input field must be filled out before submitting the form.

When the validity check fails the validityState equals `valueMissing`. The error message for the `valueMissing` validityState can be changed to a custom string using the `setCustomValidityValueMissing`.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo5" required>
    <span slot="label">Name</span>
  </auro-input>
  <auro-input id="demo6" required bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo5" required>
    <span slot="label">Name</span>
  </auro-input>

  <auro-input id="demo6" required bordered>
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

### Validation on input event

Use the `validateOnInput` attribute to enable live validation on the `input` event. Recommended use is with setting a custom `pattern` and validation is required prior to a `blur` event.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="validation1" required validateOnInput pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>
  <auro-input id="validation1" bordered validateOnInput required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="validation1" required validateOnInput pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>

  <auro-input id="validation1" bordered validateOnInput required pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidityBadInput="Full name requires two or more names with at least one space.">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name as it appears on the card.</span>
  </auro-input>
  ```
</auro-accordion>

### setCustomValidity

The `setCustomValidity` attribute can be used to set a custom string for all validityStates. When the component is first loaded, if this attribute is set on the element, all validityStates (except `valid`) will display the defined message.

**NOTE:** Custom strings are NOT localized. It is the responsibility of the element consumer to provide localized strings when using this element property.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="error10" required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <auro-input id="error20" bordered required minlength="3" setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="error10" required setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  <auro-input id="error20" bordered required setCustomValidity="Sorry, please enter your first and last name (one space required).">
    <span slot="label">Full Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

### Error Attribute

Use the `error` attribute to apply a persistent custom error that supersedes the HTML5 validation logic.

<auro-button id="setCustomErrorBtn">Set Custom Error</auro-button>
<auro-button id="setCustomErrorClearBtn">Clear Custom Error</auro-button>

<div class="exampleWrapper">
  <auro-input id="setCustomErrorExample" error="Initial error attribute value">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="error2" required bordered error="Initial error attribute value">
    <span slot="label">Name</span>
    <span slot="helptext">Please enter your full name.</span>
  </auro-input>
  ```
</auro-accordion>

## Localization support

The `auro-input` element supports the localization of all content managed within the scope of the element. This DOES NOT include any custom content placed in the `slot` element.

<auro-radio-group required horizontal>
  <span slot="legend">Use the options here to toggle between languages</span>
  <auro-radio id="radio" name="langDemo" value="en" onclick="changeLang('en')" checked>English</auro-radio>
  <auro-radio id="radio" name="langDemo" value="es" onclick="changeLang('es')">Spanish</auro-radio>
</auro-radio-group>

## Password

Use the `type="password"` attribute for a password style input. The hide/show password feature will automatically appear once a user begins to enter data.

Default help text will be added to the input `type="password"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo7" type="password" required>
    <span slot="label">Password</span>
  </auro-input>
  <auro-input id="demo8" type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo7" type="password" required>
    <span slot="label">Password</span>
  </auro-input>

  <auro-input id="demo8" type="password" required bordered>
    <span slot="label">Password</span>
    <span slot="helptext">Please enter a secure password.</span>
  </auro-input>
  ```
</auro-accordion>

## Email

Use the `type="email"` attribute for a email style input. These examples illustrate the default error messaging per that browser. Content may vary.

Default help text will be added to the input `type="email"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="email" id="demo9">
    <slot slot="label">Email address</slot>
  </auro-input>
  <auro-input bordered required type="email" id="demo10">
    <slot slot="label">Email address</slot>
    <slot slot="helptext">Please enter your email address.</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="email" id="demo9">
    <slot slot="label">Email address</slot>
  </auro-input>

  <auro-input bordered required type="email" id="demo10">
    <slot slot="label">Email address</slot>
    <slot slot="helptext">Please enter your email address.</slot>
  </auro-input>
  ```
</auro-accordion>

## Numbers

Use the `type="number"` attribute for a numeric style input and invoke a numeric virtual keyboard on handheld devices.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="number" id="demo40">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your account number.</slot>
  </auro-input>
  <auro-input bordered required type="number" id="demo41">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your account number.</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="number" id="demo40" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>

  <auro-input bordered required type="number" id="demo41">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your account number.</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="number"` in combination wit the `maxlength` attribute to control the length of the number entered.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="number" id="demo42" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  <auro-input bordered required type="number" id="demo43" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="number" id="demo42" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>

  <auro-input bordered required type="number" id="demo43" maxlength="12">
    <slot slot="label">Account number</slot>
    <slot slot="helptext">Please enter your 12 digit account number.</slot>
  </auro-input>
  ```
</auro-accordion>

## Credit Card

Use the `type="credit-card"` attribute for a credit card formatted input.

Default help text will be added to the input `type="credit-card"` if custom help text is not provided. See the example below.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required type="credit-card" id="demo11">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required type="credit-card" id="demo12">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input required type="credit-card" id="demo11">
    <slot slot="label">Card number</slot>
  </auro-input>

  <auro-input bordered required type="credit-card" id="demo12">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  ```
</auro-accordion>

Use the `type="credit-card"` and `icon` attributes for a credit card formatted input with credit card icon support.

**Dependency**: Please be sure to also install [auro-icon](https://auro.alaskaair.com/components/auro/icon/install) as a peer dependency.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input required icon type="credit-card" id="demo13">
    <slot slot="label">Card number</slot>
  </auro-input>
  <auro-input bordered required icon type="credit-card" id="demo14">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  // Use 4147 3411 1111 1111 to see the Alaska Airline's credit card!
  <auro-input required icon type="credit-card" id="demo13">
    <slot slot="label">Card number</slot>
  </auro-input>

  <auro-input bordered required icon type="credit-card" id="demo14">
    <slot slot="label">Card number</slot>
    <slot slot="helptext">Valid credit card numbers must include 16 digits (15 for Amex).</slot>
  </auro-input>
  ```
</auro-accordion>

## Date format

Use the `type="month-day-year"` attribute for a date formatted input.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo15" type="month-day-year" required>
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo16" bordered type="month-day-year">
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
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

<auro-accordion alignRight>
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

<auro-accordion alignRight>
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

<auro-accordion alignRight>
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

Use the `placeholder` attribute for a custom placeholder message.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input id="demo22" type="month-day-year" placeholder="Day / Month / Year">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo23" bordered type="month-day-year" placeholder="Numbers only" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input id="demo24" type="month-day-year" placeholder="Day / Month / Year">
    <slot slot="label">Departure date</slot>
  </auro-input>
  <auro-input id="demo25" bordered type="month-day-year" placeholder="Numbers only" required>
    <slot slot="label">Arrival date</slot>
  </auro-input>
  ```
</auro-accordion>

## Disabled

Example use cases for auro-input support the `disabled` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input disabled required id="demo23">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo24">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
</div>
<br>
<div class="exampleWrapper exampleWrapper--flex">
  <auro-input disabled required id="demo25" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo26" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>
</div>
<br>
<div class="exampleWrapper exampleWrapper--flex">
  <auro-input disabled required id="demo27" type="credit-card" icon>
    <slot slot="label">Credit Card number</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo28" type="credit-card" icon>
    <slot slot="label">Credit Card number</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input disabled required id="demo23">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo24">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>

  <auro-input disabled required id="demo25" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo26" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>

  <auro-input disabled required id="demo27" type="credit-card" icon>
    <slot slot="label">Credit Card number</slot>
  </auro-input>
  <auro-input disabled bordered required id="demo28" type="credit-card" icon>
    <slot slot="label">Credit Card number</slot>
  </auro-input>
  ```
</auro-accordion>

## activeLabel

Example use cases for auro-input support the `activeLabel` attribute. If set, the label will stay fixed in the active position.

<div class="exampleWrapper">
  <auro-input activeLabel bordered id="demoActiveLabel">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
</div>
<br>
<div class="exampleWrapper">
  <auro-input bordered activeLabel id="demoActiveLabelIcon" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input activeLabel bordered id="demoActiveLabel">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input activeLabel bordered id="demoActiveLabelIcon" type="month-day-year">
    <slot slot="label">Arrival Date</slot>
    <slot slot="helptext">Please enter your arrival date.</slot>
  </auro-input>
  ```
</auro-accordion>

## Disable auto-validation

For use cases where the field is `required`, but live validation is not wanted, use the `noValidate` attribute.

<div class="exampleWrapper exampleWrapper--flex">
  <auro-input noValidate required id="demo29">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  <auro-input noValidate required bordered id="demo30">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-input noValidate required id="demo29">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>

  <auro-input noValidate required bordered id="demo30">
    <slot slot="label">Address</slot>
    <slot slot="helptext">Please enter your home address.</slot>
  </auro-input>
  ```
</auro-accordion>

## Additional Use Case Examples

### Swapping Values Between Inputs

Example illustrates using a JavaScript function attached to an `auro-button` component `click` event to swap the values of two `auro-input` elements. An example of this use case would be swapping the departure and arrival airports in a flight search form.

<div class="exampleWrapper exampleWrapper--flex" id="swapExampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/swapValue.html) -->
<!-- The below content is automatically added from ./../apiExamples/swapValue.html -->
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

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/swapValue.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/swapValue.html -->
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
<!-- The below code snippet is automatically added from ./../apiExamples/swapValue.html -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/swapValue.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/swapValue.js -->
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
