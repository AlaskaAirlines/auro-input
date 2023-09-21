// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines, no-magic-numbers, complexity, max-depth */
/* eslint no-magic-numbers: ["error", { "ignore": [0] }] */
/* eslint-disable max-statements */

import { LitElement, css, html } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';

import styleCss from "./style-css.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-sm_es6.js';
import viewPassword from '@alaskaairux/icons/dist/icons/interface/view-password_es6.js';
import hidePassword from '@alaskaairux/icons/dist/icons/interface/hide-password_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import Cleave from 'cleave.js';
import i18n, {notifyOnLangChange, stopNotifyingOnLangChange} from './i18n.js';

/**
 * Auro-input provides users a way to enter data into a text field.
 *
 * @attr {Boolean} validateOnInput - Sets validation mode to re-eval with each input.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @prop {String} errorMessage - Contains the help text message for the current validity error.
 * @attr {String} isValid - (DEPRECATED - Please use validity) Can be accessed to determine if the input validity. Returns true when validity has not yet been checked or validity = 'valid', all other cases return false. Not intended to be set by the consumer.
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityCustomError - Custom help text message to display when validity = `customError`.
 * @attr {String} setCustomValidityValueMissing - Custom help text message to display when validity = `valueMissing`.
 * @attr {String} setCustomValidityBadInput - Custom help text message to display when validity = `badInput`.
 * @attr {String} setCustomValidityTooShort - Custom help text message to display when validity = `tooShort`.
 * @attr {String} setCustomValidityTooLong - Custom help text message to display when validity = `tooLong`.
 * @attr {String} setCustomValidityForType - Custom help text message to display for the declared element `type` and type validity fails.
 * @attr {String} setCustomValidityRangeOverflow - Custom help text message to display when validity = `rangeOverflow`.
 * @attr {String} setCustomValidityRangeUnderflow - Custom help text message to display when validity = `rangeUnderflow`.
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
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @attr {Boolean} activeLabel - If set, the label will remain fixed in the active position.
 * @attr {String} max = The maximum value allowed. This only applies for inputs with a type of `numeric` and all date formats.
 * @attr {String} min = The minimum value allowed. This only applies for inputs with a type of `numeric` and all date formats.
 * @attr {Number} maxLength - The maximum number of characters the user can enter into the text input. This must be an integer value `0` or higher.
 * @attr {Number} minLength - The minimum number of characters the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`.
 * @attr {String} spellcheck - An enumerated attribute defines whether the element may be checked for spelling errors. [true, false]. When set to `false` the attribute `autocorrect` is set to `off` and `autocapitalize` is set to `none`.
 * @attr {String} autocorrect - When set to `off`, stops iOS from auto correcting words when typed into a text box.
 * @attr {String} autocapitalize - An enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user. [off/none, on/sentences, words, characters]
 * @attr {String} pattern - Specifies a regular expression the form control's value should match.
 * @prop {Boolean} ready - When false the component API should not be called.
 * @slot helptext - Sets the help text displayed below the input.
 * @slot label - Sets the label text for the input.
 * @csspart label - Use for customizing the style of the label element
 * @csspart helpText - Use for customizing the style of the helpText element
 * @csspart accentIcon - Use for customizing the style of the accentIcon element (e.g. credit card icon, calendar icon)
 * @csspart iconContainer - Use for customizing the style of the iconContainer (e.g. X icon for clearing input value)
 * @event input - Event fires when the value of an `auro-input` has been changed.
 * @fires auroInput-helpText - Notifies that the helpText message has changed.
 * @fires auroInput-ready - Notifies that the component has finished initializing.
 * @fires auroInput-validated - Notifies that the `validity` value has changed.
 */

export default class BaseInput extends LitElement {

  constructor() {
    super();

    const idLength = 36;
    const idSubstrEnd = 8;
    const idSubstrStart = 2;

    this.isValid = false;

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
     * @private
     */
    // this.cursorPosition = 1;

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
    this.dateInputTypes = [
      "month-day-year",
      "year-month-day",
      "month-year",
      "month-fullYear"
    ];

    /**
     * @private
     */
    this.uniqueId = Math.random().
      toString(idLength).
      substring(idSubstrStart, idSubstrEnd);

    this.icon = false;
    this.disabled = false;
    this.required = false;
    this.noValidate = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.label = 'Input label is undefined';
    this.ready = false;
    this.activeLabel = false;

    this.setCustomValidityForType = undefined;

    /**
     * @private
     */
    this.validationCCLength = undefined;

    /**
     * @private
     */
    this.autoFormattingTypes = [
      'credit-card',
      'month-day-year',
      'month-year',
      'month-fullyear',
      'year-month-day'
    ];
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      type:                    { type: String,
        reflect: true },
      value:                   { type: String },
      lang:                    { type: String },
      pattern:                 {
        type: String,
        reflect: true
      },
      icon:                    { type: Boolean },
      disabled:                { type: Boolean },
      required:                { type: Boolean },
      noValidate:              { type: Boolean },
      helpText:                { type: String },
      spellcheck:              { type: String },
      autocorrect:             { type: String },
      autocapitalize:          { type: String },
      placeholder:             { type: String },
      activeLabel:             {
        type: Boolean,
        reflect: true
      },
      max:               { type: String },
      min:               { type: String },
      maxLength:               { type: Number },
      minLength:               { type: Number },
      showPassword:            { state: true },
      validateOnInput:         { type: Boolean },
      ready:                   { type: Boolean },
      error:                   {
        type: String,
        reflect: true
      },
      errorMessage:            { type: String },
      isValid: {
        type: String,
        reflect: true
      },
      validity:                {
        type: String,
        reflect: true
      },
      setCustomValidity:               { type: String },
      setCustomValidityCustomError:    { type: String },
      setCustomValidityValueMissing:   { type: String },
      setCustomValidityBadInput:       { type: String },
      setCustomValidityTooShort:       { type: String },
      setCustomValidityTooLong:        { type: String },
      setCustomValidityRangeOverflow:  { type: String},
      setCustomValidityRangeUnderflow: { type: String},
      customValidityTypeEmail:         { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  connectedCallback() {
    super.connectedCallback();

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
    // add attribute for queryselectors when auro-input is registered under a custom name
    if (this.tagName.toLowerCase() !== 'auro-input') {
      this.setAttribute('auro-icon', true);
    }

    this.inputElement = this.renderRoot.querySelector('input');
    this.labelElement = this.shadowRoot.querySelector('label');

    // use valiity message override if declared when initializing the component
    if (this.hasAttribute('setCustomValidity')) {
      this.ValidityMessageOverride = this.setCustomValidity;
    }

    // if setCustomValidityForType is not set, use our default
    if (!this.setCustomValidityForType) {
      if (this.type === 'password') {
        this.setCustomValidityForType = i18n(this.lang, 'password');
      } else if (this.type === 'credit-card') {
        this.setCustomValidityForType = i18n(this.lang, 'creditcard');
      } else if (this.type === 'email') {
        this.setCustomValidityForType = i18n(this.lang, 'email');
      } else if (this.type === 'month-day-year') {
        this.setCustomValidityForType = i18n(this.lang, 'dateMMDDYYYY');
      } else if (this.type === 'month-year') {
        this.setCustomValidityForType = i18n(this.lang, 'dateMMYY');
      } else if (this.type === 'month-fullyear') {
        this.setCustomValidityForType = i18n(this.lang, 'dateMMYYYY');
      } else if (this.type === 'year-month-day') {
        this.setCustomValidityForType = i18n(this.lang, 'dateYYYYMMDD');
      }
    }

    this.addEventListener('keydown', (evt) => {
      if (this.autoFormattingTypes.includes(this.type)) {
        if (evt.key.length === 1 || evt.key === 'Backspace' || evt.key === 'Delete') {
          if (evt.key.length === 1) {
            const numCharSelected = this.inputElement.selectionEnd - this.inputElement.selectionStart;

            if (numCharSelected > 1) {
              this.cursorPosition = this.inputElement.selectionStart + 1;
            } else if (numCharSelected === 1) {
              this.cursorPosition = this.inputElement.selectionEnd;
            } else {
              this.cursorPosition = this.inputElement.selectionEnd + 1;
            }
          } else if (evt.key === 'Backspace') {
            this.cursorPosition = this.inputElement.selectionEnd - 1;
          } else if (evt.key === 'Delete') {
            this.cursorPosition = this.inputElement.selectionEnd;
          }
        }

        if (evt.key === "ArrowUp" || evt.key === "ArrowDown" || evt.key === "ArrowLeft" || evt.key === "ArrowRight") {
          if (evt.key === 'ArrowUp') {
            this.cursorPosition = 0;
          } else if (evt.key === 'ArrowDown') {
            this.cursorPosition = this.value.length;
          } else if (evt.key === 'ArrowLeft') {
            this.cursorPosition = this.inputElement.selectionEnd - 1;
          } else if (evt.key === 'ArrowRight') {
            this.cursorPosition = this.inputElement.selectionEnd + 1;
          }
        }
      }
    });

    this.addEventListener('mouseover', () => {
      this.classList.add('hover');
    });

    this.addEventListener('mouseout', () => {
      this.classList.remove('hover');
    });

    this.notifyReady();
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
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

    if (changedProperties.has('type')) {
      this.configureDataForType();
    }

    if (changedProperties.has('value')) {
      if (this.value !== this.inputElement.value) {
        if (this.value) {
          this.inputElement.value = this.value;
        } else {
          this.inputElement.value = '';
        }

        if (!this.shadowRoot.contains(this.getActiveElement())) {
          this.validate();
        }

        this.notifyValueChanged();
      }
      this.autoFormatHandling();
    }

    if (changedProperties.has('error')) {
      if (!this.error) {
        this.setCustomValidity = undefined;
        this.validity = undefined;
        this.removeAttribute('validity');
      }

      this.validate();
    }

    if (changedProperties.has('validity')) {
      this.notifyValidityChange();
    }
  }

  /**
   * @private
   * @returns {void} Handles cursor position when input auto-formats.
   */
  autoFormatHandling() {
    if (this.cursorPosition >= 0 && this.autoFormattingTypes.includes(this.type)) {
      if (this.type === 'credit-card' && this.inputElement.value.charAt(this.cursorPosition) === ' ') {
        this.cursorPosition += 1;
      } else if (this.dateInputTypes.includes(this.type)) {
        const divider = '/';
        const dividerNextChar = this.inputElement.value.charAt(this.cursorPosition) === divider;

        if (this.cursorPosition > 1 && dividerNextChar && this.inputElement.value.charAt(this.cursorPosition - 2) !== divider) {
          this.cursorPosition += 1;
        } else if (this.cursorPosition > 0 && this.inputElement.value.charAt(this.cursorPosition + 1) === divider
                  && this.inputElement.value.charAt(this.cursorPosition - 1) === '0') { // eslint-disable-line operator-linebreak
          this.cursorPosition += 2;
        }
      }

      this.inputElement.setSelectionRange(this.cursorPosition, this.cursorPosition);
    }
  }

  /**
   * @private
   * @returns {void} Notify validity state changed via event.
   */
  notifyValidityChange() {
    this.dispatchEvent(new CustomEvent('auroInput-validityChange', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroInput-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
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
   * Sends event notifying that the input has changed it's value.
   * @private
   * @returns {void}
   */
  notifyValueChanged() {
    let inputEvent = null;

    inputEvent = new Event('input', {
      bubbles: true,
      composed: true,
    });

    // Dispatched event to alert outside shadow DOM context of event firing.
    this.dispatchEvent(inputEvent);
  }

  /**
   * Handles event of clearing input content by clicking the X icon.
   * @private
   * @return {void}
   */
  handleClickClear() {
    this.inputElement.value = "";
    this.value = undefined;
    this.labelElement.classList.remove('inputElement-label--sticky');
    this.focus();
    this.validate();
    this.notifyValueChanged();
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
    if (this.validateOnInput) {
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
   * Function to support @focusin event.
   * @private
   * @return {void}
   */
  handleFocusin() {

    /**
     * The input is considered to be in it's initial state based on
     * if this.value === undefined. The first time we interact with the
     * input manually, by applying focusin, we need to flag the
     * input as no longer in the initial state.
     */
    if (this.value === undefined) {
      this.value = '';
    }
  }

  /**
   * Function to support @blur event.
   * @private
   * @return {void}
   */
  handleBlur() {
    this.inputElement.scrollLeft = 100;

    if (!this.noValidate) {
      this.validate();
    }
  }

  /**
   * Returns focused element, even if it's in the shadow DOM.
   * @private
   * @param {Object} root - Element to check for focus.
   * @returns {Object}
   */
  getActiveElement(root = document) {
    const activeEl = root.activeElement;

    if (!activeEl) {
      return null;
    }

    if (activeEl.shadowRoot) {
      return this.getActiveElement(activeEl.shadowRoot);
    }

    return activeEl;
  }

  /**
   * Determines the validity state of the element.
   * @returns {void}
   */
  validate() {
    // Validate only if noValidate is not true and the input does not have focus
    const validationShouldRun = this.value !== undefined;

    if (this.hasAttribute('error')) {
      this.validity = 'customError';
      this.setCustomValidity = this.error;
    } else if (validationShouldRun) {
      this.validity = 'valid';
      this.setCustomValidity = '';

      /**
       * Only validate once we interact with the datepicker
       * this.value === undefined is the initial state pre-interaction.
       *
       * The validityState definitions are located at https://developer.mozilla.org/en-US/docs/Web/API/ValidityState.
       */
      if ((!this.value || this.value.length === 0) && this.required) {
        this.validity = 'valueMissing';
        this.setCustomValidity = this.setCustomValidityValueMissing || '';
      } else {
        this.validateInputType();
        this.validateInputAttributes();
      }
    }

    if (validationShouldRun || this.hasAttribute('error')) {
      if (this.validity && this.validity !== 'valid') {
        this.isValid = false;

        // Use the validity message override if it is declared
        if (this.ValidityMessageOverride) {
          this.setCustomValidity = this.ValidityMessageOverride;
        }
      } else {
        this.isValid = true;
      }

      this.getErrorMessage();

      this.dispatchEvent(new CustomEvent('auroInput-validated', {
        bubbles: true,
        composed: true,
        detail: {
          validity: this.validity
        }
      }));
    }
  }

  /**
   * Determines the validity state of the element based on the common attribute restrictions (pattern).
   * @private
   * @returns {void}
   */
  validateInputAttributes() {
    if (this.pattern) {
      const pattern = new RegExp(`^${this.pattern}$`, 'u');

      if (!pattern.test(this.value)) {
        this.validity = 'badInput';
        this.setCustomValidity = this.setCustomValidityBadInput || '';
      }
    } else if (this.value.length > 0 && this.value.length < this.minLength) {
      this.validity = 'tooShort';
      this.setCustomValidity = this.setCustomValidityTooShort || '';
    } else if (this.value.length > this.maxLength) {
      this.validity = 'tooLong';
      this.setCustomValidity = this.setCustomValidityTooLong || '';
    }
  }

  /**
   * Sets configuration data used elsewhere based on the `type` attribute.
   * @private
   * @returns {void}
   */
  configureDataForType() {
    if (this.type === 'month-day-year' || this.type === 'year-month-day') {
      this.dateStrLength = 10;
    } else if (this.type === 'month-year') {
      this.dateStrLength = 5;
    } else if (this.type === 'month-fullYear') {
      this.dateStrLength = 7;
    }
  }

  /**
   * Determines the validity state of the element based on the type attribute.
   * @private
   * @returns {void}
   */
  validateInputType() {
    if (this.hasAttribute('type')) {
      if (this.type === 'email') {
        // BUG - Need more accurate email regex | this one validates slightly different than the default html5 one
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // eslint-disable-line require-unicode-regexp

        if (!this.value.match(emailRegex)) {
          this.validity = 'badInput';
          this.setCustomValidity = this.setCustomValidityForType || '';
        }
      } else if (this.type === 'credit-card') {
        if (this.value.length > 0 && this.value.length < this.validationCCLength) {
          this.validity = 'tooShort';
          this.setCustomValidity = this.setCustomValidityForType || '';
        }
      } else if (this.type === 'numeric') {
        if (this.max !== undefined && Number(this.max) < Number(this.value)) {
          this.validity = 'rangeOverflow';
          this.setCustomValidity = this.getAttribute('setCustomValidityRangeOverflow') || '';
        }

        if (this.min !== undefined && Number(this.min) > Number(this.value)) {
          this.validity = 'rangeUnderflow';
          this.setCustomValidity = this.getAttribute('setCustomValidityRangeUnderflow') || '';
        }

      } else if (this.type === 'month-day-year' ||
                 this.type === 'month-year' ||
                 this.type === 'month-fullYear' ||
                 this.type === 'year-month-day'
      ) {
        if (this.value.length > 0 && this.value.length < this.dateStrLength) {
          this.validity = 'tooShort';
          this.setCustomValidity = this.setCustomValidityForType || '';
        } else {
          const valueDate = new Date(this.value);

          // validate max
          if (this.max !== undefined) {
            const maxDate = new Date(this.max);

            if (valueDate > maxDate) {
              this.validity = 'rangeOverflow';
              this.setCustomValidity = this.getAttribute('setCustomValidityRangeOverflow') || '';
            }
          }

          // validate min
          if (this.min) {
            const minDate = new Date(this.min);

            if (valueDate < minDate) {
              this.validity = 'rangeUnderflow';
              this.setCustomValidity = this.getAttribute('setCustomValidityRangeUnderflow') || '';
            }
          }
        }
      }
    }
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
    } else if (type === 'month-day-year') {
      this.helpText = i18n(this.lang, 'dateMMDDYYYY');
    } else if (type === 'month-year') {
      this.helpText = i18n(this.lang, 'dateMMYY');
    } else if (type === 'month-fullyear') {
      this.helpText = i18n(this.lang, 'dateMMYYYY');
    } else if (type === 'year-month-day') {
      this.helpText = i18n(this.lang, 'dateYYYYMMDD');
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
    if (this.validity !== 'valid') {
      if (this.setCustomValidity) {
        this.errorMessage = this.setCustomValidity;
      } else if (this.inputElement.validationMessage.length > 0) {
        this.errorMessage = this.inputElement.validationMessage;
      }
    } else {
      this.errorMessage = undefined;
    }

    // Not sure if we still need this.
    this.dispatchEvent(new CustomEvent('auroInput-helpText', {
      bubbles: true,
      composed: true,
      detail: {
        message: this.errorMessage
      }
    }));
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

    if (this.value.length > 0) {
      this.labelElement.classList.add('inputElement-label--sticky');

    } else {
      this.labelElement.classList.remove('inputElement-label--sticky');
    }

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

    return ifDefined(this.placeholder);
  }

  /**
   * Defines placement of input icon based on type, used with classMap.
   * @private
   * @returns {boolean}
   */
  defineInputIcon() {
    if (this.icon && this.type === 'credit-card') {
      return true;
    } else if (this.dateInputTypes.includes(this.type)) {
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
    } else if (this.dateInputTypes.includes(this.type)) {
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

    this.validationCCLength = type.formatLength;

    return type;
  }
}
