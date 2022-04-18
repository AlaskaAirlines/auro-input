// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */
/* eslint no-magic-numbers: ["error", { "ignore": [0] }] */
/* eslint-disable max-statements */

import { LitElement, css, html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';

import styleCss from "./style-css.js";
import "focus-visible/dist/focus-visible.min.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-sm_es6.js';
import viewPassword from '@alaskaairux/icons/dist/icons/interface/view-password_es6.js';
import hidePassword from '@alaskaairux/icons/dist/icons/interface/hide-password_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import Cleave from 'cleave.js';
import i18n, {notifyOnLangChange, stopNotifyingOnLangChange} from './i18n.js';

/**
 * Auro-input provides users a way to enter data into a text field.
 *
 * @attr {String} setCustomValidity - Sets a custom automated validity message for the element.
 * @attr {Boolean} validateOnInput - Sets validation mode to re-eval with each input.
 * @attr {String} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {String} helpText - Deprecated, see `slot`.
 * @attr {String} id - Sets the unique ID of the element.
 * @attr {String} label - Deprecated, see `slot`.
 * @attr {String} name - Populates the `name` attribute on the input.
 * @attr {String} type - Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`, `month-day-year`, `month-year`, `year-month-day`  or `text`. If given value is not allowed or set, defaults to `text`.
 * @attr {String} value - Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input.
 * @attr {String} placeholder - Define custom placeholder text, only supported by date input formats.
 * @attr {String} lang - defines the language of an element.
 * @attr {Boolean} icon - If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format.
 * @attr {Boolean} bordered - Applies bordered UI variant.
 * @attr {Boolean} borderless - Applies borderless UI variant.
 * @attr {Boolean} disabled - If set, disables the input.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} isValid - Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @attr {Number} maxLength - The maximum number of characters the user can enter into the text input. This must be an integer value `0` or higher.
 * @attr {Number} minLength - The minimum number of characters the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`.
 * @attr {String} spellcheck - An enumerated attribute defines whether the element may be checked for spelling errors. [true, false]. When set to `false` the attribute `autocorrect` is set to `off` and `autocapitalize` is set to `none`.
 * @attr {String} autocorrect - When set to `off`, stops iOS from auto correcting words when typed into a text box.
 * @attr {String} autocapitalize - An enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user. [off/none, on/sentences, words, characters]
 * @attr {String} pattern - Specifies a regular expression the form control's value should match.
 * @slot helptext - Sets the help text displayed below the input.
 * @slot label - Sets the label text for the input.
 * @csspart label - Use for customizing the style of the label element
 * @csspart helpText - Use for customizing the style of the helpText element
 * @csspart accentIcon - Use for customizing the style of the accentIcon element (e.g. credit card icon, calendar icon)
 * @csspart iconContainer - Use for customizing the style of the iconContainer (e.g. X icon for clearing input value)
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
    this.inputmode = '';

    /**
     * @private
     */
    this.showPassword = false;

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
    this.maxLength = undefined;
    this.minLength = undefined;
    this.label = 'Input label is undefined';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      error:                   { type: String },
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      type:                    { type: String,
        reflect: true },
      value:                   { type: String },
      lang:                    { type: String },
      pattern:                 { type: String },
      icon:                    { type: Boolean },
      disabled:                { type: Boolean },
      isValid:                 { type: Boolean },
      required:                { type: Boolean },
      noValidate:              { type: Boolean },
      helpText:                { type: String },
      spellcheck:              { type: String },
      autocorrect:             { type: String },
      autocapitalize:          { type: String },
      placeholder:             { type: String },
      maxLength:               { type: Number },
      minLength:               { type: Number },
      showPassword:            { state: true },
      setCustomValidity:       { type: String },
      validateOnInput:         { type: Boolean }
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

    notifyOnLangChange(this);

    // Process auto-formatting if defined for CleaveJS
    if (this.type) {
      let config = null;

      // Set config for credit card
      switch (this.type) {
        case 'number':
          config = {
            numeral: true,
            delimiter: ''
          };

          this.inputmode = 'numeric';

          break;

        case 'credit-card':
          config = {
            creditCard: true
          };

          this.inputmode = 'numeric';

          break;

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

          this.inputmode = 'numeric';

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

          this.inputmode = 'numeric';

          break;

        case 'month-year':
          config = {
            date: true,
            datePattern: [
              'm',
              'y'
            ]
          };

          this.inputmode = 'numeric';

          break;

        case 'month-fullYear':
          config = {
            date: true,
            datePattern: [
              'm',
              'Y'
            ]
          };

          this.inputmode = 'numeric';

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

  disconnectedCallback() {
    super.disconnectedCallback();
    stopNotifyingOnLangChange(this);
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

    if (this.type === 'password') {
      this.spellcheck = 'false';
    }

    if (this.spellcheck === 'false') {
      this.autocorrect = 'off';
      this.autocapitalize = 'none';
    } else {
      this.autocorrect = this.autocorrect ? this.autocorrect : undefined;
      this.autocapitalize = undefined;
    }
  }

  /**
   * @private
   * @returns {string}
   */
  definePattern() {
    if (this.type === 'credit-card' && !this.noValidate && this.maxLength) {
      return `.{${this.maxLength},${this.maxLength}}`;
    }

    return this.pattern;
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

    // Validation on blur or input.
    if (this.hasBlurred || this.validateOnInput) {
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
   * Determines default help text string.
   * @private
   * @param {string} type Value entered into component prop.
   * @returns {string} Evaluates pre-determined help text.
   */
  getHelpText(type) {
    if (type === 'password') {
      this.helpText = i18n(this.lang, 'password');
    } else if (type === 'email') {
      this.helpText = i18n(this.lang, 'email');
    } else if (type === 'credit-card') {
      this.helpText = i18n(this.lang, 'creditcard');
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
    if (this.setCustomValidity) {
      return this.setCustomValidity;
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

    if (this.hasBlurred && this.type === 'credit-card') {
      this.validate();
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

    return ifDefined(this.placeholder)
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
    } else if (this.type === 'month-fullYear') {
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
    } else if (this.type === 'month-fullYear') {
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
    this.minLength = card.formatMinLength;

    this.setCustomValidity = card.setCustomValidity;

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
    const CreditCardValidationMessage = `${i18n(this.lang, 'validCard')}`;

    // eslint-disable-next-line sort-vars, one-var
    const creditCardTypes = [
      {
        name: 'Airlines',
        regex: /^(?<num>1|2)\d{0}/u,
        formatMinLength: 17,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'credit-card'
      },
      {
        name: 'Commercial',
        regex: /^(?<num>2)\d{0}/u,
        formatMinLength: 8,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'credit-card'
      },
      {
        name: 'Alaska Commercial',
        regex: /^(?<num>27)\d{0}/u,
        formatMinLength: 8,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-alaska'
      },
      {
        name: 'American Express',
        regex: /^(?<num>34|37)\d{0}/u,
        formatLength: 17,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-amex'
      },
      {
        name: 'Diners club',
        regex: /^(?<num>36|38)\d{0}/u,
        formatLength: 16,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'credit-card'
      },
      {
        name: 'Visa',
        regex: /^(?<num>4)\d{0}/u,
        formatLength: 19,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-visa'
      },
      {
        name: 'Alaska Airlines Visa',
        regex: /^(?<num>4147\s34|4888\s93|4800\s11|4313\s51|4313\s07)\d{0}/u,
        formatLength: 19,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-alaska'
      },
      {
        name: 'Master Card',
        regex: /^(?<num>5)\d{0}/u,
        formatLength: 19,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-mastercard'
      },
      {
        name: 'Discover Card',
        regex: /^(?<num>6)\d{0}/u,
        formatLength: 19,
        setCustomValidity: CreditCardValidationMessage,
        cardIcon: 'cc-discover'
      }
    ];

    let type = {
      name: 'Default Card',
      formatLength: 19,
      setCustomValidity: CreditCardValidationMessage,
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
