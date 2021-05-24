// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */

import { html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BaseInput from './base-input';
import Cleave from 'cleave.js';

import creditCard from '@alaskaairux/icons/dist/icons/payment/credit-card_es6';
import creditCardAmex from '@alaskaairux/icons/dist/icons/payment/cc-amex_es6';
import creditCardDiscover from '@alaskaairux/icons/dist/icons/payment/cc-discover_es6';
import creditCardMastercard from '@alaskaairux/icons/dist/icons/payment/cc-mastercard_es6';
import creditCardVisa from '@alaskaairux/icons/dist/icons/payment/cc-visa_es6';
import creditCardAlaskaAirVisa from '@alaskaairux/icons/dist/icons/payment/cc-alaska_es6';


// build the component class
export default class AuroInput extends BaseInput {

  constructor() {
    super();

    /**
     * @private Boolean value to determine which password icon to show
     */
    this.showPassword = false;

    /**
     * @private Boolean value to determine if numeric keyboard should be show on mobile devices
     */
    this.numericKeyboard = false;

    /**
     * @private Integer used to set a maximum length on the input field
     */
    this.maxLength = undefined;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      showPassword: {state: true}
    };
  }

  /**
   * @private custom setter so we can re-validate on update
   * @param {string} value Error string
   */
  set error(value) {

    const oldVal = this._error;

    this._error = value;
    this.requestUpdate('error', oldVal).then(this.validate.bind(this));
  }

  get error() {
    return this._error;
  }

  /**
   * @private function to toggle between text or password view of input
   * @returns {string} returns string based on type
   */
  handleClickShowPassword() {
    this.showPassword = !this.showPassword;
    this.focus();
  }

  /**
   * @private function to toggle between password icons
   * @returns {string} returns HTML for SVG
   */
  togglePasswordIcon() {
    if (this.showPassword) {
      return this.hidePassword
    }

    return this.viewPassword
  }

  /**
   * @private function manage visibility of show-password icon
   * @returns {boolean} returns CSS selector
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

  /**
   * @private function for managing when to display the show-password icon
   * @returns {string} html string
   */
  showPasswordIcon() {
    if (this.type === 'password') {
      return html`
      <button
        class="iconButton passwordToggle"
        @click="${this.handleClickShowPassword}"
        tabindex="-1"
      >${this.togglePasswordIcon()}</button>`
    }

    return null
  }

  connectedCallback() {
    super.connectedCallback();

    // Process auto-formating if defined
    if (this.type) {
      let config = null;

      // Process only valid format strings
      switch (this.type) {
        case 'credit-card':
          config = {
            creditCard: true
          }

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
   * @private function to return html for credit card icon
   * @returns {string} html string
   */
  processCreditCard() {
    const card = this.matchInputValueToCreditCard();

    this.maxLength = card.formatLength;

    if (!this.noValidate) {
      this.customValidationMessage = card.customValidationMessage;
    }

    if (this.icon) {
      const svg = new DOMParser().parseFromString(card.cardIcon.svg, 'text/html').body.firstChild;

      return html`
      <div class="creditCard-icon">
        ${svg}
      </div>
      `
    }

    return html``;
  }

  /**
   * @private function returns data object for credit card matching value comparison
   * @returns {object} JSON with data for credit card formatting
   */
  matchInputValueToCreditCard() {
    const defaultCustomValidationMessage = 'Card number is not valid.',
    // eslint-disable-next-line sort-vars
    creditCardTypes = [
      {
        name: 'American Express',
        regex: /^(?<num>34|37)\d{0,9}/u,
        formatLength: 17,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: creditCardAmex
      },
      {
        name: 'Visa',
        regex: /^(?<num>4)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: creditCardVisa
      },
      {
        name: 'Master Card',
        regex: /^(?<num>5)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: creditCardMastercard
      },
      {
        name: 'Discover Card',
        regex: /^(?<num>6)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: creditCardDiscover
      },
      {
        name: 'Alaska Airlines Visa',
        regex: /^(?<num>4147\s34|4888\s93|4800\s11|4313\s51|4313\s07)\d{0,9}/u,
        formatLength: 19,
        customValidationMessage: defaultCustomValidationMessage,
        cardIcon: creditCardAlaskaAirVisa
      }
    ]

    let type = {
      name: 'Default Card',
      formatLength: 19,
      customValidationMessage: defaultCustomValidationMessage,
      cardIcon: creditCard
    };

    creditCardTypes.forEach((cardType) => {
      if (cardType.regex.exec(this.value)) {
        type = cardType;
      }
    })

    return type;
  }

  /**
   * @private function to return html for credit card icon
   * @returns {string} value for the input field after changing undefined to an empty string
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
    },
    inputClasses = {
      "creditCard": this.icon && this.type === 'credit-card',
      "error": !this.isValid,
      "inputElement": true,
      "inputElement--filled": this.value,
    },
    labelClasses = {
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

      <label for=${this.id} class="${classMap(labelClasses)}">${this.required ? this.label : `${this.label} (optional)`}</label>
      ${this.isValid
        ? html`
          <p class="inputElement-helpText" id="${this.uniqueId}">${this.helpText}</p>
        ` : html`
          <p class="inputElement-helpText error" id="${this.uniqueId}" role="alert" aria-live="assertive">${this.getErrorMessage()}</p>
        `}
      ${this.type === 'credit-card' ? this.processCreditCard() : undefined}
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
