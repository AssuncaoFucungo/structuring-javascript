/**
 * Creates a preview element for a book.
 * @param {Object} options - The options for creating the preview element.
 * @param {string} options.id - The ID of the book
 * @param {string} options.image - Book's cover image
 * @param {string} options.title - Title of the book
 * @param {string} options.author - The author of the book
 * @returns {HTMLButtonElement} The created preview element
 */
export function createPreviewElement({ id, image, title, author }) {
    // Creating a button element to represent the book preview.
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    // Setting HTML of the element to include book information.
    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${author}</div>
        </div>
    `;

    // Return the created element.
    return element;
}
