// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import BaseInput from './base-input';


// build the component class
export default class AuroInput extends BaseInput {

  constructor() {
    super();

    /**
     * @private Boolean value to determine which password icon to show
     */
    this.showPassword = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
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
    if (this.type === "password") {
      this.type = "text";
      this.showPassword = true;
      this.focus();
    } else if (this.type === "text") {
      this.type = "password";
      this.showPassword = false;
      this.focus();
    }
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

    this.labelElement.classList.add('inputElement-label--sticky')

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
    if (this.type === 'password' || this.type === 'text') {
      return html`
      <button
        id="passwordToggle"
        class="iconButton passwordToggle"
        @click="${this.handleClickShowPassword}"
        tabindex="-1"
      >${this.togglePasswordIcon()}</button>`
    }

    return null
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    this.inputClasses = {
      "inputElement": true,
      "inputElement--filled": this.value,
      "error": !this.isValid
    };

    return html`
      <input
        @input="${this.handleInput}"
        @blur="${this.handleBlur}"
        @keyup="${this.handleKeyUp}"
        class="${classMap(this.inputClasses)}"
        id="${this.id}"
        name="${ifDefined(this.name)}"
        type="${this.getInputType(this.type)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        .value="${ifDefined(this.value)}"
        aria-describedby="${this.uniqueID}"
      />

      ${this.required
        ? html`<label for=${this.id} class="inputElement-label ${this.getDisabledClass()}">${this.label}</label>`
        : html`<label for=${this.id} class="inputElement-label ${this.getDisabledClass()}">${this.label} (optional)</label>`
      }
      ${!this.isValid
        ? html`
          <p class="inputElement-helpText error" role="alert" aria-live="assertive">${this.getErrorMessage()}</p>
          <div class="iconContainer">
            <div class="inputElement-icon alertIcon">
              ${this.showPasswordIcon()}
              ${this.alertSvg}
            </div>
          </div>`
        : html`
          <p id="${this.uniqueID}" class="inputElement-helpText ${this.getDisabledClass()}">${this.helpText}</p>
          <div class="iconContainer">
            <div class="inputElement-icon">
              ${this.showPasswordIcon()}
              <button
                @click="${this.handleClickClear}"
                aria-hidden="true"
                class="inputElement-icon iconButton"
                tabindex="-1">
                ${this.closeSvg}
              </button>
            </div>
          </div>`
        }
      `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-input")) {
  customElements.define("auro-input", AuroInput);
}
