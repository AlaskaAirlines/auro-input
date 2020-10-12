import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-input.js';

describe('auro-input', () => {
  it('sets the CSS class on auro-input > div element', async () => {
    const el = await fixture(html`
      <auro-input cssclass="testClass"></auro-input>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
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
