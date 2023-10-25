import { html, css, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

class CounterApp extends LitElement {
  @property({ type: Number }) currentValue = 0;
  @state() isMinimumReached = false;
  @state() isMaximumReached = false;

  static styles = css`
    :host {
      display: block;
      font-family: Roboto, Arial, Helvetica, sans-serif;
      color: var(--color-white);
    }

    .counter {
      background: var(--color-dark-grey);
      text-align: center;
    }

    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid;
    }

    .counter__actions {
      display: flex;
    }

    .counter__button {
      background: none;
      width: 50%;
      border-width: 0;
      color: var(--color-white);
      font-size: 3rem;
      height: 10rem;
      border-bottom: 1px solid var(--color-light-grey);
      transition: transform 0.1s;
      transform: translateY(0);
    }

    .counter__button:disabled {
      opacity: 0.2;
    }

    .counter__button:active {
      background: var(--color-medium-grey);
      transform: translateY(2%);
    }

    .footer {
      background: var(--color-dark-grey);
      color: var(--color-medium-grey);
      padding: 2rem;
      font-size: 0.8rem;
      text-align: center;
    }

    .footer__link {
      color: var(--color-white);
    }
  `;

  updated(changedProperties) {
    if (changedProperties.has('currentValue')) {
      this.updateState();
    }
  }

  updateState() {
    this.isMinimumReached = this.currentValue <= MIN_NUMBER;
    this.isMaximumReached = this.currentValue >= MAX_NUMBER;
  }

  subtract() {
    if (this.currentValue > MIN_NUMBER) {
      this.currentValue -= STEP_AMOUNT;
    }
  }

  add() {
    if (this.currentValue < MAX_NUMBER) {
      this.currentValue += STEP_AMOUNT;
    }
  }

  render() {
    return html`
      <div class="counter">
        <input
          class="counter__value"
          data-key="number"
          readonly
          .value="${this.currentValue}"
        />
        <div class="counter__actions">
          <button
            data-key="subtract"
            class="counter__button counter__button_first"
            ?disabled="${this.isMinimumReached}"
            @click="${this.subtract}"
          >
            -
          </button>
          <button
            data-key="add"
            class="counter__button"
            ?disabled="${this.isMaximumReached}"
            @click="${this.add}"
          >
            +
          </button>
        </div>
      </div>
      <div class="footer">
        Inspired by
        <a class="footer__link" href="https://tallycount.app/">Tally Count</a>.
        Note that this is merely a practice project for learning JavaScript
      </div>
    `;
  }
}

customElements.define('counter-app', CounterApp);
