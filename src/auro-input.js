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

// build the component class
export default class AuroInput extends BaseInput {

  // function to define props used within the scope of this component
  // static get properties() {
  //   return {
  //     ...super.properties
  //   };
  // }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const iconClasses = {
      'inputElement-icon': true,
      'alertIcon': !this.isValid
    };

    // eslint-disable-next-line one-var
    const inputClasses = {
      "inputIcon": this.defineInputIcon(),
      "error": !this.isValid,
      "inputElement": true,
      "inputElement--filled": this.value,
    };

    // eslint-disable-next-line one-var
    const labelClasses = {
      "inputElement-label": true,
      "is-disabled": this.disabled,
      "inputElement-labelIcon--no-value": this.defineLabelPadding()
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
        placeholder=${this.getPlaceholder()}
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
          <auro-icon class="accentIcon" category="payment" name="${name}" customColor></auro-icon>
        `) : undefined
      }

      ${this.type === 'month-day-year' || this.type === 'month-year' || this.type === 'year-month-day' || this.type === 'month-fullYear'
        ? html`<auro-icon class="accentIcon" category="interface" name="calendar" customColor></auro-icon>`
        : undefined
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
