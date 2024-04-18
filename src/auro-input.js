// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable complexity */

import { html } from "lit";
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import i18n from './i18n.js';
import BaseInput from './base-input.js';

// build the component class
export class AuroInput extends BaseInput {

  /**
   * Function to determine if the input is meant to render an icon visualizing the input type.
   * @private
   * @returns {boolean} - Returns true if the input type is meant to render an icon.
   */
  hasTypeIcon() {
    const typesWithIcons = [
      'month-day-year',
      'month-year',
      'year-month-day',
      'month-fullYear'
    ];

    if (this.icon || typesWithIcons.includes(this.type)) {
      return true;
    }

    return false;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    // eslint-disable-next-line one-var
    // is-disabled class - THIS IS ONLY HERE TO MAKE A TEST PASS AS FAR AS I CAN TELL
    const labelClasses = {
      'is-disabled': this.disabled,
      'withIcon': this.hasTypeIcon(),
      'withValue': this.value && this.value.length > 0
    };

    return html`
      <div class="wrapper" part="wrapper">
        <div class="main">
          <div class="typeIcon">
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
          </div>
          <label for=${this.id} class="${classMap(labelClasses)}" part="label">
            <slot name="label">
              ${this.label}
            </slot>
            ${this.required ? '' : ` (${i18n(this.lang, 'optional')})`}
          </label>
          <input
            @input="${this.handleInput}"
            @focusin="${this.handleFocusin}"
            @blur="${this.handleBlur}"
            id="${this.id}"
            name="${ifDefined(this.name)}"
            type="${this.type === 'password' && this.showPassword ? 'text' : this.getInputType(this.type)}"
            pattern="${ifDefined(this.definePattern())}"
            maxlength="${ifDefined(this.maxLength ? this.maxLength : undefined)}"
            minlength="${ifDefined(this.minLength ? this.minLength : undefined)}"
            inputMode="${ifDefined(this.inputMode ? this.inputMode : undefined)}"
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
        </div>
        <div
          class="notificationIcons"
          part="notificationIcons"
          ?hasValue="${this.hasValue}">
          ${this.validity && this.validity !== 'valid' ? html`
            <div class="notification alertNotification">
              ${this.alertSvg}
            </div>
          ` : undefined}
          ${this.hasValue ? html`
            ${this.type === 'password' ? html`
              <div class="notification passwordBtn">
                <button
                  aria-hidden="true"
                  tabindex="-1"
                  @click="${this.handleClickShowPassword}"
                  class="notificationBtn">
                  ${this.showPassword ? this.hidePassword : this.viewPassword}
                </button>
              </div>
            ` : undefined}
            <div class="notification">
              <button
                class="notificationBtn clearBtn"
                aria-hidden="true"
                tabindex="-1"
                @click="${this.handleClickClear}">
                ${this.readonly ? undefined : this.closeSvg}
              </button>
            </div>
          ` : undefined}
        </div>
      </div>
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
    `;
  }
}

// default internal definition
if (!customElements.get("auro-input")) {
  customElements.define("auro-input", AuroInput);
}
