// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */
/* eslint no-magic-numbers: ["error", { "ignore": [0] }] */
/* eslint-disable max-statements */

import { LitElement, css, html } from "lit-element";

import styleCss from "./style-css.js";
import "focus-visible/dist/focus-visible.min.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-sm_es6.js';
import viewPassword from '@alaskaairux/icons/dist/icons/interface/view-password_es6.js';
import hidePassword from '@alaskaairux/icons/dist/icons/interface/hide-password_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import Cleave from 'cleave.js';

/**
 * Auro-input provides users a way to enter data into a text field.
 *
 * @attr {String} customValidationMessage - Overrides the browser validation message when the input is invalid.
 * @attr {String} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {String} helpText - Deprecated, see `slot`.
 * @attr {String} id - Sets the unique ID of the element.
 * @attr {String} label - Deprecated, see `slot`.
 * @attr {String} name - Populates the `name` attribute on the input.
 * @attr {String} type - Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`  or `text`. If given value is not allowed or set, defaults to `text`.
 * @attr {String} value - Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input.
 * @attr {String} placeholder - Define custom placeholder text, only supported by date input formats.
 * @attr {Boolean} icon - If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format.
 * @attr {Boolean} bordered - Applies bordered UI variant.
 * @attr {Boolean} borderless - Applies borderless UI variant.
 * @attr {Boolean} disabled - If set, disables the input.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} isValid - Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @slot helptext - Sets the help text displayed below the input.
 * @slot label - Sets the label text for the input.
 * @event input - Event fires when the value of an `auro-input` has been changed.
 */

export default class BaseInput extends LitElement {

  constructor() {
    super();

    const idLength = 36;
    const idSubstrEnd = 8;
    const idSubstrStart = 2;

    /**
     * @private
     */
    this.closeSvg = this.getIconAsHtml(closelg);

    /**
     * @private
     */
    this.alertSvg = this.getIconAsHtml(alert);

    /**
     * @private
     */
    this.hidePassword = this.getIconAsHtml(hidePassword);

    /**
     * @private
     */
    this.viewPassword = this.getIconAsHtml(viewPassword);

    /**
     * @private
     */
    this.inputIconName = undefined;

    /**
     * @private
     */
    this.maxLength = undefined;

    /**
     * @private
     */
    this.numericKeyboard = false;

    /**
     * @private
     */
    this.showPassword = false;

    /**
     * @private
     */
    this.localContent = {
      'email': 'Please enter a valid email address (name@domain.com).',
      'password': 'Valid passwords must consist of at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.',
      'creditcard': 'Please enter a valid credit card number.',
    };

    /**
     * @private
     */
    this.allowedInputTypes = [
      "text",
      "email",
      "password",
      "credit-card",
      "month-day-year",
      "year-month-day",
      "month-year"
    ];

    /**
     * Credit Card is not included as this caused cursor placement issues.
     * The Safari issue.
     * @private
     */
    this.setSelectionInputTypes = [
      "text",
      "password",
      "email",
    ];

    /**
     * @private
     */
    this.uniqueId = Math.random().
      toString(idLength).
      substring(idSubstrStart, idSubstrEnd);

    this.icon = false;
    this.disabled = false;
    this.isValid = true;
    this.required = false;
    this.noValidate = false;
    this.placeholder = '';
    this.label = 'Input label is undefined';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      error:                   { type: String },
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      type:                    { type: String },
      value:                   { type: String },
      icon:                    { type: Boolean },
      disabled:                { type: Boolean },
      isValid:                 { type: Boolean },
      required:                { type: Boolean },
      noValidate:              { type: Boolean },
      helpText:                { type: String },
      placeholder:             { type: String },
      showPassword:            { state: true },

      /**
       * @private
       */
      customValidationMessage: { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.isValid = !this.error;

    // Process auto-formatting if defined for CleaveJS
    if (this.type) {
      let config = null;

      // Set config for credit card
      switch (this.type) {
        case 'credit-card':
          config = {
            creditCard: true
          };

          this.numericKeyboard = true;

          break;
          // add additional supported formats and their config JSON here

        case 'month-day-year':
          config = {
            date: true,
            delimiter: '/',
            datePattern: [
              'm',
              'd',
              'Y'
            ]
          };

          this.numericKeyboard = true;

          break;

        case 'year-month-day':
          config = {
            date: true,
            delimiter: '/',
            datePattern: [
              'Y',
              'm',
              'd'
            ]
          };

          this.numericKeyboard = true;

          break;

        case 'month-year':
          config = {
            date: true,
            datePattern: [
              'm',
              'y'
            ]
          };

          this.numericKeyboard = true;

          break;

        case 'month-fullYear':
          config = {
            date: true,
            datePattern: [
              'm',
              'Y'
            ]
          };

          this.numericKeyboard = true;

          break;

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

  firstUpdated() {
    this.inputElement = this.renderRoot.querySelector('input');
    this.labelElement = this.shadowRoot.querySelector('label');
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
   * Function to set element focus.
   * @private
   * @return {void}
   */
  focus() {
    this.inputElement.focus();
  }

  /**
   * Required to convert SVG icons from data to HTML string.
   * @private
   * @param {string} icon HTML string for requested icon.
   * @returns {object} Appended HTML for SVG.
   */
  getIconAsHtml(icon) {
    const dom = new DOMParser().parseFromString(icon.svg, 'text/html');

    return dom.body.firstChild;
  }

  /**
   * Sets undefined value to empty string.
   * @private
   * @returns {string} Value or empty string.
   */
  initializeValue() {
    if (this.value === undefined) {
      this.value = '';

      return '';
    }

    return this.value;
  }

  /**
   * Handles event of clearing input content by clicking the X icon.
   * @private
   * @return {void}
   */
  handleClickClear() {
    let click = null;

    this.inputElement.value = "";
    this.value = "";
    this.labelElement.classList.remove('inputElement-label--sticky');
    this.focus();

    click = new Event('input', {
      bubbles: true,
      composed: true,
    });

    if (!this.noValidate) {
      this.validate();
    }

    // Dispatched event to alert outside shadow DOM context of event firing.
    this.dispatchEvent(click);
  }

  /**
   * @private
   * @return {void}
   */
  handleInput() {
    // Prevent non-numeric characters from being entered on credit card fields.
    if (this.type === 'credit-card') {
      this.inputElement.value = this.inputElement.value.replace(/[\D]/gu, '');
    }

    // Sets value property to value of element value (el.value).
    this.value = this.inputElement.value;

    // Validation on blur.
    if (this.hasBlurred) {
      this.validate();
    }

    // Prevents cursor jumping in Safari.
    const { selectionStart } = this.inputElement;

    if (this.setSelectionInputTypes.includes(this.type)) {
      this.updateComplete.then(() => {
        try {
          this.inputElement.setSelectionRange(selectionStart, selectionStart);
        } catch (error) {
          // do nothing
        }
      });
    }
  }

  /**
   * Function to support @blur event.
   * @private
   * @return {void}
   */
  handleBlur() {
    this.hasBlurred = true;
    this.inputElement.scrollLeft = 100;

    this.validate();
  }

  /**
   * Validates content of the input element based on HTML spec.
   * @private
   * @return {void}
   */
  validate() {
    if (this.error && this.error.length > 0) {
      this.isValid = false;

      return;
    }

    this.isValid = this.noValidate ? true : this.inputElement.checkValidity();
    this.internalError = this.isValid ? null : this.inputElement.validationMessage;
  }

  /**
   * Validates against list of supported this.allowedInputTypes; return type=text if invalid request.
   * @private
   * @param {string} type Value entered into component prop.
   * @returns {string} Iterates over allowed types array.
   */
  getInputType(type) {
    if (this.allowedInputTypes.includes(type)) {
      return type;
    }

    return "text";
  }

  /**
   * Determines default help text string from this.localContent.
   * @private
   * @param {string} type Value entered into component prop.
   * @returns {string} Evaluates pre-determined help text.
   */
  getHelpText(type) {
    if (type === 'password') {
      this.helpText = this.localContent.password;
    } else if (type === 'email') {
      this.helpText = this.localContent.email;
    } else if (type === 'credit-card') {
      this.helpText = this.localContent.creditcard;
    } else {
      this.helpText = '';
    }

    return this.helpText;
  }

  /**
   * Return appropriate error message.
   * @private
   * @returns {string} Error string.
   */
  getErrorMessage() {
    if (this.error) {
      return this.error;
    }
    if (this.customValidationMessage) {
      return this.customValidationMessage;
    }

    return this.internalError;
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
   * @returns {string} Function for managing the display of the show-password icon.
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
   * Support @keyup event.
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

  /**
   * Support placeholder text.
   * @private
   * @returns {string}
   */
  getPlaceholder() {
    if (this.type === 'month-day-year') {
      return !this.placeholder ? 'MM/DD/YYYY' : this.placeholder;
    } else if (this.type === 'month-year') {
      return !this.placeholder ? 'MM/YY' : this.placeholder;
    } else if (this.type === 'month-fullYear') {
      return !this.placeholder ? 'MM/YYYY' : this.placeholder;
    } else if (this.type === 'year-month-day') {
      return !this.placeholder ? 'YYYY/MM/DD' : this.placeholder;
    }

    return '';
  }

  /**
   * Defines placement of input icon based on type, used with classMap.
   * @private
   * @returns {boolean}
   */
  defineInputIcon() {
    if (this.icon && this.type === 'credit-card') {
      return true;
    } else if (this.type === 'month-day-year') {
      return true;
    } else if (this.type === 'month-year') {
      return true;
    } else if (this.type === 'year-month-day') {
      return true;
    }

    return false;
  }

  /**
   * Defines padding of input label based on type, used with classMap.
   * @private
   * @returns {boolean}
   */
  defineLabelPadding() {
    if (this.icon && this.type === 'credit-card' && (this.value === "" || this.value === undefined)) {
      return true;
    } else if (this.type === 'month-day-year') {
      return true;
    } else if (this.type === 'month-year') {
      return true;
    } else if (this.type === 'year-month-day') {
      return true;
    }

    return false;
  }

  // Functions specific to Credit Card component support
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  /**
   * Function to support credit-card feature type.
   * @private
   * @returns {void}
   */
  processCreditCard() {
    const card = this.matchInputValueToCreditCard();

    this.maxLength = card.formatLength;

    this.customValidationMessage = card.customValidationMessage;

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
}
