export class BookPreview extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Get the book data from the element's attributes
    const title = this.getAttribute('title');
    const author = this.getAttribute('author');
    const image = this.getAttribute('image');

    // Create the shadow DOM content
    this.shadowRoot.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${author}</div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('book-preview', BookPreview);
