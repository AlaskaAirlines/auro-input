// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
/* eslint-disable complexity */
/* eslint-disable indent */

import { html } from "lit-element";
import { repeat } from 'lit-html/directives/repeat.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BaseInput from './base-input';
import Cleave from 'cleave.js';

// build the component class
export default class AuroInput extends BaseInput {

  constructor() {
    super();

    /**
     * @private
     */
    this.showPassword = false;

    /**
     * @private
     */
    this.numericKeyboard = false;

    /**
     * @private
     */
    this.maxLength = undefined;

    /**
     * @private
     */
    this.inputIconName = undefined;

    this.label = 'Input label is undefined';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      showPassword: {state: true}
    };
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('error')) {
      this.validate();
    }
  }

  /**
   * Function to support show-password feature.
   * @private
   * @returns {void}
   */
  handleClickShowPassword() {
    this.showPassword = !this.showPassword;
    this.focus();
  }

  /**
   * Supports show-password feature.
   * @private
   * @returns {string} Returns HTML for SVG, function to toggle between password icons.
   */
  togglePasswordIcon() {
    if (this.showPassword) {
      return this.hidePassword;
    }

    return this.viewPassword;
  }

  /**
   * Supports show-password feature.
   * @private
   * @returns {string} HTML string, function for managing when to display the show-password icon.
   */
  showPasswordIcon() {
    if (this.type === 'password') {
      return html`
        <button
          class="iconButton passwordToggle"
          @click="${this.handleClickShowPassword}"
          tabindex="-1"
        >${this.togglePasswordIcon()}</button>
      `;
    }

    return null;
  }

  /**
   * @private
   * @returns {void}
   */
     handleKeyUp() {
      const iconContainer = this.shadowRoot.querySelector('.iconContainer');

      this.labelElement.classList.add('inputElement-label--sticky');

      if (this.inputElement.value) {
        iconContainer.classList.add("passwordIcon--show");
      } else {
        iconContainer.classList.remove("passwordIcon--show");
      }
    }

  connectedCallback() {
    super.connectedCallback();

    // Process auto-formatting if defined
    if (this.type) {
      let config = null;

      // Process only valid format strings
      switch (this.type) {
        case 'credit-card':
          config = {
            creditCard: true
          };

          this.numericKeyboard = true;

          break;
          // add additional supported formats and their config JSON here

        default:
          // Do nothing
      }

      // initialize CleaveJS if we have a defined config for the requested format
      if (config) {
        // eslint-disable-next-line no-unused-vars
        const cleave = new Cleave(this, config);
      }
    }
  }

  /**
   * Function to support credit-card feature type.
   * @private
   * @returns {void}
   */
  processCreditCard() {
    const card = this.matchInputValueToCreditCard();

    this.maxLength = card.formatLength;

    if (!this.noValidate) {
      this.customValidationMessage = card.customValidationMessage;
    }

    if (this.icon) {
      this.inputIconName = card.cardIcon;
    }
  }

  /**
   * Function to support credit-card feature type.
   * @private
   * @returns {object} JSON with data for credit card formatting.
   */
  matchInputValueToCreditCard() {
    const defaultCustomValidationMessage = 'Please enter a valid credit card number.';

    // eslint-disable-next-line sort-vars, one-var
    const creditCardTypes = [
      {
        name: 'American Express',
        regex: /^(?<num>34|37)\d{0,9}/u,
        formatLength: 17,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: 'cc-amex'
      },
      {
        name: 'Visa',
        regex: /^(?<num>4)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: 'cc-visa'
      },
      {
        name: 'Master Card',
        regex: /^(?<num>5)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: 'cc-mastercard'
      },
      {
        name: 'Discover Card',
        regex: /^(?<num>6)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: 'cc-discover'
      },
      {
        name: 'Alaska Airlines Visa',
        regex: /^(?<num>4147\s34|4888\s93|4800\s11|4313\s51|4313\s07)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: 'cc-alaska'
      }
    ];

    let type = {
      name: 'Default Card',
      formatLength: 19,
      customValidationMessage: defaultCustomValidationMessage,
      cardIcon: 'credit-card'
    };

    creditCardTypes.forEach((cardType) => {
      if (cardType.regex.exec(this.value)) {
        type = cardType;
      }
    });

    return type;
  }

  /**
   * Function to support credit-card feature type.
   * @private
   * @returns {string} Value for the input field after changing undefined to an empty string.
   */
  initializeValue() {
    if (this.value === undefined) {
      this.value = '';

      return '';
    }

    return this.value;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const iconClasses = {
      'inputElement-icon': true,
      'alertIcon': !this.isValid
    };

    // eslint-disable-next-line one-var
    const inputClasses = {
      "creditCard": this.icon && this.type === 'credit-card',
      "error": !this.isValid,
      "inputElement": true,
      "inputElement--filled": this.value,
    };

    // eslint-disable-next-line one-var
    const labelClasses = {
      "inputElement-label": true,
      "is-disabled": this.disabled,
      "inputElement-labelIcon--no-value": this.icon && this.type === 'credit-card' && (this.value === "" || this.value === undefined)
    };

    return html`
      <input
        @input="${this.handleInput}"
        @blur="${this.handleBlur}"
        @keyup="${this.handleKeyUp}"
        class="${classMap(inputClasses)}"
        id="${this.id}"
        name="${ifDefined(this.name)}"
        type="${this.type === 'password' && this.showPassword ? 'text' : this.getInputType(this.type)}"
        pattern="${ifDefined(this.type === 'credit-card' && !this.noValidate && this.maxLength ? `.{${this.maxLength},${this.maxLength}}` : undefined)}"
        maxlength="${ifDefined(this.maxLength ? this.maxLength : undefined)}"
        inputmode="${ifDefined(this.numericKeyboard ? `numeric` : undefined)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        .value="${this.initializeValue()}"
        aria-describedby="${this.uniqueId}"
        aria-invalid="${!this.isValid}"
      />

      <!-- Input label template -->
      <label for=${this.id} class="${classMap(labelClasses)}">
        <slot name="label">
          ${this.label}
        </slot>
        ${this.required ? '' : ` (optional)`}
      </label>

      <!-- Help text and error message template -->
      ${this.isValid
        ? html`
          <p class="inputElement-helpText" id="${this.uniqueId}">
            <slot name="helptext">${this.getHelpText(this.type)}</slot>
          </p>`
        : html`
          <p class="inputElement-helpText error" id="${this.uniqueId}" role="alert" aria-live="assertive">
            ${this.getErrorMessage()}
          </p>`
      }

      ${this.type === 'credit-card' ? this.processCreditCard() : undefined}

      <!-- The repeat() method is used below in order to force auro-icon to re-render when the name value is updated.
           This should be cleaned up when auro-icon issue #31 is resolved. -->
      ${this.inputIconName
        ? repeat([this.inputIconName], (val) => val, (name) => html`
          <auro-icon class="creditCard-icon" category="payment" name="${name}"></auro-icon>
        `) : undefined
      }

      <div class="iconContainer">
        <div class="${classMap(iconClasses)}">
          ${this.showPasswordIcon()}
          ${this.isValid
            ? html`
              <button
                @click="${this.handleClickClear}"
                aria-hidden="true"
                class="inputElement-icon iconButton"
                tabindex="-1">
                ${this.closeSvg}
              </button>
            ` : html`${this.alertSvg}`}
        </div>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-input")) {
  customElements.define("auro-input", AuroInput);
}
