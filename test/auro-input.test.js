import { fixture, html, expect, elementUpdated, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-input.js';

describe('auro-input', () => {

  it('sets value on the input', async () => {
    const el = await fixture(html`
      <auro-input value="other value" label="First name"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');

    expect(input.value).to.equal('other value');
  });

  it('sets placeholder on the input', async () => {
    const el = await fixture(html`
      <auro-input id="demo50" required placeholder="John Doe">
        <span slot="label">Full name</span>
      </auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');

    expect(input).to.have.attribute('placeholder', 'John Doe');
  });

  it('Sets custom pattern and setCustomValidity message', async () => {
    const el = await fixture(html`
      <auro-input value="other value" pattern="[0-9]+" setCustomValidity="that's not a phone number" keyValidate>
        <span slot="label">First name:</span>
      </auro-input>
    `);
    const validateSpy = sinon.spy(el, 'validate');
    const input = el.shadowRoot.querySelector('input');
    const text = el.shadowRoot.querySelector('.inputElement-helpText').innerHTML;

    input.focus();
    setInputValue(el, 'whatever@alaskaair.com');
    input.blur();
    expect(el.isValid).to.not.be.true;
    expect(text).to.not.contain(`not a phone number`);
  });

  it('clears the value when clicked', async () => {
    const el = await fixture(html`
      <auro-input value="other value" label="First name"></auro-input>
    `);

    const clearButton = el.shadowRoot.querySelector('button');
    clearButton.click();
    expect(el.value).to.equal('');
  });

  it('flips hide-password bit', async () => {
    const el = await fixture(html`
      <auro-input type="password" value="password" label="password"></auro-input>
    `);

    const toggle = el.shadowRoot.querySelector('.passwordToggle');
    const input = el.shadowRoot.querySelector('.inputElement');
    toggle.click();
    await elementUpdated(input);
    expect(input.type).to.equal('text');

    toggle.click();
    await elementUpdated(input);
    expect(input.type).to.equal('password');
  });

  it('allows email type', async () => {
    const el = await fixture(html`
      <auro-input type="email"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');
    expect(input.type).to.equal('email');
  });

  it('allows type number', async () => {
    const el = await fixture(html`
      <auro-input type="number"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input').getAttribute('inputmode');
    expect(input).to.equal('numeric');
  });

  it('does not allow color type', async () => {
    const el = await fixture(html`
      <auro-input type="color"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');
    expect(input.type).to.equal('text');
  });

  it('sets name', async () => {
    const el = await fixture(html`
      <auro-input name="test"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');
    expect(input.name).to.equal('test');
  });

  it('sets value when input event triggered', async () => {
    const el = await fixture(html`
      <auro-input></auro-input>
    `);

    setInputValue(el, 'triggered');
    expect(el.value).to.equal('triggered');
  });

  it('fires input event when setting the value programmatically', async () => {
    const el = await fixture(html`
      <auro-input></auro-input>
    `);

    const listener = oneEvent(el, 'input');
    el.value = 'test'
    const { result } = await listener;

    expect(result).to.equal(undefined);
  })

  it('sets disabled class on label when component disabled', async () => {
    const el = await fixture(html`
      <auro-input disabled label="Disabled input"></auro-input>
    `);

    const label = el.shadowRoot.querySelector('label');
    expect([...label.classList]).to.contain('is-disabled');
  });

  it('validates input after first blur', async () => {
    const el = await fixture(html`
      <auro-input required label="Label"></auro-input>
    `);
    const input = el.shadowRoot.querySelector('input');

    expect(el.hasAttribute('validity')).to.be.false;

    input.focus();
    input.blur();

    await elementUpdated(el);

    expect(el.hasAttribute('validity')).to.be.true;
  });

  it ('validates type="email" correctly', async () => {
    const el = await fixture(html`
      <auro-input type="email" label="Label"></auro-input>
    `);
    expect(el.hasAttribute('validity')).to.be.false;
    setInputValue(el, 'whatever@alaskaair.com');
    await elementUpdated(el);

    expect(el.hasAttribute('validity')).to.be.true;
    expect(el.getAttribute('validity')).to.be.equal('valid');

    setInputValue(el, 'whatever');

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('badInput');
  })

  it('validates auro-input on input', async () => {
    const el = await fixture(html`
        <auro-input id="validation1" required validateOnInput pattern="[a-zA-Z-.']+( +[a-zA-Z-.']+)+" setCustomValidity="Full name requires two or more names with at least one space.">
          <span slot="label">Full Name</span>
          <span slot="helptext">Please enter your full name as it appears on the card.</span>
        </auro-input>
    `);
    const input = el.shadowRoot.querySelector('input');

    input.focus();
    setInputValue(el, 'dale');
    await elementUpdated(el);
    expect(el.getAttribute('validity')).to.be.equal('badInput');
    setInputValue(el, 'dale sande');
    await elementUpdated(el);
    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('does not validate when novalidate is true', async () => {
    const el = await fixture(html`
      <auro-input required type="email" label="Label" novalidate></auro-input>
    `);
    const input = el.shadowRoot.querySelector('input');

    input.focus();
    setInputValue(el, '');
    input.blur();
    await elementUpdated(el);

    expect(el.hasAttribute('validity')).to.be.false;
  });

  it('sets aria-invalid', async () => {
    const el = await fixture(html`
      <auro-input required></auro-input>
    `);

    expect(el.hasAttribute('validity')).to.be.false;
    expect(el.inputElement.getAttribute('aria-invalid')).to.equal('true');

    setInputValue(el, 'some value');
    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');

    setInputValue(el, '');

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valueMissing');
    expect(el.inputElement.getAttribute('aria-invalid')).to.equal('true');
  });

  it('is programmatically focusable', async () => {
    const el = await fixture(html`
      <auro-input label="Label"></auro-input>
    `);

    el.focus();
    expect(document.activeElement === el).to.be.true;
  });

  it('error attribute sets custom validity', async () => {
    const el = await fixture(html`
      <auro-input error="Custom Error Message"></auro-input>
    `)

    expect(el.getAttribute('validity')).to.be.equal('customError');

    const helpTextElem = el.shadowRoot.querySelector('.inputElement-helpText');
    expect(helpTextElem.innerText).to.be.equal('Custom Error Message');
  });

  it('updates validity when error message removed after creation', async () => {
    const el = await fixture(html`
      <auro-input error="Custom Error Message"></auro-input>
    `)

    expect(el.getAttribute('validity')).to.be.equal('customError');

    const helpTextElem = el.shadowRoot.querySelector('.inputElement-helpText');
    expect(helpTextElem.innerText).to.be.equal('Custom Error Message');

    el.removeAttribute('error');

    await elementUpdated(el);

    expect(el.hasAttribute('validity')).to.be.false;
  });

  it('minlength validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input minlength="2"></auro-input>
    `)

    setInputValue(el, 'a')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooShort');

    setInputValue(el, 'aa')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('maxlength validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input maxlength="2"></auro-input>
    `)

    setInputValue(el, 'aaa')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooLong');

    setInputValue(el, 'aa')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('type month-day-year validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input type="month-day-year"></auro-input>
    `)

    setInputValue(el, '10/10/202')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooShort');

    setInputValue(el, '10/10/2022')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('type month-year validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input type="month-year"></auro-input>
    `)

    setInputValue(el, '10/')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooShort');

    setInputValue(el, '10/22')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('type month-fullyear validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input type="month-fullYear"></auro-input>
    `)

    setInputValue(el, '10/')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooShort');

    setInputValue(el, '10/2022')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('type year-month-date validity checked correctly', async () => {
    const el = await fixture(html`
      <auro-input type="year-month-day"></auro-input>
    `)

    setInputValue(el, '20')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('tooShort');

    setInputValue(el, '2022/10/10')

    await elementUpdated(el);

    expect(el.getAttribute('validity')).to.be.equal('valid');
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-input cssclass="testClass"></auro-input>
    `);

    await expect(el).to.be.accessible();
  });

  it('defines the custom element', async () => {
    const el = await !!customElements.get("auro-input");

    await expect(el).to.be.true;
  });

  it('Sets spellcheck and autocapitalize values', async () => {
    const el = await fixture(html`
      <auro-input id="checkSpellCheck" type="text" required spellcheck="false"></auro-input>
    `);

    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.have.attribute('spellcheck', 'false');
    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.have.attribute('autocorrect', 'off');
    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.have.attribute('autocapitalize', 'none');
  });

  it('Does not set spellcheck and autocapitalize values', async () => {
    const el = await fixture(html`
      <auro-input id="checkSpellCheck" type="text" required spellcheck="true"></auro-input>
    `);

    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.have.attribute('spellcheck', 'true');
    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.not.have.attribute('autocorrect');
    expect(el.shadowRoot.querySelector('#checkSpellCheck')).to.not.have.attribute('autocapitalize');
  });

  describe('handles date formatting', () => {
    it('MM/DD/YYYY', async () => {
      const el = await fixture(html`
        <auro-input id="format-date" type="month-day-year" required></auro-input>
      `);

      expect(el.shadowRoot.querySelector('#format-date')).to.have.attribute('placeholder', 'MM/DD/YYYY');
    });

    it('YYYY/MM/DD', async () => {
      const el = await fixture(html`
        <auro-input id="format-date" type="year-month-day" required></auro-input>
      `);

      expect(el.shadowRoot.querySelector('#format-date')).to.have.attribute('placeholder', 'YYYY/MM/DD');
    });

    it('MM/YY', async () => {
      const el = await fixture(html`
        <auro-input id="format-date" type="month-year" required></auro-input>
      `);

      expect(el.shadowRoot.querySelector('#format-date')).to.have.attribute('placeholder', 'MM/YY');
    });

    it('MM/YYYY', async () => {
      const el = await fixture(html`
        <auro-input id="format-date" type="month-fullYear" required></auro-input>
      `);

      expect(el.shadowRoot.querySelector('#format-date')).to.have.attribute('placeholder', 'MM/YYYY');
    });
  });

  describe('handles i18n', () => {
    it('credit-card translation', async () => {
      const el = await fixture(html`
        <auro-input type="credit-card" required id="input01"></auro-input>
      `);

      const eli18n = await fixture(html`
        <auro-input type="credit-card" required lang="es" id="input01"></auro-input>
      `);

      const eli18nContent = eli18n.shadowRoot.querySelector('[name="helptext"]').innerHTML;
      const content = el.shadowRoot.querySelector('[name="helptext"]').innerHTML;

      expect(content).to.not.contain(`Por favor`);
      expect(eli18nContent).to.contain(`Por favor`);
      expect(eli18n.shadowRoot.querySelector('#input01')).to.have.attribute('lang', 'es');
    });
  });

  describe('handles credit card formatting', () => {
    it('starts with "34" is American Express', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);


      await setInputValue(el, '34');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-amex');
    });

    it('starts with "37" is American Express', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '37');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-amex');
    });

    it('starts with "4" is Visa', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '4');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-visa');
    });

    it('starts with "22" is MasterCard', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '5');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-mastercard');
    });

    it('starts with "644" is Discover Card', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '6');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-discover');
    });

    it('Undefined Value', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, undefined);
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'credit-card');
    });

    it('Empty Value', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'credit-card');
    });

    it('Alaska Visa Cards', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '4147 34');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-visa');
    });

    it('Any Corp Card', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '2');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'credit-card');
    });

    it('Alaska Corp Cards', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '27');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-alaska');
    });
  });
});

function setInputValue(el, value) {
  const input = el.shadowRoot.querySelector('input');
  input.value = value;
  input.dispatchEvent(new InputEvent('input'));
}
