// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */

/* eslint no-magic-numbers: ["error", { "ignore": [0] }] */
/* eslint-disable max-statements */

import { LitElement, css } from "lit-element";

import styleCss from "./style-css.js";
import "focus-visible/dist/focus-visible.min.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-sm_es6.js';
import viewPassword from '@alaskaairux/icons/dist/icons/interface/view-password_es6.js';
import hidePassword from '@alaskaairux/icons/dist/icons/interface/hide-password_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';

/**
 * Auro-input provides users a way to enter data into a text field.
 *
 * @attr {String} customValidationMessage - Overrides the browser validation message when the input is invalid.
 * @attr {String} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {String} helpText - Deprecated, see `slot`.
 * @attr {String} id - Sets the unique ID of the element.
 * @attr {String} label - Deprecated, see `slot`.
 * @attr {String} name - Populates the `name` attribute on the input.
 * @attr {String} type - Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`  or `text`. If given value is not allowed or set, defaults to `text`.
 * @attr {String} value - Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input.
 * @attr {Boolean} icon - If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format.
 * @attr {Boolean} bordered - Applies bordered UI variant.
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
      "credit-card"
    ];

    /**
     * @private
     */
    this.setSelectionInputTypes = [
      "text",
      "password",
      "email",
    ];

    const idLength = 36,
      idSubstrEnd = 8,
      idSubstrStart = 2;

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
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      error:                   { type: String },
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      autocomplete:            { type: String },
      type:                    { type: String },
      value:                   { type: String },
      icon:                    { type: Boolean },
      disabled:                { type: Boolean },
      isValid:                 { type: Boolean },
      required:                { type: Boolean },
      noValidate:              { type: Boolean },
      helpText:                { type: String },

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
  }

  firstUpdated() {
    this.inputElement = this.renderRoot.querySelector('input');
    this.labelElement = this.shadowRoot.querySelector('label');
  }

  /**
   * @private
   * @return {void}
   */
  focus() {
    this.inputElement.focus();
  }

  /**
   * Function necessary to convert SVG data to HTML text string.
   * @private
   * @param {string} icon HTML string for requested icon.
   * @returns {object} Appended HTML for SVG.
   */
  getIconAsHtml(icon) {
    const dom = new DOMParser().parseFromString(icon.svg, 'text/html');

    return dom.body.firstChild;
  }

  /**
   * This function handles the clearing of the input element based on eval of content.
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

    this.dispatchEvent(click);
  }

  /**
   * The scope of this function is to address the needs of the
   * input element based on type of input needed.
   * @private
   * @return {void}
   */
  handleInput() {
    // Prevent non-numeric characters from being entered on credit card fields
    if (this.type === 'credit-card') {
      this.inputElement.value = this.inputElement.value.replace(/[\D]/gu, '');
    }

    this.value = this.inputElement.value;

    const { selectionStart } = this.inputElement;

    if (this.hasBlurred) {
      this.validate();
    }

    // prevents cursor jumping in Safari
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
   * This function applies the validation method on the input element based on blur event.
   * @private
   * @return {void}
   */
  handleBlur() {
    this.hasBlurred = true;
    this.inputElement.scrollLeft = 100;

    if (!this.noValidate) {
      this.validate();
    }
  }

  /**
   * This function validates content of the input element based on
   * HTML spec of internal validation.
   * @private
   * @return {void}
   */
  validate() {

    if (this.error && this.error.length > 0) {
      this.isValid = false;

      return;
    }

    this.isValid = this.inputElement.checkValidity();
    this.internalError = this.isValid ? null : this.inputElement.validationMessage;
  }

  /**
   * There is a short list of input types that this element supports.
   * If the request is out of scope, only a text type is returned.
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
   * Helper function to determine default help text string.
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
   * This function uses the supplied error string when needed.
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
}
