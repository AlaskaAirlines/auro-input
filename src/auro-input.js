// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
/* eslint-disable complexity */
/* eslint-disable indent */

import { html } from "lit";
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import i18n from './i18n.js';
import BaseInput from './base-input.js';

// build the component class
export class AuroInput extends BaseInput {

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
        @focusin="${this.handleFocusin}"
        @blur="${this.handleBlur}"
        class="${classMap(inputClasses)}"
        id="${this.id}"
        name="${ifDefined(this.name)}"
        type="${this.type === 'password' && this.showPassword ? 'text' : this.getInputType(this.type)}"
        pattern="${ifDefined(this.definePattern())}"
        maxlength="${ifDefined(this.maxLength ? this.maxLength : undefined)}"
        minlength="${ifDefined(this.minLength ? this.minLength : undefined)}"
        inputmode="${ifDefined(this.inputmode ? this.inputmode : undefined)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        aria-describedby="${this.uniqueId}"
        aria-invalid="${this.validity !== 'valid'}"
        placeholder=${this.getPlaceholder()}
        lang="${ifDefined(this.lang)}"
        ?activeLabel="${this.activeLabel}"
        spellcheck="${ifDefined(this.spellcheck ? this.spellcheck : undefined)}"
        autocorrect="${ifDefined(this.autocorrect ? this.autocorrect : undefined)}"
        autocapitalize="${ifDefined(this.autocapitalize ? this.autocapitalize : undefined)}"
        part="input"
      />

      <!-- Input label template -->
      <label for=${this.id} class="${classMap(labelClasses)}" part="label">
        <slot name="label">
          ${this.label}
        </slot>
        ${this.required ? '' : ` (${i18n(this.lang, 'optional')})`}
      </label>

      <!-- Help text and error message template -->
      ${!this.validity || this.validity === undefined || this.validity === 'valid'
        ? html`
          <p class="inputElement-helpText" id="${this.uniqueId}" part="helpText">
            <slot name="helptext">${this.getHelpText(this.type)}</slot>
          </p>`
        : html`
          <p class="inputElement-helpText" id="${this.uniqueId}" role="alert" aria-live="assertive" part="helpText">
            ${this.errorMessage}
          </p>`

      }

      ${this.type === 'credit-card' ? this.processCreditCard() : undefined}

      <!-- The repeat() method is used below in order to force auro-icon to re-render when the name value is updated.
           This should be cleaned up when auro-icon issue #31 is resolved. -->
      ${this.inputIconName
        ? repeat([this.inputIconName], (val) => val, (name) => html`
          <auro-icon class="accentIcon" category="payment" name="${name}" part="accentIcon" customColor></auro-icon>
        `) : undefined
      }

      ${this.type === 'month-day-year' || this.type === 'month-year' || this.type === 'year-month-day' || this.type === 'month-fullYear'
        ? html`<auro-icon class="accentIcon" category="interface" name="calendar" part="accentIcon" customColor></auro-icon>`
        : undefined
      }

      <div class="iconContainer" part="iconContainer">
        ${this.type === 'password' ? html`
          <button
            @click="${this.handleClickShowPassword}"
            class="inputElement-icon iconButton "
            tabindex="-1">
            ${this.showPassword ? this.hidePassword : this.viewPassword}
          </button>
        ` : undefined}
        ${this.value && this.value.length > 0 ? html`
          <button
            @click="${this.handleClickClear}"
            aria-hidden="true"
            class="inputElement-icon iconButton"
            tabindex="-1">
            ${this.readonly ? undefined : this.closeSvg}
          </button>
        ` : undefined}
        ${this.validity !== undefined && this.validity !== 'valid' ? html`
          <span class="alertIcon">${this.alertSvg}</span>
        ` : undefined}
      </div>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-input")) {
  customElements.define("auro-input", AuroInput);
}
