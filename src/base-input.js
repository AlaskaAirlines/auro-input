// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

import styleCss from "./style-css.js";
import "focus-visible/dist/focus-visible.min.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';
import viewPassword from '@alaskaairux/icons/dist/icons/interface/view-password_es6.js';
import hidePassword from '@alaskaairux/icons/dist/icons/interface/hide-password_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';

/**
 * auro-input provides users a way to enter data into a text field.
 *
 * @attr {String} customValidationMessage - Overrides the browser validation message when the input is invalid.
 * @attr {String} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {String} helpText - Sets the help text displayed below the input.
 * @attr {String} id - Sets the unique ID of the element.
 * @attr {String} label - Sets the label text for the input.
 * @attr {String} name - Populates the `name` attribute on the input.
 * @attr {String} type - Populates the `type` attribute on the input. Allowed values are `password`, `email`, `credit-card`  or `text`. If given value is not allowed or set, defaults to `text`.
 * @attr {String} value - Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input.
 * @attr {Boolean} icon - If set, will render an icon inside the input to the left of the value. Support is limited to auro-input instances with credit card format.
 * @attr {Boolean} disabled - If set, disables the input.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} isValid - Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @event input - Event fires when the value of an `auro-input` has been changed.
 */

export default class BaseInput extends LitElement {

  constructor() {
    super();

    /**
     * @private Value is SVG for use
     */
    this.closeSvg = this.getIconAsHtml(closelg);

    /**
     * @private Value is SVG for use
     */
    this.alertSvg = this.getIconAsHtml(alert);

    /**
     * @private Value is SVG for use
     */
    this.hidePassword = this.getIconAsHtml(hidePassword);

    /**
     * @private Value is SVG for use
     */
    this.viewPassword = this.getIconAsHtml(viewPassword);

    this.type = 'text';

    /**
     * @private Restrict to specific list of allowed types
     */
    this.allowedInputTypes = [
      "text",
      "email",
      "password",
      "credit-card"
    ];

    /**
     * @private Restricts application of cursor adjustment to specific input types
     */
     this.setSelectionInputTypes = [
      "text",
      "password",
      "email",
    ];

    /**
     * @private Internal error state used in custom getter/setter
     */
    this._error = null;

    /**
     * @private Value is unique ID set at runtime
     */
    this.uniqueId = Math.random().toString(36).substring(2, 8);
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      customValidationMessage: { type: String },
      error:                   { type: String },
      helpText:                { type: String },
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      type:                    { type: String },
      value:                   { type: String },
      icon:                    { type: Boolean },
      disabled:                { type: Boolean },
      isValid:                 { type: Boolean },
      required:                { type: Boolean },
      noValidate:              { type: Boolean }
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
   * @private Custom function to ensure that element is programmatically focusable
   * @returns {object} Value of this.
   */
  focus() {
    this.inputElement.focus();
  }

  /**
   * @private Parse imported SVG object data to string for HTML use
   * @param {string} icon HTML string for requested icon.
   * @returns {object} Appended HTML for SVG.
   */
  getIconAsHtml(icon) {
    const dom = new DOMParser().parseFromString(icon.svg, 'text/html');

    return dom.body.firstChild;
  }

  /**
   * @private Clears data entered into the input element
   * @returns {string} Replaces innerHTML with empty string.
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
   * @private Validates value of the input in blur
   * @returns {string} Validates string entered into the input field.
   */
  handleInput() {
    this.value = this.inputElement.value;
    const selectionStart = this.inputElement.selectionStart;
    if (this.hasBlurred) {
      this.validate();
    }

    // prevents cursor jumping in Safari
    if (this.setSelectionInputTypes.includes(this.type)) {
      this.updateComplete.then(() => {
        try {
          this.inputElement.setSelectionRange(selectionStart, selectionStart)
        } catch (error) {
          // do nothing
        }
      });
    }
  }

  /**
   * @private Ensures that the element is always to the left on blur
   * @returns {state} Determines that user has left input.
   */
  handleBlur() {
    this.hasBlurred = true;
    this.inputElement.scrollLeft = 100;

    if (!this.noValidate) {
      this.validate();
    }
  }

  /**
   * @private If the error property is set, then the error message should persist
   * and take precedence over client side validation
   * @returns {string} Validates string.
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
   * @private Iterates over allowed input types
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
   * @private Evaluates different error type messages
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
