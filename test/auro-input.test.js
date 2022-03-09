import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
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

  it('sets disabled class on label when component disabled', async () => {
    const el = await fixture(html`
      <auro-input disabled label="Disabled input"></auro-input>
    `);

    const label = el.shadowRoot.querySelector('label');
    expect([...label.classList]).to.contain('is-disabled');
  });

  it('validates input after first blur', async () => {
    const el = await fixture(html`
      <auro-input required type="email" label="Label"></auro-input>
    `);
    const validateSpy = sinon.spy(el, 'validate');
    const input = el.shadowRoot.querySelector('input');

    expect(el.isValid).to.be.true;
    input.focus();
    setInputValue(el, 'whatever@alaskaair.com');
    expect(validateSpy.callCount).to.equal(0);

    input.blur();
    expect(validateSpy.callCount).to.equal(1);
    expect(el.isValid).to.be.true;

    setInputValue(el, 'whatever');
    expect(validateSpy.callCount).to.equal(2);
    expect(el.isValid).to.be.false;
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

    expect(el.isValid).to.be.true;
  });

  it('sets aria-invalid', async () => {
    const el = await fixture(html`
      <auro-input required></auro-input>
    `);

    expect(el.isValid).to.be.true;
    expect(el.inputElement.getAttribute('aria-invalid')).to.equal('false');

    el.inputElement.focus();
    el.inputElement.blur();
    await elementUpdated(el);

    expect(el.isValid).to.be.false;
    expect(el.inputElement.getAttribute('aria-invalid')).to.equal('true');
  });

  it('is programmatically focusable', async () => {
    const el = await fixture(html`
      <auro-input label="Label"></auro-input>
    `);

    el.focus();
    expect(document.activeElement === el).to.be.true;
  });

  it('updates validity when error message set after creation', async () => {
    const el = await fixture(html`
      <auro-input></auro-input>
    `)

    el.error = 'New error message';
    await elementUpdated(el);
    expect(el.isValid).to.be.false;
  });

  it('updates validity when error message removed after creation', async () => {
    const el = await fixture(html`
      <auro-input error="Test error"></auro-input>
    `);

    el.error = '';
    await elementUpdated(el);
    expect(el.isValid).to.be.true;
  });

  it('updates validity when error message removed after creation and novalidate is true', async () => {
    const el = await fixture(html`
      <auro-input error="Test error" novalidate required></auro-input>
    `);

    expect(el.isValid).to.be.false;
    el.error = '';

    await elementUpdated(el);
    expect(el.isValid).to.be.true;
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

    it('Alaska Air Visa Cards', async () => {
      const el = await fixture(html`
        <auro-input id="format-ccWithIcon" type="credit-card" icon label="Credit Card Number with Icon" required></auro-input>
      `);

      await setInputValue(el, '4147 34');
      expect(el.shadowRoot.querySelector('.accentIcon')).to.have.attribute('name', 'cc-visa');
    });
  })
});

function setInputValue(el, value) {
  const input = el.shadowRoot.querySelector('input');
  input.value = value;
  input.dispatchEvent(new InputEvent('input'));
}
