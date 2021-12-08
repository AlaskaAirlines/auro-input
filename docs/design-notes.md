## Design releases

<small>v.1.1 | <auro-datetime utc="2021-11-03T00:01:00Z" month="long"></auro-datetime></small>

## Overview

Our Input has a new feature: date formatting! This will be an additional variant available in Figma. Since the date format can be customized by the developer, it can be used for flight dates, credit card expiration dates, or any other date formats.

## Features

* Added new “Date” use case variant to auro-input
* Improved component behavior for all use cases (except borderless password/credit card/date input)
    * Before: Label text in Default state became input text in a Filled state
    * After: Label text remains as label in all states

<small>v.1.0 | <auro-datetime utc="2021-11-03T00:01:00Z" month="long"></auro-datetime></small>

## Overview

The new input field style is finally here! This update features an outlined version of the input field. The previous line version will still be available for use an alternate style. The purpose of this new design was to provide a more accessible input field for users.

## Features

* Added flexibility to size of input (fluid, text wrap)
* Available properties: Border (toggle), Use Cases, States, Helper Text
* Types: Bordered, Borderless
* Use Cases:
    * Default Required (required fields are not marked differently)
    * Default Optional (optional input fields will be marked “optional”)
    * Credit Card
    * Password
* States: Default, Filled, Error, Active, Disabled