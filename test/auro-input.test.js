import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-input.js';

describe('auro-input', () => {

  it('renders the label', async () => {
    const el = await fixture(html`
      <auro-input label="First name"></auro-input>
    `);

    const root = el.shadowRoot;
    const label = root.querySelector('label');
    expect(label.textContent).to.equal('First name (optional)');
  });

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

  it('sets error when input not valid', async () => {
    const el = await fixture(html`
      <auro-input label="First name" required helptext="Help text" customvalidationmessage="Expected error"></auro-input>
    `);

    const input = el.shadowRoot.querySelector('input');
    const helpText = el.shadowRoot.querySelector('p');
    expect(helpText.textContent).to.equal('Help text');

    input.focus();
    input.blur();
    await elementUpdated(el);

    const error = el.shadowRoot.querySelector('p');
    expect(error.textContent).to.equal('Expected error');
  });

  it('always has error if error set', async () => {
    const el = await fixture(html`
      <auro-input label="First name" required helptext="Help text" error="Expected error"></auro-input>
    `);

    let error = el.shadowRoot.querySelector('p');
    expect(error.textContent).to.equal('Expected error');

    const input = el.shadowRoot.querySelector('input');

    input.value = 'whatever';
    input.focus();
    input.blur();
    await elementUpdated(el);

    // re-query to make sure it hasn't been replaced with help text
    error = el.shadowRoot.querySelector('p');
    expect(error.textContent).to.equal('Expected error');
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

    const input = el.shadowRoot.querySelector('input');
    input.value = 'triggered';
    input.dispatchEvent(new InputEvent('input'));
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

    const spy = sinon.spy(el, 'validate');
    const input = el.shadowRoot.querySelector('input');
    input.focus();
    input.value = 'whatever@alaskaair.com';
    input.dispatchEvent(new InputEvent('input'));

    expect(spy.callCount).to.equal(0);
    input.blur();

    input.value = 'whatever';
    input.dispatchEvent(new InputEvent('input'));
    expect(spy.callCount).to.be.greaterThan(0);
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
    `);

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









  it('auro-input is accessible', async () => {
    const el = await fixture(html`
      <auro-input cssclass="testClass"></auro-input>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-input custom element is defined', async () => {
    const el = await !!customElements.get("auro-input");

    await expect(el).to.be.true;
  });
});
